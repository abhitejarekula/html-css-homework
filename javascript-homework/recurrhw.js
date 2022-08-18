// Tribonacci
/*
function trib(n) {
    if (n == 0 || n == 1)
        return 0
    if (n == 2)
        return 1
    else
        return trib(n - 1) + trib(n - 2) + trib(n - 3)
}
console.log(trib(10))
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