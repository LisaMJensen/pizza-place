//Business Logic for Tickets
Learn more or give us feedback
// Business Logic for TicketBook
function PizzaOrders () {
  this.pizzas = [],
  this.pizzaId = 0
}

TicketBook.prototype.Pizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(ticket);
}

TicketBook.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

TicketBook.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

TicketBook.prototype.deletePizza = function(id) {
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

var ticketIndex = new TicketBook();

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
  } else if (size.includes("large")) {
    pizzaPrice += 4;
  } else if (size.includes("jumbo")) {
    ticketPrice +=6;
  }

  // if(toppings.includes("Sausage")) {
  //   ticketPrice -= 2;
  // }
  // if(age === "Child" || age === "Senior") {
  //   ticketPrice -= 3;
  // }
  return ticketPrice;
}

$(document).ready(function() {
  $("form#createOrder").submit(function(event) {
    event.preventDefault();
var inputtedSize = $("input:radio[name=movie]:checked").val();
var inputtedToppings = $("select#time").val();
var inputtedTime = $("input:radio[name=age]:checked").val();
var pizzaTotal = calcPrice(inputtedSize, inputtedToppings, inputtedTime);
var newPizza = new Pizzas (inputtedSize, inputtedToppings, inputtedTime, pizzaTotal);
pizzaIndex.addPizza(newPizza);
var prevID = ticketIndex.ticketId - 1;
addOutput(prevID);
