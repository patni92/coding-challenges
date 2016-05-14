// Return an array consisting of the largest number from each provided sub-array.

var newArray = [];
function largestNum(arr) {
    var i, bigestNum, x;

    for (i = 0; i < arr.length; i += 1) {
        bigestNum = arr[i][0];

        for (x = 0; x < arr[i].length; x += 1) {
            if (arr[i][x] > bigestNum) {
                bigestNum = arr[i][x];
            }

        }
        newArray.push(bigestNum);


    }
    return newArray;
}

console.log(largestNum([[4, 5, 1, 3, 9657, 94, -4], [18, 26], [32, 35, 37, 39], [10001, 857, 1], [90, 674, 134, 665, 9000, 100, 1, 400]]));
