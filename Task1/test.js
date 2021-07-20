const stringLength = require('./stringLength.js');

it('stringLength("React") should return number', () => {
    expect(typeof stringLength('text')).toBe('number');
})
it('stringLength("") should return "Your text should be equal or greater than 1"', () => {
    expect(stringLength('')).toEqual('Your text should be equal or greater than 1');
})
it('stringLength("My favourite framework is React") should return "Your text should be equal or less than 10"', () => {
    expect(stringLength('My favourite framework is React')).toEqual("Your text should be equal or less than 10");
})
it('stringLength("Html") should return 4', () => {
    expect(stringLength('Html')).toBe(4);
})
it('stringLength("Css") should return 3', () => {
    expect(stringLength('Css')).toBe(3);
})
it('stringLength("Bootstrap") should return 0', () => {
    expect(stringLength('Bootstrap')).toBe(9);
})