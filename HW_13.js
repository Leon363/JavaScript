let array = [15, 25, 50, 13, -2, 17, 121];


console.log('for Each');

array.forEach((n, i, a) => console.log(`${ '#' + n}`));



console.log('My for Each');

function myForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index]);        
    }
}

function callback(element) {
    console.log(element / -1) ; 
}

myForEach(array,callback);


const arr = [];
arr.concat = array.reverse();
console.log(arr);

console.log('my Map:');

function myMap(arr, callback){
    for (let index = 0; index < array.length; index++) {
        callback(array[index] * 2);
        
    }
}


myMap(arr, callback);



// function myForEachEch(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         function call(element) {
//             console.log(element * 2);
//         }      
//     }
// }

// function callback(element) {
//     console.log(element / -1) ; 
// }

// myForEach(array,callback);
