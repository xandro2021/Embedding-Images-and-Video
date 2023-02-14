function destroyer(arr) {
  let myArguments = Object.values(arguments);
  let arrToCover = myArguments[0];

  for (let i = 1; i < myArguments.length; i++) {
    arrToCover = arrToCover.filter( element => element !== myArguments[i] );
  }

  return (arrToCover);
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );
