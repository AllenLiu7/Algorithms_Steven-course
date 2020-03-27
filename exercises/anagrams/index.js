// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False 999
function anagrams(stringA, stringB) {
  const sortA = sorting(stringA);
  const sortB = sorting(stringB);

  return sortA === sortB;
}

function sorting(str) {
  return str
    .replace(/[^\w]\g/, "")
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const mapStringA = mapString(stringA);
//     const mapStringB = mapString(stringB);

//     if (Object.keys(mapStringA).length !== Object.keys(mapStringB).length) {
//       return false;
//     }

//     for (let char in mapStringA) {
//       if (mapStringA[char] !== mapStringB[char]) {
//         return false;
//       }
//     }

//     return true;
//   }

//   function mapString(str) {
//     const obj = {};
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       obj[char] = obj[char] + 1 || 1;
//     }
//     return obj;
//   }
