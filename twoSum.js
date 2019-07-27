/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return true.
*/

// bad solution O(n^2)
function twoSumA(nums, target){
    for(let i = 0;  i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return true;
        }
    } 
}
return false;
}
console.log(twoSumA([2,7,11,15,3,6,4], 9));


// better solution O(n)

function twoSum(nums, target){
    let left = 0, right = nums.length - 1;

    while (left < right){
        const currentSum = nums[left] + nums[right];
        if(currentSum === target){
            return true;
        } 
        else if(currentSum > target ){
            right --;
        } else {
            left ++;
        }

    }
    return false;
}

twoSum([2,4,6,7,12,15,23] , 30)