function sumAll(arr) {
  let max = arr[0],
      min = arr[1],
      result = 0;

  if( arr[1] > arr[0] ) {
    max = arr[1];
    min = arr[0];
  }

  for(let i = min; i <= max; i++ ) {
    result += i;
  }

  return result;
}

console.log( sumAll([4, 1]) );
