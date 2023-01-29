function sumPrimes(num) {
  let totalSum = 0;

  for(let i = 2; i <= num; i++) {
    let prime = isPrime( i, num );
    if(prime) totalSum += i;
  }
  return totalSum;
}

function isPrime( i, num ){
  for( let j = 2; j <= num; j++ ) {
    if(i !== j && i % j === 0) {
      return false;
    }
  }
  return true;
}

console.log( sumPrimes(10) );
