export function distributedCopy(items: any, n: number) {
  var elements = [items[0]]
  var totalItems = items.length - 2
  var interval = Math.floor(totalItems / (n - 2))
  for (var i = 1; i < n - 1; i++) {
    elements.push(items[i * interval])
  }
  elements.push(items[items.length - 1])
  return elements
}

export const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString)

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}
