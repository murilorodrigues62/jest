const {sum, sub} = require('./index');

test('sum: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);  
});

test('sub: adds 2 - 1 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);  
});