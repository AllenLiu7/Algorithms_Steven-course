// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const result = [str[0].toUpperCase()];
  //console.log(result);
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

module.exports = capitalize;

// words = [];
// for (let word of str.split(" ")) {
//   words.push(word[0].toUpperCase() + word.slice(1));
// }

// return words.join(" ");
