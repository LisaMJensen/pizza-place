// Business Logic for pizzaOrders


function Pizzas (size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}



//calculate size portion of price
Pizzas.prototype.calcSizePrice = function() {

  if (this.size.includes("Small")) {
    this.price += 6
  } else if (this.size.includes("Medium")) {
    this.price += 8
  } else if (this.size.includes("Large")) {
    this.price += 10
  } else { (this.size.includes("Jumbo"))
    this.price += 12
  }
}

  //calculate toppings portion of price
Pizzas.prototype.calcToppingPrice = function() {
  if(this.toppings.length <= 1) {
    this.price += 0;
  } else if (toppings.length >= 3) {
    this.price += 2;
  } else if (toppings.length >= 5) {
    this.price += 4;
  } else if (toppings.length >= 7) {
    this.price += 6;
  } else {
    this. price += 8
}
}
console.log(this.price);


//User Interface

$(document).ready(function() {
  $("form#createOrder").submit(function(event) {
    event.preventDefault();
var inputtedSize = $("input:radio[name=size]:checked").val();
var inputtedToppings = []; $("input:checkbox[name=toppings]:checked").each(function() {inputtedToppings.push($(this).val());
})

var newPizza = new Pizzas (inputtedSize, inputtedToppings, 0);

newPizza.calcSizePrice();
newPizza.calcToppingPrice();

$("span#orderTotal").html("Your order total is $" + newPizza.price)

});
});
