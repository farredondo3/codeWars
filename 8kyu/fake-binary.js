/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
  
  
  return x.split('').map((y) => {
    
    if(y < 5){return y = 0}
    else if(y >= 5){return y = 1}
  }).join('')
}