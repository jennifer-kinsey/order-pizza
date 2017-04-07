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

Pizza.prototype.calcPrice = function () {
  var price = 10;

  //size
  if(this.size === "Medium"){
    price += 2;
  }else if(this.size === "Large"){
    price += 4;
  } else if(this.size ==="Extra-large"){
    price += 6
  }
  //veggies add-ons
  price += (this.vegetables.length * 1.5);

  //meat add-ons
  price += (this.proteins.length * 3);
  return price;
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
      meatList.push($(this).next('label').text());
    });//end protein

    newPizza.proteins = meatList;
    newPizza.vegetables = vegList;
    var newPrice = newPizza.calcPrice().toFixed(2);

    $("#pizza-output").append(`<li>Size: ${newPizza.size} </li>
                              <li>Crust: ${newPizza.crust}</li>
                              <li>Cheese: ${newPizza.cheese}</li>
                              <li>Sauce: ${newPizza.sauce}</li>
                              <li>Veggies: ${newPizza.vegetables}</li>
                              <li>Protein:${newPizza.proteins}</li>`);
    $("#pizza-price").append("$" + newPrice);

    $("#result").show();
    $("#order-container").hide();

    console.log(newPizza);
    console.log(newPizza.calcPrice());

  });//ends order function


});//ends ready function
