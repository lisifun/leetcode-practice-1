/*
Given an array of positive integers nums, return an array answer that consists of the digits
of each integer in nums after separating them in the same order they appear in nums.
To separate the digits of an integer is to get all the digits it has in the same order.

Example 1:
Input: nums = [13,25,83,77]
Output: [1,3,2,5,8,3,7,7]
Explanation: 
- The separation of 13 is [1,3].
- The separation of 25 is [2,5].
- The separation of 83 is [8,3].
- The separation of 77 is [7,7].
*/

var separateDigits = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let numStr = nums[i].toString();
    if (numStr.length > 1) {
      for (let j = 0; j < numStr.length; j++) {
        result.push(parseInt(numStr[j]));
      }
    } else {
      result.push(nums[i]);
    }
  }
  return result;
};

const nums = [13, 25, 83, 77];
console.log(separateDigits(nums)); // => [1,3,2,5,8,3,7,7]
