/* DESCRIPTION
Given a sorted array of integers nums, determine if there exists
a pair of numbers that sum to a given target.

Example:
Input: nums = [1,3,4,6,8,10,13], target = 13
Output: true (3 + 10 = 13)

Input: nums = [1,3,4,6,8,10,13], target = 6
Output: false
*/

function twoSum(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sumResult = nums[left] + nums[right];

        if (sumResult === target) {
            return true;
        } else if (sumResult > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

// Example usage
console.log(twoSum([1, 3, 4, 6, 8, 10, 13], 13)); // true
console.log(twoSum([1, 3, 4, 6, 8, 10, 13], 6));  // false