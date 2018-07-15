let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

// 1. We created a function named pressPowerButton.

// const pressPowerButton creates a variable with a given name written in camelCase.

// The variable is then set equal = to a set of parentheses followed by an arrow token () =>, indicating the variable stores a function. This syntax is known as arrow function syntax.

// Finally, between the curly braces {} is the function body, or the JavaScript statements that define the function. This is followed by a semi-colon ;. In JavaScript, any code between curly braces is also known as a block.

// 2. Inside the function body is an if/else statement.

// 3. On the last few lines, we call the function by writing its name followed by a semi-colon pressPowerButton();. This executes the function, running all code within the function body. 

// 4. We executed the code in the function body twice without having to write the same set of instructions twice. Functions can make code reusable!