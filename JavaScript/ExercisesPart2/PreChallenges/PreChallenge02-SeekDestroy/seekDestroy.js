function destroyer(arr) {
  let myArguments = Object.values(arguments);
  let arrToCover = myArguments[0];
  let repeat = true;

  for (let i = 1; i < myArguments.length; i++) {
    do {
      let indexElement = arrToCover.findIndex(element => element === myArguments[i]);
      if (indexElement === -1) {
        repeat = false;
      }
      else {
        repeat = true;
        arrToCover.splice(indexElement, 1);
      }
    } while (repeat);
  }

  return (arrToCover);
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );
