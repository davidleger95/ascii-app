import leftPad from '../leftPad';

it('pads string with a static amount of places', () => {
  let a = '2',
      b = 2
  expect(leftPad(a, b)).toEqual(' 2')
  a = '12'
  b = 2
  expect(leftPad(a, b)).toEqual('12')
  a = '100'
  b = 4
  expect(leftPad(a, b)).toEqual(' 100')
})

it('does NOT pad strings if it is longer than the padding', () => {
  let a = '100',
      b = 2
  expect(leftPad(a, b)).toEqual(a)
})

it('pads empty strings', () => {
  let a = '',
      b = 2
  expect(leftPad(a, b)).toEqual('  ')
})

it('does NOT pad undefined', () => {
  let a = undefined,
      b = 2
  expect(leftPad(a, b)).toEqual(a)
})

it('does NOT pad null', () => {
  let a = null,
      b = 2
  expect(leftPad(a, b)).toEqual(a)
})

it('does NOT pad if padding is negative value', () => {
  let a = '23',
      b = -2
  expect(leftPad(a, b)).toEqual(a)
})
