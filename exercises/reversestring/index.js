// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//--------------------------------------------------------------------

// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// const reverse = (str) => {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// };

// function reverse(str) {
//   let reversed = "";

//   for (charactor of str) {
//     reversed = charactor + reversed;
//   }

//   return reversed;
// }

// function reversed(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

const reversed = str => {
  return str.split("").reduce((rev, char) => char + rev, "");
};

module.exports = reversed;
