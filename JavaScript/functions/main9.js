//The most condensed form of the function is known as CONCISE BODY.

const volumeOfSphere = diameter => 
 (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// //1.Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.

// 2.A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

// 3.A function composed of a sole single-line block does not need brackets.
