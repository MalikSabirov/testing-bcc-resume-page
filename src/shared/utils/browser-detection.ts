export const isSafari = () =>
  !isChrome() && window.navigator.userAgent.indexOf("Safari") > -1

export const isChrome = () => window.navigator.userAgent.indexOf("Chrome") > -1
