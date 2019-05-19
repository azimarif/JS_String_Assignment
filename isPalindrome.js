let inputString = process.argv[2];
let index = 0;
for (index = 0; index <= inputString.length / 2; index++) {
  if (inputString[index] != inputString[inputString.length - 1 - index]) {
    break;
  }
}
if (index > inputString.length / 2) {
  console.log("Input String is a Palindrome");
} else {
  console.log("Input String is not a Palindrome");
}