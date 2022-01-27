

const chai = window.chai
const expect = chai.expect

describe('getCelcius', () => {
  it('should convert farenheit to celcius for all values in an array', () => {
    expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(getCelcius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
    expect(getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
  })
})

// describe('reverseStringLoop', () => {
//   it('should reverse a string that a user inputs and display both the original and reversed strings', () =>{
//     expect(reverseStringLoop('taco')).to.equal('ocat')
//   })
// })

describe('addTwoNumbers', () => {
  it('should add two numbers', () => {
    expect(addTwoNumbers(5,3)).to.deep.equal(8)
    expect(addTwoNumbers(1,3)).to.deep.equal(4)
  })
})

describe('subtractTwoNumbers', () => {
  it('should subtract two numbers and default to 0 if negative', () => {
    expect(subtractTwoNumbers(3,3)).to.deep.equal(0)
    expect(subtractTwoNumbers(1,3)).to.deep.equal(0)
    expect(subtractTwoNumbers(10,4)).to.deep.equal(6)
  })
})

describe('multiplyTwoNumbers',()=>{
  it('should multiply two numbers',()=>{
    expect(multiplyTwoNumbers(2,3)).to.deep.equal(6)
    expect(multiplyTwoNumbers(10,5)).to.deep.equal(50)
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