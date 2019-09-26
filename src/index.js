module.exports = function multiply(first, second) {
  // your solution
  let sum = [];
  first = first.split('');
  second = second.split('');

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (sum[i + j]) {
        sum[i + j] += first[i] * second[j];
      } else {
        sum[i + j] = first[i] * second[j];
      }    
    }  
  }
  
  for (let i = sum.length - 1; i >= 0; i--) {
    if (sum[i] >= 10) {
      if (i === 0) {
        sum.unshift = sum[i];
      } else {
        sum[i - 1] += Math.trunc(sum[i] / 10);
        sum[i] = sum[i] % 10;
      }      
    }    
  }

  return sum.join('');
}