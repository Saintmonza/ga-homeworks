/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];


// Only passing one test
function removeBlank(array) {
// Convert 0 into a string/truthy:
const zero = 0;
console.log(typeof(zero))

const zeroConverted = zero.toString()
console.log(typeof(zeroConverted))

// zero === zeroConverted ? console.log('Equal!') : console.log('Different!')
// Remove empty values (arrays, objects, elements)
  return array.filter(element => element !== null)
  }

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
let randomItem = array[Math.floor(Math.random()*array.length)]
return randomItem
}
console.log(randomElement)

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  // second lowest
  const secondLowest = Math.min.apply(null, array.filter(num => num != min))
  return secondLowest
  console.log(secondLowest)
  // second largest number 
  return array[array.length - 2];
}

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]


// Unable to attempt from here due to funeral planning

function coins(price) {

}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {

}

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}


module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci
}
