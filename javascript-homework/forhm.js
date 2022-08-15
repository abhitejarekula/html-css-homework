//Write a function called “loop1” that takes in 2 numbers and prints (console.log) 1-30 with a line break (console.log(======)). You must 
//use a for loop (for loops can be used for this, not just for iterating over arrays.
/*
function reverse(num1, num2) {
    for (let i = num2; i > num1-1; i--) {
        if (i<=10 && i>0) {
            console.log(i)
            console.log("======================")
        }
    }
}

reverse (1,100)
*/

//Same situation as #1, but your function will now print the numbers in reverse and only 10 to 1. (10, 9, 8, 7, 6…) . You will test every 
//function by passing in num1 = 1, num2 = 100
/*
function loop1(num1, num2) {
    for (let i= num1 ; i < num2; i++) {
        if (i > 0 && i <=30) {
            console.log(i)
            console.log("======================")
        }
    }
}
loop1(1,100)
*/

//Same as above, but your function will now print  (in console) numbers from 12 to 33 and also at the end print the sum of all these numbers.
// You will test every function by passing in num1 = 1, num2 = 100
/*
function inConsole(num1, num2) {
    var sum=0
    for (let i= num1 ; i < num2; i++) {
        if (i >= 12 && i <=33) {
            console.log(i)
            console.log("======================")
            sum= sum+i
        }
    }
console.log(sum)
}
inConsole(1,100)
*/

//Same as above, but your function will print (in console) 1-80 odd numbers with a line break. You will test every function by passing in 
//num1 = 1, num2 = 100
/*
function inConsole(num1, num2) {
    for (let i= num1 ; i < num2; i++) {
        if (i > 0 && i <=80) {
            if (i % 2 != 0) {
            console.log(i)
            console.log("======================")
            }
        } 
    }
}
inConsole(1,100)
*/

//Give an array, loop through 2 layers and print each element of up to the 2nd layer.
/*
arr = [ [ 1, 2, 3, [ 4, 5, 6 ] ] , [ [ 7, 8, 9 ] , [ 10, 11, 12 ] ] , [ 'a', 'b', 'c'  ]  ]
function loopThrough(arr) {
    arr.forEach(function(outerEl){
        outerEl.forEach(function(innerEl){
            console.log(innerEl)
            console.log("===========================")
        })
    }) 

    }
loopThrough(arr)
*/