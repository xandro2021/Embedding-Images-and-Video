function birthdayCakeCandles(candles) {
    // Write your code here
  let max = candles[0];
  let counter = 1;

  for( let i = 1; i < candles.length; i++ ) {
    if( candles[i] > max ){
      max = candles[i];
      counter = 1;
    }
    else if( candles[i] === max ) {
      counter++;
    }
  }

  return counter;
}

console.log( birthdayCakeCandles( [6, 4, 4, 3] ) );
