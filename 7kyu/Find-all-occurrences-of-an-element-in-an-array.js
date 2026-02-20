/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/
function findAll(array, n) {
  // your code here
  
  /*
  P: array
  R: new arr containing index of positions of n
  E: 
  [6, 9, 3, 4, 3, 82, 11], 3), [2, 4]
  [10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16), [1, 9]
  P: go through array and when index equals parameter add the position of index not value to new array
  */
  
  let newArr = []
  
  for(let index = 0; index < array.length; index++)
  {
    if(array[index] === n)
    {
      newArr.push(index)
    }
  }
  return newArr
}