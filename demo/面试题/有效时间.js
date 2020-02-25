const getDate = (start, end) => {
  const result = []
  start = start.getTime()
  end = end.getTime()
  for (let i = start; i <= end; i += (24 * 60 * 60 * 1000)) {
    let date = new Date(i)
    result.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate()))
  }
  return result
}