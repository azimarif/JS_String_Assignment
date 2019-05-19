let inputString = process.argv[2];
let stripString = "";
for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] != " ") {
    stripString += inputString[index];
  }
}
console.log(stripString);
