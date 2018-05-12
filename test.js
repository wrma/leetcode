/*
* @Author: wrma
* @Date:   2018-03-07 16:54:52
* @Last Modified by:   wrma
* @Last Modified time: 2018-03-25 12:55:08
*/
//获取一个字符串中的所有数字，并取到他们的最大值
// var str = 'helloworld520hello1314';
// var reg = /(\d+)/g;
// function max(str){
// 	var length = str.length;
// 	if (typeof str === 'string' || length<=1024) {
// 		var result = str.match(reg);
// 		//sort方法默认按unicode位点进行排序
// 		//可传入一个回调进行自定义排序
// 		//若comparation(a,b)<0,则a排在b的前面
// 		return result.sort(function(a,b){
// 			return b-a
// 		})[0]
// 	}
// }
// console.log(max(str));



//魔法币问题
// var n = 1;
// var arr = [];
// function getCoin(n) {
// 	if (n === 1 || n === 2){
// 		arr.push(n);
// 		var result = arr.reverse().join('');
// 		return result;
// 	}
// 	//如果投入魔法机器一
// 	if (parseInt((n-1)/2) === (n-1)/2 && (n-1)/2 > 0){
// 		arr.push(1);
// 		return getCoin((n-1)/2);
// 	}
// 	//如果投入魔法机器二
// 	if (parseInt((n-2)/2) === (n-2)/2 && (n-2)/2 > 0){
// 		arr.push(2);
// 		return getCoin((n-2)/2);
// 	}
// }
//
// console.log(getCoin(n));


//相反数相加问题
// var n = 1325;
// function oppositeNum(n) {
// 	if (n>=1){
// 		n = n + '';
// 		var newNum = n.split('').reverse().join('');
// 		return parseInt(n)+parseInt(newNum);
// 	}
// 	else{
// 		return 0;
// 	}
// }
// console.log(oppositeNum(n));


//字符串碎片问题
// let s = 'aaabbaaac';
// function findRepeat(s){
// 	let length = s.length;
// 	let arr = [];
// 	let num = 0;
// 	let result = 0;
// 	for (let i=0; i<length ;i++){
// 		if (s.charAt(i) === s.charAt(i+1)){
// 			num++;
// 		}
// 		else{
// 			arr.push(num+1);
//             num = 0;
// 		}
// 	}
// 	for (let i = 0;i<arr.length;i++){
// 		result += arr[i];
// 	}
// 	return (result/arr.length).toFixed(2);
// }
// console.log(findRepeat(s));



//判断该字符串是否由他的一个子串进行多次首尾拼接构成
// var a = 'abcabcab';
// function find(a) {
//     let str='';
// 	if (a && typeof a === 'string'){
// 		for (let i = 1;i<a.length;i++){
// 			//如果发现首尾相连且该子串长度能被父串长度整除
// 			if(a.charAt(i) === a.charAt(0) && parseInt(a.length/i) === a.length/i){
// 				str = a.slice(0,i);
// 			}
// 		}
// 		if (str){
// 			return str;
// 		}
// 		else{
// 			return false;
// 		}
// 	}
// }
// console.log(find(a));


// ES6
// function unique1 (arr) {
//     const seen = new Map()
//     return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
// }
// // or
// function unique2 (arr) {
//     return Array.from(new Set(arr))
// }
// var arr = [1,1,2,3,4,4,{a:1,a:1,b:2},{a:1,a:1,b:2}];
// console.log(unique1(arr));
// console.log(unique2(arr));
