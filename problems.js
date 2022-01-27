// farenheit to celcius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// (32°F − 32) × 5/9 = 0°C

function getCelcius(farenheit) {
  return farenheit.map(value => (value -32) * 5/9)
}


//reverse a user-input string (user input will be mocked for testing)
//let userString = prompt('Enter a string to reverse:');

// function reverseStringLoop(userString) {
//     let firstString = userString;
//     let newString = '';
//     for (let i = userString.length - 1; i >= 0; i--) {
//         newString += userString[i];
//     }
//     console.log(firstString);
//     console.log(newString);
// }

function addTwoNumbers(num,num2) {
  return num + num2;
}

function subtractTwoNumbers(num,num2) {
 let difference = num - num2;
 if(difference < 0){
   difference = 0
 }
 return difference;
}

function multiplyTwoNumbers(num,num2){
  return num * num2;
}
