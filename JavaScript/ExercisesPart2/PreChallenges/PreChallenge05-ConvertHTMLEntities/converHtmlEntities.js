function convertHTML(str) {
  let arrStr = str.split("");

  for( let i = 0; i < arrStr.length; i++ ){
    switch( arrStr[i] ){
      case "&":
        arrStr[i] = "&amp;";
        break;
      case "<":
        arrStr[i] = "&lt;";
        break;
      case ">":
        arrStr[i] = "&gt;";
        break;
      case "\"":
        arrStr[i] = "&quot;";
        break;
      case "\'":
        arrStr[i] = "&apos;";
        break;
    }
  }
  return arrStr.join("");
}

console.log( convertHTML("Hamburgers < Pizza < Tacos") );
