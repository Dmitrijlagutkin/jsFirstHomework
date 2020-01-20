//1. rectangle area

let a = 2.4
let b = 3.3
let square = a * b
square = +square.toFixed(1)

console.log(square, typeof square)

//2. Polina`s age

let name = 'Polina'
let thisYear = 2020
let age = 25
let yearOfBirth = thisYear - age

console.log(`My name is ${name}. I was born in ${yearOfBirth} and I'm ${age} years old.`)

//3. Circle square

let radius = "5.67cm"
radius = parseFloat(radius)
let circleSquare = 2 * Math.PI * radius
circleSquare = Math.floor(circleSquare)

console.log(`Circle square is ${circleSquare}`, typeof circleSquare)