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

//pizza cost prototype method

Pizza.prototype.calcPrice = function (size, vegetables, proteins) {
  var price = 10;
  //if size equals medium add 2, large add 4, sicilian add 6
  //for vegetables,price = price + vegetables.length*1.5
  //for meats, price = price + meat.length*3
};

//-----------------UI Logic----------------------
$(document).ready(function(){
  $("#place-order").click(function(){

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
    });//end veggies
    $("input:checkbox[name=meat]:checked").each(function(){
      inputtedProteinText.push($(this).next('label').text());
    });//end protein

    newPizza.proteins = meatList;
    newPizza.vegetables = vegList;

    // $("#pizza-output").append(`<li>Size: ${newPizza.size} </li>`);

    $("#result").show();
    $("#order-container").hide();

  });//ends order function


});//ends ready function
