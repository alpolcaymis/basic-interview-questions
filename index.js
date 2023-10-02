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

/* 
Recursion Tips
1. Figure out the bare mininum pieces of information to represent your problem.
2. Give reasonable defaults to the bare minimum pieces of information.
3. Check the base case. Is there any work left to do? If not, return.
4. Do some work. Call you function again, making sure the arguments have changed in some fashion.
*/

function pyramid(n, row = 0, level = "") {
  // non straight forward solution
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
/* 
my own solution
let num = n - 1;
  for (let row = 1; row <= n; row++) {
    let level = "";
    level += " ".repeat(num) + "#".repeat(row * 2 - 1) + " ".repeat(num);
    console.log(level);
    num -= 1;
  }
*/
/* 
const midpoint = Math.floor((2 * n - 1) / 2);

for (let row = 0; row < n; row++) {
  let level = "";

  for (let column = 0; column < 2 * n - 1; column++) {
    if (midpoint - row <= column && midpoint + row >= column) {
      level += "#";
    } else {
      level += " ";
    }
  }
  console.log(level);
} */
