let inputString = process.argv[2];
let intersperse = "";
for (let index = 0; index < inputString.length - 1; index++) {
  intersperse = intersperse + inputString[index] + ",";
}
intersperse = intersperse + inputString[inputString.length - 1];
console.log(intersperse);