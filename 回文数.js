/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x+'';
    reversedNum = x.split('').reverse().join('');
    if (reversedNum === x){
        return true
    }
    return false
};
console.log(isPalindrome(121));
