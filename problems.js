// Author: Matt Keplinger
// Date: 27 JAN 2022
// Unit Testing with Mocha and Chai

// farenheit to celcius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// (32°F − 32) × 5/9 = 0°C
function getCelsius(farenheit) {
  return farenheit.map(value => (value -32) * 5/9)
}

//convert celsius to farenheit
//[0, 40, 90, 37] => [32, 104, 194, 98.6]
//(value * 9/5) + 32
function getFarenheit(celsius) {
  return celsius.map(value => (value * 9/5) + 32 )
}

//add two integers
function addTwoNumbers(num,num2) {
  return num + num2;
}

//subtract two integers
function subtractTwoNumbers(num,num2) {
 let difference = num - num2;
 if(difference < 0){
   difference = 0
 }
 return difference;
}

//multiply two integers
function multiplyTwoNumbers(num,num2){
  return num * num2;
}

//sum of all positive integers in an array
function sumArray(arr){
  let sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  )
  return sum;
}

//concatenate an array of arrays into one array
function flattenArray(arr){
  let flatten = arr.reduce((previousValue, currentValue) => 
  previousValue.concat(currentValue), []
  )
  return flatten;
}

