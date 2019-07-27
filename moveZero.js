
/* Given an integer array nums, write a function to rearrange the array by moving all 
zeros to the end while keeping the order of non-zero elements unchanged.
Perform this operation in-place without creating a copy of the array. 
*/

function moveZeroes (nums) {
    let nextNonZeroPosition = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[nextNonZeroPosition], nums[i]] = [nums[i], nums[nextNonZeroPosition]];
            nextNonZeroPosition ++;
        }
    }

}