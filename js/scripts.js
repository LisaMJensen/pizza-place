// Business Logic for pizzaOrders

// function PizzaOrders () {
//   this.pizzas = [],
//   this.pizzaId = 0
// }
//
// PizzaOrders.prototype.addPizza = function(pizza) {
//   pizza.id = this.assignId();
//   this.pizzas.push(pizza);
// }
//
// PizzaOrders.prototype.assignId = function() {
//   this.pizzaId += 1;
//   return this.pizzaId;
// }

// PizzaOrders.prototype.findPizza = function(id) {
//   for (var i=0; i< this.pizzas.length; i++) {
//     if (this.pizzas[i]) {
//       if (this.pizzas[i].id == id) {
//         return this.pizzas[i];
//       }
//     }
//   };
//   return false;
// }

// PizzaOrders.prototype.deletePizza = function(id) {
//   for (var i=0; i<this.pizzas.length; i++) {
//     if (this.pizzas[i]) {
//       if (this.pizzas[i].id == id) {
//         delete this.pizzas[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }

// var pizzaIndex = new PizzaOrders();

function Pizzas (size, toppings, time, price) {
  this.size = size,
  this.toppings = toppings,
  this.time = time,
  this.price = 0
}

Pizzas.prototype.calcPrice = function() {
  // var pizzaPrice = 7;

  //calculate size portion of price
  if (this.size.includes("small")) {
    this.price += 6
  } if (this.size.includes("medium")) {
    this.price += 8
  } if (this.size.includes("large")) {
    this.price += 10
  } if (this.size.includes("jumbo")) {
    this.price += 12
  }
  //calculate toppings portion of price
  if(toppings.length <= 2) {
    this.price += 0;
  } if (toppings.length >= 3) {
    this.price += 2;
  } if (toppings.length >= 4) {
    this.price += 3;
  } if (toppings.length >= 5) {
    this.price += 4;
  } if (toppings.length >= 6) {
    this. price += 8
   return this.price;
   console.log(this.price);
}
}

Pizzas.prototype.pizzaPrice = function() {
  return "$" + this.price;
}

function addOutput (arrayNum) {
  $("span#size").html(size);
  $("span#toppings").html(toppings);
  // $("span#time").html(pizzaIndex.pizzas[arrayNum].time);
  $("span#price").html("$" + pizzaIndex.pizzas[arrayNum].price);
}

$(document).ready(function() {
  $("form#createOrder").submit(function(event) {
    event.preventDefault();
var inputtedSize = $("input:radio[name=size]:checked").val();
var inputtedToppings = []; $("input:checkbox[name=toppings]:checked").each(function() {inputtedToppings.push($(this).val());})
// var inputtedTime = $("select#time").val();
// var pizzaTotal = calcPrice(inputtedSize, inputtedToppings, inputtedTime);
var newPizza = new Pizzas (inputtedSize, inputtedToppings);

newPizza.calcPrice();
alert(pizzaPrice);
// pizzaIndex.addPizza(newPizza);
// var prevID = pizzaIndex.pizzaId - 1;
// addOutput(prevID);

// alert(inputtedSize);
// alert(inputtedTime);
// alert(inputtedToppings);
});
});
