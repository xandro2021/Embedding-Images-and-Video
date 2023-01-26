function hurdleRace(k, height) {
  // Write your code here
  let maxValue = height.reduce((max, currentValue) => (currentValue > max) ? currentValue: max);
  return ( maxValue - k > 0 ) ? ( maxValue - k ) : 0;
}

console.log( hurdleRace( 7, [2, 5, 4, 5, 2] ) );
