/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var length = nums.length;
    var i,j,sum;
    var arr = [];
    //遍历数组nums
    for(i = 0;i<length;i++){        
        for(j = i+1;j<length;j++){
            sum = nums[i]+nums[j]; 
            if(sum === target){
                arr.push(i);
                arr.push(j);
                return arr;
            }            
        }
    } 
};