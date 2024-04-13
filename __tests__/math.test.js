const { sum, sub, div, mul } = require('..');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sub function', () => {
  test('subtracts 3 - 1 to equal 2', () => {
    expect(sub(3, 1)).toBe(2);
  });
});

describe('div function', () => {
  test('divides 6 by 2 to equal 3', () => {
    expect(div(6, 2)).toBe(3);
  });

  //   test('throws error when dividing by 0', () => {
  //     expect(() => div(6, 0)).toThrow();
  //   });
});

describe('mul function', () => {
  test('multiplies 2 by 3 to equal 6', () => {
    expect(mul(2, 3)).toBe(6);
  });
});
