function plusMinus(arr) {
    // Write your code here
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zerosCounter = 0;
  for( let element of arr ) {
    if( element > 0 ) {
      positiveCounter++;
    }
    else if ( element == 0 ) {
      zerosCounter++;
    }
    else {
      negativeCounter++;
    }
  }

  let ratioPositive = ( positiveCounter / arr.length ).toFixed( 6 );
  let ratioNegative = ( negativeCounter / arr.length ).toFixed( 6 );
  let ratioZeros = ( zerosCounter / arr.length ).toFixed( 6 );
  console.log( ratioPositive );
  console.log( ratioNegative );
  console.log( ratioZeros );
}

let miArr = [ -4, 3, -9, 0, 4, 1 ];
plusMinus( miArr );
