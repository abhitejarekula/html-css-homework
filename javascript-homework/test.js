/* Write an ARROW function called "multiple" that uses default parameters. It should take 
in 2 numbers (a and b) as parameters and return the product.

multiple = (a,b) => a * b
console.log(multiple(0,0))

*/

/*

const greeting = (name = "Default Name") => `Hi, my name is ${name}`
console.log(greeting('Jenny'))

*/


const multiply = (...arr) => {
        
        return arr.reduce((accum, curr) => (accum + curr), 0)
    }
     console.log(sum(1, 2, 3, 4, 5, 6, 7))