let inputString = process.argv[2];
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let index = 0; index <= inputString.length; index++) {
  let character = inputString[index];
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (character == vowels[vowelIndex]) {
      vowelCount++;
      break;
    }
  }
}

console.log(vowelCount);