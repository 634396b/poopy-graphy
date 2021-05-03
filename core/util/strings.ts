export const toPascalCase = (str: string) =>
  str
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
    .replace(/ /gm, '')

export const onlyAlphaNumeric = (x: string) =>
  x.replace(/[^a-zA-Z0-9_ ]+/gim, '')

type RS<T> = (regex: RegExp, str: string) => T
export const getMatchingRegex: RS<string> = (r, s) => s.match(r)?.pop() ?? ''
export const isMatchingRegex: RS<boolean> = (r, s) =>
  (s.match(r)?.length ?? 0) > 1

export const cmpAddrs = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase()
