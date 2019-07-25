/*
Implement a function called countUniqueValues which accepts
a sorted array, and counts the unique values in the array.
There can be negative numbers in the array but it will
always be sorted

countUniqueValues([1,1,1,1,1,2]);  // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]);  // 0
countUniqueValues([-2,-1,-1,0,1]); // 4

*/

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var count = 1;
    var i = 0;
    var j = 1;

    while (j !== arr.length) {
        if (arr[i] !== arr[j]) {
            count++;
            i = j;
            j++;
        }
        else {
            j++;
        }
    }
    return count;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);