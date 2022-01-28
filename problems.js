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

//SHOULD convert feet to miles
//SHOULD round to 7 decimal places
//SHOULD NOT allow negative inputs
//SHOULD NOT allow non-number inputs
function feetToMiles(feet){
  let conversion = parseInt(feet) / 5280;
  if (feet <=0 || isNaN(feet)){
    return 'Error on input'
  } else {
    return parseFloat(conversion.toFixed(7));
  }
}

//SHOULD convert inches to meters
//SHOULD round to four decimal places
//SHOULD NOT allow negative inputs
//SHOULD NOT allow non-number inputs
function inchesToMeters(inches){
    let conversion = parseInt(inches) / 39.3701
    if(inches <= 0){
      return "Error, not a positive result"
    } else if (isNaN(inches)){
      return "Not a Number"
    } else {
      return parseFloat(conversion.toFixed(4))
    }
  }

//SHOULD convert inches to feet and inches
//SHOULD NOT allow negative numbers
//SHOULD NOT allow non-numbers
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

//SHOULD add two integers (positive, negative, or mixed sign)
//SHOULD NOT allow non-numbers
function addTwoNumbers(num,num2) {
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num + num2;
  }
}

//SHOULD subtract two integers (positive, negative, or mixed sign)
//SHOULD NOT allow non-numbers
function subtractTwoNumbers(num,num2) {
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num - num2;
  }
}

//SHOULD multiply two integers (positive, negative, or mixed sign)
//SHOULD NOT allow non-numbers
function multiplyTwoNumbers(num,num2){
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num * num2;
  }
}

//SHOULD find remainder of two numbers
//SHOULD NOT allow non-numbers
function remainderTwoNumbers(num,num2){
  if(isNaN(num) || isNaN(num2)){
    return 'Not a Number'
  } else {
    return num % num2;
  }
}

//SHOULD calculate the sum of all integers in an array (positive, negative, or mixed sign)
function sumArray(arr){
  let sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  )
  return sum;
}

//SHOULD concatenate an array of arrays into one array
//SHOULD NOT leave multi-dimensional arrays
function flattenArray(arr){
  let flatten = arr.reduce((previousValue, currentValue) => 
  previousValue.concat(currentValue), []
  )
  return flatten;
}

//SHOULD average an array
function averageArray(arr){
  const average = arr.reduce((previousValue,currentValue) => previousValue + currentValue, 0) / arr.length;
  return average;
}

//SHOULD check if a string is a palindrome
function isPalindrome(str) {
  if (str != ''){
    return str === str.split('').reverse().join('')
  }else{
    return false;
  }
}