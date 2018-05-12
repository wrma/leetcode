/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var firstStr = strs[0];
    var flag = true;
    var result = '';
    if (strs.toString()){
        for (var i = 0 ; i<firstStr.length ; i++){
            for (var j = 1 ; j<strs.length ; j++){
                flag = true;
                if (firstStr.charAt(i) !== strs[j].charAt(i)){
                    flag = false;
                    break
                }
            }
            if (flag){
                result = firstStr.slice(0,i+1);
            }
            else break
        }
    }
    return result
};
console.log(longestCommonPrefix(["aaa","aaa","aa"]));
