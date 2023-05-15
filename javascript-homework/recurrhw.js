// Tribonacci
/*
function trib(n) {
    if (n === 0 ) return 0;
    if (n ===1 || n===2) return 1
    return trib(n - 1) + trib(n - 2) + trib(n - 3)
}
console.log(trib(10))
*/

/*
function trib(n) {
    const seq = [0,1,1,]
    for (let i= 3; i<=n;i++) {
        seq[i]= seq[i-1]+seq[i-2]+seq[i-3]
    }
    return seq[n]
}
console.log(trib(6))
*/

// Stairs
/*
function stairs(n)
{
if (n <= 1) {
    return n
}
else {
    return stairs(n - 1) + stairs(n - 2)
}
}
console.log(stairs(15))
 */


// Adding Numbers
/*
let n = 1421
    function getSum(n) {
        let sum = 0
        while (n > 0 || sum > 9) {
             if(n == 0) {
                n = sum
                sum = 0
             }
             sum = sum + n % 10
             n = Math.floor(n / 10)
        }
        return sum
    }
   console.log(getSum(n))
   */

   function getSum(num) {
    if (num ===0) return 0
    if (num.toString().length ===1) return num

    const arr = num.toString().split("")
    let sum = 0
    arr.forEach( digit => {
        sum = sum + parseInt(digit)
    })
    if (sum.toString().length === 1) {
        return sum
    } else {
       return getSum(num)
    }
   }
   console.log(getSum(38))