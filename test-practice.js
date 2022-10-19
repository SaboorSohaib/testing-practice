// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;

function stringLength(string) {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
}


function reverseString(string) {
  return string.split('').reverse().join('');
}

class calculator {
  add(a,b){
    return a + b
  }

  subtract(a,b){
    return a - b
  }

  Multiply(a,b){
    return a * b
  }

  Divide(a,b){
    return a / b
  }
}
function capitalString(string) {
  let myArr = string.split('');
  myArr[0] =  myArr[0].toUpperCase();
  return myArr.join('');
}

module.exports = {stringLength, reverseString, calculator, capitalString}