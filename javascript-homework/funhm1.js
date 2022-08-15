//Write a function that takes in an age (number). Check if the age is greater than or equal to 65 or not. If it is  equal to or greater 
//than 65 return the string “Special discount” otherwise return “Not Allowed”.
/*
 function age(num) {
    let res = num
   if (num >= 65) {
     return ('special discount')
     } else {
       // return ('not allowed')
     }
 }
*/

//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100. The function should 
//return a new array with the result. The original array should not be mutated.
/*
console.log(age(9))  // age

const n = [1 , 2 , 3]
const mapped = n.map(function(el) {
    return el * 100
 })
console.log(mapped) // multiply by 100 
*/

//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100 if the array provided to
// the function has a length greater than 5. The function should return a new array with the result. The original array should not be mutated.
/*
const n = [1, 2, 3, 4, 5,6]
const mapped = n.map(function(el) {
    if (n.length > 5) { 
        return el * 100 } 
        else {
            return el
        }
    })
console.log(mapped) // multiply if greater then 5
*/

//Write a function that takes in an array of numbers and uses the forEach() or map() to multiply every number by 100 only if the number is 
//even - if the number is odd then it will return the original number . The function should return a new array with the result. The original 
//array should not be mutated.
/*
const n = [1,2,3,4,5]
const res = n % 2
const mapped = n.map(function(el) {
 if (res === 0) {
        return el *100 
    } else {
        return el
    }
}) 
console.log(mapped) // even odd
*/

//Write a function that takes in this array as input [154, 657, 564, 561, 154, 678, 100, 154] and returns the number of times 154 occurred 
//or existed in that array.
/*
let arr= [154, 657, 564, 561, 154, 678, 100, 154,154]
let n= arr.length
let x= 154
function count(arr, n, x)
{
    let res= 0;
    for (let i=0; i<n; i++)
    {
        if (x==arr[i])
        res++;
    }
    return res
}
console.log(count(arr,n,x))
*/

//Write a function that takes in an argument function checkType(input) - if the input is an array or javascript object then it returns the 
//string “object” - otherwise it will return the string “It’s something else”.
/*
let myVar= 78
function checkType(myVar) {
    let res = myVar
    if (typeof res == 'string') {
        return ('object')
    } else {
        return ('Something else')
    }
}
console.log(checkType(myVar))
*/
