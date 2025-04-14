const { isEven } = require('../src/func2.js'); // Assuming email_extractor.js contains the function

describe('isEven', () => {
  
test('checks if number is even', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(0)).toBe(true);
});

});
