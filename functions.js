/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
console.log("Hello " + name) 
}
//console.log (greet ("ahmad"))
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
 if (n%2 === 0)return false;
return true;
}
console.log(isOdd(6))
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
 let numodd = 0;
 for(let i = 1; i < n ; i++){
   if (isOdd(i))numodd+=1
 }
 return numodd
 
}
console.log(oddsSmallerThan(9))

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
if(n === 0)return false;
if(isOdd(n)){
  return n*n
}
return n * 2
}
console.log(squareOrDouble(9))
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
