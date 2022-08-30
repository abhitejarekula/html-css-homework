/*
const copyObject = (obj1) => ({...obj1,id:1})
console.log(copyObject({name:'Anna'}))
*/


/*
const arr = [1,2,3,4]
var destructArray = (arr) => {
    var [i1,i2,i3,i4] = arr
    return [i1,i2]
}
console.log(destructArray(arr))
*/


const user = {
    name: "Jake",
    address: {
     mailing: "123 Main St",
     shipping: {
     cart: true
      }
     }
    }
    const string = "address.shipping.cart"
    const checker =({address:{shipping :{cart}}}) => {
        console.log(cart)
    }
    checker(user)