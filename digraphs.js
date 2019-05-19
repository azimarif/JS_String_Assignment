let inputString = process.argv[2];
let digraphString = "";
let delimiter = "";
for (let index = 0; index < inputString.length - 1; index++) {
  if (inputString[index] == inputString[index + 1]) {
    digraphString = digraphString + delimiter + inputString[index] + inputString[index];
    delimiter = ",";
  }
}
console.log(digraphString);