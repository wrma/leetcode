/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //[0...zero]为0，[zero+1...i]为1，[two...nums.length]为2
    let zero = -1;
    let two = nums.length;
    for (let i = 0;i<two;i++){
        if (nums[i] === 0){
            zero++;
            [nums[zero],nums[i]] = [nums[i],nums[zero]];
        }
        if (nums[i] === 2){
            two--;
            [nums[two],nums[i]] = [nums[i],nums[two]];
            i--;
        }
    }
    return
};
console.log(sortColors([2,0,2,1,1,0]));
