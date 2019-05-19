let inputString = process.argv[2];
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
let consonantCount = 0;

for (let index = 0; index <= inputString.length; index++) {
  let character = inputString[index];
  for (let vowelIndex = 0; vowelIndex < consonants.length; vowelIndex++) {
    if (character == consonants[vowelIndex]) {
      consonantCount++;
      break;
    }
  }
}
console.log(consonantCount);