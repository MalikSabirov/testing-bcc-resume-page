import { useEffect, useId } from "react"
import { isSafari } from "./browser-detection"

const lockIdStorage = new Set()

export const useScrollLock = (dependency?: boolean) => {
  const lockId = useId()

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    const args = {
      html,
      body,
      isSafariBrowser: isSafari(),
    }

    // if dependency is not provided - lock & unlock on mount & unmount
    if (dependency === undefined) {
      lockScroll(args, lockId)
      return () => unlockScroll(args, lockId)
    }

    // lock when dep is true, else unlock
    // needed for cases where component is always mounted
    if (dependency) {
      lockScroll(args, lockId)
    } else {
      unlockScroll(args, lockId)
    }
  }, [dependency])
}

type Args = {
  html: HTMLElement
  body: HTMLElement
  isSafariBrowser: boolean
}

const lockScroll = ({ html, body, isSafariBrowser }: Args, lockId: string) => {
  lockIdStorage.add(lockId)

  html.style.cssText = `
    overflow: hidden;
    padding-right: ${getScrollbarWidth()};
  `

  if (isSafariBrowser) body.style.cssText = "touch-action:none"
}

const unlockScroll = (
  { html, body, isSafariBrowser }: Args,
  lockId: string,
) => {
  lockIdStorage.delete(lockId)

  if (lockIdStorage.size > 0) return

  html.removeAttribute("style")

  if (isSafariBrowser) body.removeAttribute("style")
}

const getScrollbarWidth = () => {
  return window.innerWidth - document.body.clientWidth + "px"
}
