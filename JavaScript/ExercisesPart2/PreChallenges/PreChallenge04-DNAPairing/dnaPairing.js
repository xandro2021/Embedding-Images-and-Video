function pairElement(str) {
  let answerArray = [];

  for (let letter of str) {
    switch (letter) {
      case "G":
        answerArray.push(["G", "C"]);
        break;
      case "C":
        answerArray.push(["C", "G"]);
        break;
      case "A":
        answerArray.push(["A", "T"]);
        break;
      case "T":
        answerArray.push(["T", "A"]);
        break;
    }
  }

  return answerArray;
}

console.log( pairElement("TTGAG") );
