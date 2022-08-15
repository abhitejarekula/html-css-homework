/*
function offerdays(dates) {
    switch (dates) {
        case 1 :
            console.log("Too early")
            break
         case 15 :
            console.log("Here is your discount")
            break
         case 30 :
            console.log("Too late")
            break
        default :
        console.log ("Not a valid date")
        break
    }
}
offerdays(7)
*/

/*
function whileloop(num1,num2) {
    let i= num1+1
    while(i< num2) {
        console.log(i)
        i++
    }
}
whileloop(8,18)
*/

const myObject = { name: "Jack", email: "jack@gmail.com", age: 30 } 
function loopthrough(obj) {
    for (const property in obj) {
        console.log(`${property}`)
        //console.log(`${obj[property]}`)
    }
}
loopthrough(myObject)