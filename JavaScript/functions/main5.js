//declare variable orderCount and = 0
//add 1 to orderCount inside takeOrder function
//write a getSubTotal function with one parameter
//console log getSubTotal function; pass orderCount as the argument

let orderCount = 0

const takeOrder = (topping, crustType) => {
  orderCount = orderCount + 1
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5
}

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount))

// Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.