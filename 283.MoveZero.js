/*
* @Author: wrma
* @Date:   2018-05-03 09:28:11
* @Last Modified by:   wrma
* @Last Modified time: 2018-05-03 09:47:16
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 时间复杂度 O(n)
// 空间复杂度 O(n)
// var moveZeroes = function(nums) {
//     let length = nums.length;
//     let res = [];
//     for(let i = 0 ; i<length ; i++){
//     	if (nums[i])
//     		res.push(nums[i]);
//     }
//     for(let i = 0 ; i<length ; i++){
//         if (!nums[i])
//             res.push(0);
//     }
//     return res;
// };

// 时间复杂度 O(n)
// 空间复杂度 O(1)
var moveZeroes = function(nums) {
    let i,j;
    for (i = 0,j=0;i<nums.length;i++){
        if (nums[i])
            if(i !== j){
                [nums[i],nums[j]] = [nums[j],nums[i]];
                j++;
            }
            else
                j++;
    }
};