/**
 * @param str string as input
 * @returns remove parentheses "()", underscore "_", spaces " " e.g. "(777) 777 __ __" => "777777"
 */
export const clearLoginMask = (str: string) => str.replace(/[\(\) _]/g, "")
