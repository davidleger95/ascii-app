const toRadix = (value, radix) => {

  try {
    if (radix <= 0 || !Number.isInteger(radix)) {
      throw new Error('Radix value must be a positive integer')
    }
    return value !== undefined && value.toString(radix)
  } catch (err) {
    
  }

}

export default toRadix
