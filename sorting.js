//Bubble Sort

// var bubbleSort = (array) => {
//     for (var i=0; i<array.length; i++) {
//         for (var n=0; n<array.length-i; n++) {
//             if (array[n]>array[n+1]) {
//                 var temp = array[n+1];
//                 array[n+1] = array[n];
//                 array[n] = temp;
//             }

//         }
//     }
//     return array;
// }

// var array = [1,4,9,8,7];
// console.log(bubbleSort(array));

//Merge sort

var splitArray = (array) => {
    var left = array.slice(0, Math.floor(array.length/2));
    var right = array.slice(Math.floor(array.length/2), array.length);
    if (left.length > 2) {
        splitArray(left);
    } else if (left.length = 2) {
        if (left[0] > left[1]){
            var temp = left[0];
            left[0] = left[1];
            left[1] = temp;
            console.log(left, right);
        }
    }
    if (right.length > 2) {
        splitArray(right);
    } else if (right.length = 2) {
        if (right[0] > right[1]){
            var temp = right[0];
            right[0] = right[1];
            right[1] = temp;
            console.log(left, right);
        }
    }  

}

var mergeSort = (array) => {
    splitArray(array);
}

var array = [27,10,12,25,34,16,15,31];
mergeSort(array);