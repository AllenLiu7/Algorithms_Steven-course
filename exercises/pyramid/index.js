// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  // set up midpoint
  const midpoint = Math.floor((n * 2 - 1) / 2);

  //base case
  if (n === row) {
    return;
  }

  //log row recursively
  if (n * 2 - 1 === level.length) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  //log column
  if (midpoint - row <= level.length && level.length <= midpoint + row) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
//     //define a midpoint
//     const midpoint = Math.floor((n * 2 - 1) / 2);
//     //create ampty string for each row
//     let level = "";
//     //create n rows
//     for (let row = 0; row < n; row++) {
//       //create ampty string for each row
//       let level = "";
//       //creart n*2-1 columns
//       for (let column = 0; column < n * 2 - 1; column++) {
//         //select which column to print # or "  "
//         //within the range minpoint + row or midpoint - row, print #.
//         if (midpoint - row <= column && column <= midpoint + row) {
//           level += "#";
//         } else {
//           level += " ";
//         }
//       }

//       console.log(level);
//     }
//   }
