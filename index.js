function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;
  if (length % 2 == 0) {
    let centerValue = length / 2;
    let firstHalf = word.slice(0, centerValue);
    let secondHalf = word.slice(centerValue);
    let flippedSecondHalf = [];
    for (let letter of secondHalf) {
      flippedSecondHalf.unshift(letter);
    }
    let finalHalf = "";
    for (let letter of flippedSecondHalf) {
      finalHalf = finalHalf + letter;
    }
    if (firstHalf === finalHalf) {
      return true;
    } else {
      return false;
    }
  } else if (length % 2 != 0) {
    let centerValue = (length - 1) / 2;
    let firstHalf = word.slice(0, centerValue);
    let secondHalf = word.slice(centerValue + 1);
    let flippedSecondHalf = [];
    for (let letter of secondHalf) {
      flippedSecondHalf.unshift(letter);
    }
    let finalHalf = "";
    for (let letter of flippedSecondHalf) {
      finalHalf = finalHalf + letter;
    }
    if (firstHalf === finalHalf) {
      return true;
    } else {
      return false;
    }
  }
}


/* 
  Add your pseudocode here
  get word and decide if even or odd
  if even split into two
  if half of length value is same as back half true

  if odd get let variable = (total length minus 1) / 2
  blolb
  compare word.slice(0 - variable) and variable + 2 : end
*/

/*
find out if word is even numbered or odd numbered to determine split math
slice first half and second half
rearrange second half backwards
compare
if equal, true
if not equal, false
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
