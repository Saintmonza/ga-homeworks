/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: 'Apple',
  model: 'Macbook Pro',
  ram: 8,
  storage: 1
}

/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
name: 'Red',
grape: 'Merlot',
vintage: 2017,
volume: 750,
amountRemaining: 750,
amount: NaN,
drink(amount){
  this.amountRemaining -= amount
},
refill(amount){
  this.amountRemaining += amount
}
}

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor(name, description, price) {
  this.name = 'name',
  this.description = 'description',
  this.price = NaN
}
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart {
  constructor(contents){
    this.contents = ['']
  }

addItem(){
  for (let i = 0; i < Cart.length; i++){
    console.log(Cart)
  }
}

removeItem(){
  this.contents = this.contents.splice(contents)
  console.log(Cart)
}

empty(){
  this.contents = []
  console.log(Cart)
}
getTotal(){
// must itterate through the array, adding the next index until the end of the array in order to get the sum.
}
}
/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {
  constructor (width, height){
this.width = width
this.height = height
}

getArea(){
  // width * length
return this.width * this.height,
console.log(getArea)
}

getPerimeter(numOfSides, height){
  // length * Number of sides
  // missing the actual function of numOfSides
  const numOfsides = () => {
    return this.height * numOfSides,
    console.log(getPerimeter)
  }
  }
}



// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}
