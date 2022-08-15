//Given an array month: [Jan, Feb, Mar] and a date array: [1, 2, …, 10 ]
//Write a function called “printCalendar” that loops through both arrays and print out a combination of month and date. Date only goes up to 1
/*
function printCalendar () {
    const mon =["Jan", "Feb", "Mar"]
    const date= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i = 0 ; i < 3; i++){
        for(j=1 ; j <=10; j++) {
            console.log(mon[i],j)
        }
    }
}
printCalendar()
*/

//Create a function called “cloneArray” that will take any array and return a copy of the array.
/*
var array_Clone = function(cloneArray) {
    return cloneArray.slice(0);
       }
   console.log(array_Clone([1, 2, 4, 0]))
   console.log(array_Clone([1, 2, [4, 0]]))

*/

//Write a function that takes in an array arr and a number n
//The function should be called getNthElement
//The function should check if the array has an element in the nth position or not
//If an element exist then it should return that element, otherwise it will return the string “element does not exist”
/*
function getNthElement (arr, n) {
    if (arr[n]){
        console.log(arr[n])
    } else {
        console.log("element does not exist")
    }
}
getNthElement([1,2,3,4,5],3)
*/

//Write your own custom array.push method called “customPush” 
//customPush will take in 2 parameter, an array and an item to push into the array
//customPush will return the length of the array after adding in the item
/*
function customPush(arr, item) {
    var n= arr.length
     arr[n]= item
    console.log(arr)
    console.log(arr.length)
}
customPush([1,2,3,4],5)
*/

//customPop will take in an array and remove the last element and return the removed element
/*
function customPop(arr) {
    arr.length = arr.length > 0 ? arr.length -1 :0
    console.log(arr)
}
customPop([1,2,3,4])
*/