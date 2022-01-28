// Author: Matt Keplinger
// Date: 27 JAN 2022
// Unit Testing with Mocha and Chai
// Filename: problems.js

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

//convert inches to feet and inches
function inchToFoot(inches){
  if(inches <= 0 ){
    return "Error, only positive integers can be converted"
  }
  else if(isNaN(inches)){
    return "Not a Number"
  } else {
    return (parseInt(inches/12) + 'ft. ' + Math.round(inches%12, 1) + 'in.')
  }
}

//add two integers
function addTwoNumbers(num,num2) {
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num + num2;
  }
}

//subtract two integers
function subtractTwoNumbers(num,num2) {
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num - num2;
  }
}

//multiply two integers
function multiplyTwoNumbers(num,num2){
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num * num2;
  }
}

//find remainder of two numbers
function remainderTwoNumbers(num,num2){
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num % num2;
  }
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

//average an array
function averageArray(arr){
  const average = arr.reduce((previousValue,currentValue) => previousValue + currentValue, 0) / arr.length;
  return average;
}

//check if a string is a palindrome
function isPalindrome(str) {
  if (str != ''){
    return str === str.split('').reverse().join('')
  }else{
    return false;
  }
}