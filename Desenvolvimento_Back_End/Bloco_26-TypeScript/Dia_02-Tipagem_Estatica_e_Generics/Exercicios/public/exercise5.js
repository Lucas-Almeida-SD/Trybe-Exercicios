"use strict";
function myFilter(array, callback) {
    const myNewArray = [];
    for (let index = 0; index < array.length; index += 1) {
        if (callback(array[index], index, array)) {
            myNewArray.push(array[index]);
        }
    }
    return myNewArray;
}
;
