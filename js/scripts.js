// Business Logic for pizzaOrders
function PizzaOrders () {
  this.pizzas = [],
  this.pizzaId = 0
}

PizzaOrders.prototype.Pizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(ticket);
}

PizzaOrders.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaOrders.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

PizzaOrders.prototype.deletePizza = function(id) {
  for (var i=0; i<this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

var pizzaIndex = new PizzaOrders();
function Pizzas (size, toppings, time, price) {
  this.size = size,
  this.toppings = toppings;
  this.time = time,
  this.price = price
}

function calcPrice(size, toppings, time) {
  var pizzaPrice = 7;
  if (size.includes("medium")) {
    pizzaPrice += 2;
  } if (size.includes("large")) {
    pizzaPrice += 4;
  } if (size.includes("jumbo")) {
    pizzaPrice +=6;
  }

  // if(toppings.includes("Sausage")) {
  //   pizzaPrice += 2;
  // }
  if(time.includes("9PM" || "10PM")) {
    pizzaPrice += 2;
  }
  return pizzaPrice;
}

function addOutput (arrayNum) {
  $("span#size").html(pizzaIndex.pizzas[arrayNum].size);
  $("span#toppings").html(pizzaIndex.pizzas[arrayNum].toppings);
  $("span#time").html(pizzaIndex.pizzas[arrayNum].time);
  $("span#price").html("$" + pizzaIndex.pizzas[arrayNum].price);
}

$(document).ready(function() {
  $("form#createOrder").submit(function(event) {
    event.preventDefault();
var inputtedSize = $("input:radio[name=size]:checked").val();
var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
var inputtedTime = $("select#time").val();
var pizzaTotal = calcPrice(inputtedSize, inputtedToppings, inputtedTime);
// var newPizza = new Pizzas (inputtedSize, inputtedToppings, inputtedTime, pizzaTotal);
// pizzaIndex.addPizza(newPizza);
// var prevID = pizzaIndex.pizzaId - 1;
// addOutput(prevID);

// alert(inputtedSize);
// alert(inputtedTime);
alert(inputtedToppings);
});
});
