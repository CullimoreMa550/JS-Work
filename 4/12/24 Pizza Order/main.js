const pizzaSize = prompt('What size pizza would you like? [Small, Medium, Large]');
const toppingsList = 'Topping Choices: Pepperoni, Sausage, Ham, Olives, Peppers, Onions, Pineapple, Bacon, Mushrooms';
alert(toppingsList);
const top1 = prompt('What is your first topping choice?');
const top2 = prompt('What is your second topping choice?');

alert(`Your Pizza: \n Size: ${pizzaSize} \n Toppings: ${top1} & ${top2}`);