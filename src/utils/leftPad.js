const leftPad = (value, padding, delimiter = ' ') => {
  if (value === null || value === undefined) return value;
  if (Number.isNaN(padding) || padding <= 0) return value

  let result = '';
  for (let i = 0; i < padding - value.length; i++) {
    result += delimiter
  }

  result += value
  return result
}

export default leftPad
