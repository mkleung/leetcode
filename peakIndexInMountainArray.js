/**

https://leetcode.com/problems/peak-index-in-a-mountain-array/


 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var index = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[i] > A[i+1]) {
        	return i; 
        }
    }
    

};
console.log(peakIndexInMountainArray([0,1,0]));