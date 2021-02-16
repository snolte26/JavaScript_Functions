var wrapper = document.querySelector(".wrapper");

var submitEle = document.querySelector(".submit");

function showResult() {
  // asks user for cost of gas and miles driven
  var gasCost = Number(prompt("What is the cost of gas/gallon: "));
  var miles = Number(prompt("How many miles do you drive: "));

  // here are the 4 mpg ratings to use
  var mpg1 = Number(12);
  var mpg2 = Number(17);
  var mpg3 = Number(26);
  var mpg4 = Number(29);

  // print out text and calculations sent to total()
  document.getElementById("1").innerHTML = total(mpg1, miles, gasCost);

  document.getElementById("2").innerHTML = total(mpg2, miles, gasCost);

  document.getElementById("3").innerHTML = total(mpg3, miles, gasCost);

  document.getElementById("4").innerHTML = total(mpg4, miles, gasCost);
}

// takes the mpg, miles drive, and cost of gas
// and calculates the cost, rounded
function total(mpg, milesDriven, cost) {
  var text =
    "To drive a car with a MPG rating of " +
    mpg +
    " for " +
    milesDriven +
    " miles at $" +
    cost +
    " per gallon it would cost $";

  var Exact = (milesDriven * cost) / mpg;
  var Total = Math.round(Exact * 100) / 100;
  var Final = text + Total + ".";
  return Final;
}

showResult();

submitEle.addEventListener("click", function () {
  showResult();
});