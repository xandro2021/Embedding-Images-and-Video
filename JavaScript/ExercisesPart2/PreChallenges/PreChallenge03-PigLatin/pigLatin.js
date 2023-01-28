function translatePigLatin(str) {
  let newStr = "";
  let consontantCluster = "";
  let startWithVowel = false;
  let foundVowel = false;

  for (let i = 0; i < str.length; i++) {
    foundVowel = findVowel(str[i]);
    if (foundVowel && i === 0) {
      startWithVowel = true;
      break;
    }
    else if( foundVowel ) {
      break;
    }
    consontantCluster += str[i];
  }

  if (startWithVowel) {
    newStr = str + "way";
  }
  else {
    newStr = str.slice(consontantCluster.length) + consontantCluster + "ay";
  }
  return (newStr);
}

function findVowel(letter) {
  let arrVowels = ["a", "e", "i", "o", "u"];
  for (let vowel of arrVowels) {
    if (letter.toLowerCase() === vowel) {
      return true;
    }
  }
  return false;
}



console.log( translatePigLatin("schwartz") );
