/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums)
        return 0;
    for (let i =0,j = 0;i<nums.length;i++){
        if ( i !== j){
            if (nums[i] === nums[j]) {
                if (i-j >= 2){
                    nums.splice(i,1);
                    i--;
                }
            }
            else
                j = i;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([1,1,1,2,2,3]));
