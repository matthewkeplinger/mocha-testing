// Author: Matt Keplinger
// Date: 27 JAN 2022
// Unit Testing with Mocha and Chai
// Filename: tests.js

//declare const for chai
const chai = window.chai
const expect = chai.expect

describe('getCelsius', () => {
  it('should convert farenheit to celsius for all values in an array', () => {
    expect(getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(getCelsius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
    expect(getCelsius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
  })
})

describe('getFarenheit', () => {
  it('should convert celsius to farenheit for all values in an array', () => {
    expect(getFarenheit([0, 40, 90, 37])).to.deep.equal([32, 104, 194, 98.6])
  })
})

describe('feetToMiles',() =>{
  it('should convert 5280 feet to 1 mile', () =>{
    expect(feetToMiles(5280)).to.deep.equal(1)
  })
  it('should round the result to 7 decimal places', () =>{
    expect(feetToMiles(3500)).to.deep.equal(0.6628788)
  })
  it('should NOT allow negative inputs',() =>{
    expect(feetToMiles(-30)).to.deep.equal('Error on input')
  })
  it('should NOT allow non-number inputs', () => {
    expect(feetToMiles('a')).to.deep.equal('Error on input')
  })
})
describe('inchesToMeters',() => {
  it('should take a 54 inches and convert to 1.3716 meters',() =>{
    expect(inchesToMeters(54)).to.deep.equal(1.3716)
  })
  it('should NOT allow negative numbers for inch input', () =>{
    expect(inchesToMeters(-2)).to.deep.equal('Error, not a positive result')
  })
  it('should NOT allow non-numbers to be input for inches', () =>{
    expect(inchesToMeters('a')).to.deep.equal('Not a Number')
  })
})

describe('inchToFoot',() =>{
  it('should take an input of 12 inches and convert it to 1 foot', () =>{
    expect(inchToFoot(12)).to.deep.equal('1ft. 0in.')
  })
  it('should take an input of 50 inches and convert it to 4ft. 2in.', () =>{
    expect(inchToFoot(50)).to.deep.equal('4ft. 2in.')
  })
  it('should NOT allow 0 as an input',() =>{
    expect(inchToFoot(0)).to.deep.equal('Error, only positive integers can be converted')
  })
  it('should NOT allow negative integers as an input',() =>{
    expect(inchToFoot(-24)).to.deep.equal('Error, only positive integers can be converted')
  })
  it('should NOT allow non-numbers as an input', () =>{
    expect(inchToFoot('A')).to.deep.equal('Not a Number')
  })
})

describe('addTwoNumbers', () => {
  it('should add two positive numbers', () => {
    expect(addTwoNumbers(5,3)).to.deep.equal(8)
    expect(addTwoNumbers(1,3)).to.deep.equal(4)
  })
  it('should add two negative numbers', () =>{
    expect(addTwoNumbers(-3,-2)).to.deep.equal(-5)
    expect(addTwoNumbers(-3,-4)).to.deep.equal(-7)
  })
  it('should add a positive and negative number', () =>{
    expect(addTwoNumbers(-3,2)).to.deep.equal(-1)
    expect(addTwoNumbers(4,-5)).to.deep.equal(-1)
  })
  it('should NOT allow non-numbers as input',() =>{
    expect(addTwoNumbers('d',3)).to.deep.equal('Not a Number')
  })
})

describe('subtractTwoNumbers', () => {
  it('should subtract two positive numbers and allow negative difference', () => {
    expect(subtractTwoNumbers(1,3)).to.deep.equal(-2)
    expect(subtractTwoNumbers(10,4)).to.deep.equal(6)
  })
  it('should subtract two negative numbers and allow negative difference', () =>{
    expect(subtractTwoNumbers(-4,10)).to.deep.equal(-14)
    expect(subtractTwoNumbers(-7,-5)).to.deep.equal(-2)
  })
  it('should subtract positive and negative numbers and allow positive difference', () =>{
    expect(subtractTwoNumbers(10,-4)).to.deep.equal(14)
    expect(subtractTwoNumbers(15,-8)).to.deep.equal(23)
  })
  it('should subtract positive and negative numbers and allow negative difference', () =>{
    expect(subtractTwoNumbers(-10,4)).to.deep.equal(-14)
    expect(subtractTwoNumbers(-15,8)).to.deep.equal(-23)
  })
  it('should allow a ZERO result', () =>{
    expect(subtractTwoNumbers(-10,-10)).to.deep.equal(0)
    expect(subtractTwoNumbers(3,3)).to.deep.equal(0)
  })
  it('should NOT allow non-numbers as input',() =>{
    expect(subtractTwoNumbers('d',3)).to.deep.equal('Not a Number')
  })
})

describe('multiplyTwoNumbers',()=>{
  it('should multiply two positive numbers',()=>{
    expect(multiplyTwoNumbers(2,3)).to.deep.equal(6)
    expect(multiplyTwoNumbers(10,5)).to.deep.equal(50)
  })
  it('should allow one negative number on multiplication', () =>{
    expect(multiplyTwoNumbers(-4,10)).to.deep.equal(-40)
  })
  it('should allow both numbers to be negative on multiplication',() =>{
    expect(multiplyTwoNumbers(-4,-3)).to.deep.equal(12)
  })
  it('should NOT allow non-numbers as input',() =>{
    expect(multiplyTwoNumbers('d',3)).to.deep.equal('Not a Number')
  })
})

describe('remainderTwoNumbers',()=>{
  it('should show the remainder using the % operator',()=>{
    expect(remainderTwoNumbers(13,5)).to.deep.equal(3)
    expect(remainderTwoNumbers(4,2)).to.deep.equal(0)
  })
  it('should NOT allow non-numbers as input',() =>{
    expect(remainderTwoNumbers('d',3)).to.deep.equal('Not a Number')
  })
})

describe('sumArray', ()=>{
  it('should add the values of all positive integers in an array', () => {
    expect(sumArray([1,2,3])).to.deep.equal(6)
    expect(sumArray([2,4,6])).to.deep.equal(12)
  })
  it('should add for negative and positive integers in an array',() => {
    expect(sumArray([2,-2])).to.deep.equal(0)
  })
  it('should add the values of all negative integers in an array',() => {
    expect(sumArray([-1,-1,-3])).to.deep.equal(-5)
  })
})

describe('flattenArray', () =>{
  it('should concatenate an array of arrays', ()=>{
    expect (flattenArray([[1,2], [3,4]])).to.deep.equal([1,2,3,4])
    expect (flattenArray([[1,3], [5,7]])).to.deep.equal([1,3,5,7])
  })
  it('should NOT leave a multi-dimensional array', ()=>{
    expect (flattenArray([[1,2], [3,4]])).to.not.equal([[1,2],[3,4]])
    expect (flattenArray([[1,3], [5,7]])).to.not.equal([[1,3],[5,7]])
  })
})

describe('averageArray', () => {
  it('should display average for calculation of array [1,2,3] with result of 2', () =>{
    expect(averageArray([1,2,3])).to.deep.equal(2)
  })
  it('should display average for calculation of array [5,5,2,8] with average of 5', () => {
    expect(averageArray([5,5,2,8])).to.deep.equal(5)
  })
})

describe('isPalindrome', ()=>{
  it('should return TRUE if a string is a palindrome', () => {
    expect(isPalindrome('mom')).to.be.true
    expect(isPalindrome('racecar')).to.be.true
  })
  it('should return FALSE if a string is NOT a palindrome', () => {
    expect(isPalindrome('fire')).to.be.false
    expect(isPalindrome('saddle')).to.be.false
  })
  it('should return FALSE for empty string', () => {
    expect(isPalindrome('')).to.be.false
  })
})