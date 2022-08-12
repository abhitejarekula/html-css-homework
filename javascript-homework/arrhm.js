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

/*
var array_Clone = function(cloneArray) {
    return cloneArray.slice(0);
       }
   console.log(array_Clone([1, 2, 4, 0]))
   console.log(array_Clone([1, 2, [4, 0]]))

*/

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

/*
function customPush(arr, item) {
    var n= arr.length
     arr[n]= item
    console.log(arr)
    console.log(arr.length)
}
customPush([1,2,3,4],5)
*/

function customPop(arr) {
    arr.length = arr.length > 0 ? arr.length -1 :0
    console.log(arr)
}
customPop([1,2,3,4])