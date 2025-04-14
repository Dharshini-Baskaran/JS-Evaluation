const { sumArray  } = require('../src/func3.js'); 

describe('sumArray', () => {

test('sums an array of numbers', () => {
  expect(sumArray([1, 2, 3])).toBe(6);
  expect(sumArray([0, 0, 0])).toBe(0);
  expect(sumArray([-1, 1])).toBe(0);
});

});
