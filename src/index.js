module.exports = function getZerosCount(number, base) {
  var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 149, 181, 193, 197, 199, 211, 229, 239];
  var arr = [], count = [], iter = [];
  var j = 0, max;
  
  iter[0] = 1;
  if (!primeNumbers.includes(base)) {
    factorization(base);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] == arr[i-1]) iter[j] = iter[j] + 1; 
      if (arr[i] !== arr[i-1]) { 
        j++;
        iter[j] = 1;
      } 
    }
    arr = arr.filter( (a,pos) => arr.indexOf(a) == pos);
  } else arr[0] = base;
  
    
    
  for (let i = 0; i < arr.length; i++){
    j = arr[i];
    count[i] = 0;
    max = maxDegree(number, arr[i]);
    for (var ind = 0 ; ind < max; ind++){
      count[i] = count[i] + div(number, j);
      j = j*arr[i];
    }
    count[i] = count[i]/iter[i];
  }       

count.sort( (a,b) => a - b);  

return Math.floor(count[0]);
  
  
function factorization(a) {
  var k = true, j = 0;
  var rest = a;

  while (k) {         
    for (let i = 0; i < primeNumbers.length; i++) {   
      if (rest % primeNumbers[i] == 0) {
        rest = rest/primeNumbers[i];
        arr[j] = primeNumbers[i]; 
        j++;
      }
      if (primeNumbers.includes(rest)) {
        k = false; 
        arr[j] = rest;
      }
    }
  }
  arr.sort( (a,b) => a - b);  
}
    
  function div(a, b) {
    return ( a - a % b)/b
  }
    
  function maxDegree(a, b) {
    var count = 0, i = 1;
    while (i <= a) {
      i = i*b ;
      count++;
    }
    return count;
  }  

}
       