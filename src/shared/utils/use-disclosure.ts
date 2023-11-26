import {useState} from 'react'

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const openDisclosure = () => setIsOpen(true)
  const closeDisclosure = () => setIsOpen(false)
  const toggleDisclosure = () => setIsOpen(prev => !prev)
  const setDisclosureValue = (value: boolean) => setIsOpen(value)

  return {
    isOpen,
    openDisclosure,
    toggleDisclosure,
    closeDisclosure,
    setDisclosureValue,
  }
}
