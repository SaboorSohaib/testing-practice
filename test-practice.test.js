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
  test('adding 3 and 3', () =>{
    expect(cal.add(3,3)).toBe(6);
  })
  test('adding 0.5 and 0.5', ()=>{{
    expect(cal.add(0.5,0.5)).toBe(1);
  }})
});

describe('Calculator subtraction Method', () => {
  test('subtracting 1 from 5', () =>{
    expect(cal.subtract(5,1)).toBe(4);
  });
  test('subtracting 2 from 1', () =>{
    expect(cal.subtract(1,2)).toBe(-1);
  })
  test('subtracting 3 from 3', ()=>{{
    expect(cal.subtract(3,3)).toBe(0);
  }})
});

describe('Calculator Multiplication Method', () => {
  test('Multiplying 2 by 5', () =>{
    expect(cal.Multiply(2,5)).toBe(10);
  });
  test('Multiplying 3 by 1', () =>{
    expect(cal.Multiply(3,1)).toBe(3);
  })
  test('Multiplying 0 by 5', ()=>{{
    expect(cal.Multiply(0,5)).toBe(0);
  }})
});

describe('Calculator Division Method', () => {
  test('Dividing 4 by 2', () =>{
    expect(cal.Divide(4,2)).toBe(2);
  });
  test('Dividing 10 by 5', () =>{
    expect(cal.Divide(10,5)).toBe(2);
  });
  test('Dividing 4 by 0', () =>{
    expect(cal.Divide(4,0)).toBe(Infinity);
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