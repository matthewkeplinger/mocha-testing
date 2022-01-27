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
})

describe('multiplyTwoNumbers',()=>{
  it('should multiply two numbers',()=>{
    expect(multiplyTwoNumbers(2,3)).to.deep.equal(6)
    expect(multiplyTwoNumbers(10,5)).to.deep.equal(50)
  })
  it('should allow negative numbers on multiplication', () =>{
    expect(multiplyTwoNumbers(-4,10)).to.deep.equal(-40)
    expect(multiplyTwoNumbers(-4,-3)).to.deep.equal(12)
  })
})

describe('remainderTwoNumbers',()=>{
  it('should show the remainder using the % operator',()=>{
    expect(remainderTwoNumbers(13,5)).to.deep.equal(3)
    expect(remainderTwoNumbers(4,2)).to.deep.equal(0)
  })
})

describe('sumArray', ()=>{
  it('should add the values of all positive integers in an array', () => {
    expect(sumArray([1,2,3])).to.deep.equal(6)
    expect(sumArray([2,4,6])).to.deep.equal(12)
  })
})

describe('flattenArray', () =>{
  it('should concatenate an array of arrays', ()=>{
    expect (flattenArray([[1,2], [3,4]])).to.deep.equal([1,2,3,4])
  })
})
