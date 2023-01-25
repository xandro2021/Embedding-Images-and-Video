function breakingRecords(scores) {
    // Write your code here
  let minimun, maximun, min, max;
  minimun = maximun = scores[0];
  min = max = 0;

  for( let score of scores ) {
    if( minimun > score ) {
      minimun = score;
      min++;
    }
    else if ( maximun < score ){
      maximun = score;
      max++;
    }
  }


  return [ max, min ];
}

let arrayTest = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];
console.log( breakingRecords( arrayTest ) );
