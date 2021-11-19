function recursiveSearch(arr, target) {
  // type your code here
  if (arr[0]===target) {
    return true;
  }
  return arr.length>0 ? recursiveSearch(arr.slice(1),target) : false;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
