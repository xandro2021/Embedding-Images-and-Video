// RESULTADO

function aVeryBigSum(ar) {
    // Write your code here
  let total = 0;
  for(let element of ar ){
    total += element;
  }

  return total;
}

// PRUEBA DE RESULTADO

let myArray = [ 1, 2, 2000, 323, 100000, 23400, 1000000 ];
let result = aVeryBigSum( myArray );

console.log( result );
