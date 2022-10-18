// const sum = require('./test-practice.js');
const {stringLength, reverseString, calculator, capitalString} = require('./test-practice.js');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const cal = new calculator();

test('Length of Normal String' , () => {
  expect(stringLength('Abdul')).toBe(5);
  expect(stringLength('Saboor')).toBe(6);
  expect(stringLength('sohaib')).toBe(6);
});

test('Length of String between 1 and 10', () => {
  expect(stringLength('')).toBe(undefined);
  expect(stringLength(' ')).toBe(1);
  expect(stringLength('Name')).toBe(4);
  expect(stringLength('where are you from?')).toBe(undefined);
  expect(stringLength('Afghan')).toBe(6);
  expect(stringLength('abcdefghij')).toBe(10);
});

test('Reverse of string', () => {
  expect(reverseString('good')).toBe('doog');
  expect(reverseString('car')).toBe('rac');
  expect(reverseString('go')).toBe('og');
});

describe('Calculator addition Method', () => {
  test('adding 10 and 5', () =>{
    expect(cal.add(10,5)).toBe(15);
  });
});


describe('Capital String Method', () => {
  test('"hi" becomes "Hi"', () => {
    expect(capitalString('hi')).toBe('Hi');
  });
  test('"sohaib" become "Sohaib"', () => {
    expect(capitalString('sohaib')).toBe('Sohaib')
  });
});