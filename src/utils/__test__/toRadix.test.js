import toRadix from '../toRadix';

it('toRadix to properly convert numbers', () => {
  let a = 0,
      b = 2
  expect(toRadix(a, b)).toEqual('0')
  a = 2
  b = 2
  expect(toRadix(a, b)).toEqual('10')
  a = 12
  b = 10
  expect(toRadix(a, b)).toEqual('12')
  a = 10
  b = 16
  expect(toRadix(a, b)).toEqual('a')
});

// TODO get tests working
it('does NOT convert to non positive radicies', () => {
  let a = 0,
      b = 0

  //expect(toRadix).toThrow(new Error("Radix value must be a positive integer"))
});

it('does NOT convert to non decimal radicies', () => {
  let a = 0,
      b = 1.5

  //expect(toRadix(a, b)).to.throw()
});
