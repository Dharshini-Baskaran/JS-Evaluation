const { capitalizeFirstLetter } = require('../src/func1.js'); 

describe('capitalizeFirstLetter', () => {

  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');  
    expect(capitalizeFirstLetter('javascript')).toBe('Javascript');
  });
  
  
});