/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var strx = x + '';
    var reverseStrx = strx.split('').reverse().join('');
    //8位有符号整数的范围为(最高位为符号位)
    //max: 0111 1111 转化为10进制为 2^0+2^1+...+2^6 = 2^7-1
    //min: 1000 0000 (按道理应该是1111 1111,减 1 后发现有更小的数，所以 1000 0000 才是最小数)
    //转化为10进制数为 0^0+0^1...+0^6+(-2)^7 = (-2)^7 此时最高位即是符号位也是数值位 
    var max = Math.pow(2,31)-1;
    var min = Math.pow(-2,31);
    if(x > 0){
        x = parseInt(reverseStrx);
        //表示 min < x < max 的区间
        if(x >= min && x <= max)
            return x; 
        else 
            return 0;
    }else{
        x = parseInt(reverseStrx);
        if(x >= min && x <= max)
            return 0-x; 
        else 
            return 0;
    }
};