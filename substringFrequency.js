let inputString = process.argv[2];
let wordToSearch = process.argv[3];
let count = 0;

for (let index = 0; index < inputString.length; index++) {
  let matchedWord = "";
  for (let j = index; j < index + wordToSearch.length; j++) {
    matchedWord = matchedWord + inputString[j];
  }
  count+= (matchedWord == wordToSearch);
}
console.log(count);
