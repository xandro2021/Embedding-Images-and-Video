function bonAppetit(bill, k, b) {
    // Write your code here

  let itemSumatory = 0;
  for( let item of bill ){
    itemSumatory += item;
  }

  let total = ( itemSumatory - bill[k] ) / 2;

  let result = (total === b) ? "Bon Appetit" : ( b - total );
  console.log ( result );
}

let bill = [ 3, 10, 2, 9 ]
let k = 1;
let b = 7;
bonAppetit( bill, k, b )
