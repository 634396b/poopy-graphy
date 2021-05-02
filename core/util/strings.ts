export const toPascalCase = (str: string) =>
  str
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
    .replace(/ /gm, '')

export const onlyAlphaNumeric = (x: string) => x.replace(/[^a-zA-Z0-9_ ]+/gim, '')
