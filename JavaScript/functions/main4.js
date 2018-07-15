//Add a second parameter; Call the function 3 times with different //arguments

const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushrooms', 'Thin crust');
takeOrder('olives', 'Thick crust');
takeOrder('anchovies', 'Stuffed crust');