/*
Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]
*/
function multiples(m, n){
  // code here
  /*
  Parameters: Two numbers 
  Return: array of mulitples of n
  Example: (3,5) -> 5,10,15
  Pseudocode: create for loop to make array and add n(m increase loop 1 -> 3)
  */
  let newArr = []
  for(let i = 1; i <= m; i++)
  {
    let currNum = n*i
    
    newArr.push(currNum)
  }
  
  return newArr
}