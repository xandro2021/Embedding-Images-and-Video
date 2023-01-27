function catAndMouse(x, y, z) {
  let dA = Math.abs( x - z );
  let dB = Math.abs( y - z );
  if( dA > dB ) {
    return "Cat B";
  }
  else if ( dB > dA ) {
    return "Cat A";
  }
  else {
    return "Mouse C";
  }
}

console.log( catAndMouse( 1, 3, 2 ) );
