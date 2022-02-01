var number
var square
function getNumber() {
    return number = prompt("Please enter a number:")   
}
getNumber();
function countMySquare() {
    return square = number * number;
}
countMySquare(number);
alert("The square of " + number + " = " + square);