//-------------Backend Logic--------------------

//pizza constructor
function Pizza(delivery, size, crust, cheese, sauce, vegetables, proteins){
  this.delivery = delivery;
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.sauce = sauce;
  this.vegetables = vegetables;
  this.proteins = proteins;
}
//Order constructor
function Order(){
  this.totalPrice = [];
}

Pizza.prototype.calcPrice = function () {
  var price = 10;
  if(this.size === "Medium"){
    price += 2;
  }else if(this.size === "Large"){
    price += 4;
  } else if(this.size ==="Extra-large"){
    price += 6
  }
  price += (this.vegetables.length * 2);

  price += (this.proteins.length * 3);
  return price;
};

Order.prototype.addUp = function () {
  var total = 0;
  $.each(this.totalPrice,function() {
    total += this;
  });
  return total;
};

//-----------------UI Logic----------------------
$(document).ready(function(){
  var newOrder = new Order();
  $("#add-select-to-order").click(function(){
    var inputtedDeliveryText = $('input[name="order"]:checked').next('label').text();
    var inputtedSizeText = $('input[name="size"]:checked').next('label').text();
    var inputtedCrustText = $('input[name="crust"]:checked').next('label').text();
    var inputtedCheeseText = $('input[name="cheese"]:checked').next('label').text();
    var inputtedSauceText = $('input[name="sauce"]:checked').next('label').text();
    var vegList = [];
    var meatList = [];

    var newPizza = new Pizza(inputtedDeliveryText, inputtedSizeText, inputtedCrustText, inputtedCheeseText, inputtedSauceText, vegList, meatList);

    $("input:checkbox[name='veg-toppings']:checked").each(function(){
      vegList.push($(this).next('label').text());
    });/
    $("input:checkbox[name=meat]:checked").each(function(){
      meatList.push($(this).next('label').text());
    });

    newPizza.proteins = meatList;
    newPizza.vegetables = vegList;

    var newPrice = newPizza.calcPrice();
    newOrder.totalPrice.push(newPrice);

    $(".per-pizza-output").prepend(`<h3>Pizza # ${newOrder.totalPrice.length}</h3>
                              <ul><li>Size: ${newPizza.size} </li>
                              <li>Crust: ${newPizza.crust}</li>
                              <li>Cheese: ${newPizza.cheese}</li>
                              <li>Sauce: ${newPizza.sauce}</li>
                              <li>Veggies: ${newPizza.vegetables}</li>
                              <li>Protein:${newPizza.proteins}</li></ul>
                              <h4>Subtotal: $${newPrice}.00</h4><hr>`);
    var newTotal = newOrder.addUp();
    $("#total").text(`${newTotal}`);
    $("#result").show();
    $("#complete-btn").show();
    console.log(newPizza);
    console.log(newPizza.calcPrice());
  });

  $("#reset-pizza").click(function(){
    $("#add-select-to-order").show();
  });//ends reset pizza/add another pizza function
});//ends ready function
