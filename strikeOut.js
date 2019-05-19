let inputString = process.argv[2];
let characterToStrike = process.argv[3];
let strikedString = "";

for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] != characterToStrike) {
    strikedString = strikedString + inputString[index];
  } else {
    strikedString = strikedString + "-";
  }
}
console.log(strikedString);