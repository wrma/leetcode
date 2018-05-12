/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums)
        return 0;
    for (let i = 0,j = 0;i<nums.length;i++){
        if (i !== j){
            if (nums[i] === nums[j]){
                nums.splice(i,1);
                i--;
            }
            else
                j = i;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([]));
