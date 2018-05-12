/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = s.split('');
    var length = arr.length;
    var next,sum=0;
    var numArr=[];
    //循环得到罗马数字对应的阿拉伯数字
    for(let i = 0; i < length; i++){
        switch(arr[i]){
            case 'I': numArr.push(1);
                break;
            case 'V': numArr.push(5);
                break;
            case 'X': numArr.push(10);
                break;
            case 'L': numArr.push(50);
                break;
            case 'C': numArr.push(100);
                break;
            case 'D': numArr.push(500);
                break;
            case 'M': numArr.push(1000);
                break;
        }
    }
    //根据罗马转换规则，当左边数小于右边数时两数相减，反之相加
    for(let i = 0; i < length; i++){
        if(numArr[i] < numArr[i+1]){
            sum -= numArr[i];
        }else{
            sum += numArr[i];
        }
    }
    return sum;
};