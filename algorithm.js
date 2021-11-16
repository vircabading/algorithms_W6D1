import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

/* 
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3];
// const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
// function sumArr(nums, i=0) {
//     // // edge case

//     // // base case
//     if (i === nums.length){
//         return 0
//     }

//     // // recursive statement
//     return sumArr(nums, i+1) + nums[i]
// }

// console.log(sumArr(nums1));

// ************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  // edge case
  // base case -> when we get to number 1
  // recusion call -> function(number -1 ) + number

  num = Math.trunc(num);
  // var sum = 0;

  // for (var x=num; x>= 1; x--){
  //   sum = sum + x;
  // }
  // return sum;
  if (num == 1) {
    return 1;
  }
  else if (num < 1 ) {
    return num + recursiveSigma(num+1);
  } 
  else {
    return num + recursiveSigma(num-1);
  }
}

console.log(recursiveSigma(-2));