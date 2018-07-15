//Function expressions are often stored in a variable. You can //identify a function expression by the absence of a function name //immediately trailing the function keyword.

//Arrow function syntax is a shorter syntax for a function //expression. 

const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(4, 8))