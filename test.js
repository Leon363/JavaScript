
let ar = [ 10, 12, 15, 18, 111, 121]

 ar.forEach((n, i, a) => console.log(`${ '#' + n}`));


function maper(n, i, a){
    return `${i+1} of ${a.length} is ${"#" + n }  //n`
}

function mapper2(n, i, a) {
    return n +1;
}

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function myMap(array, callback) {
    const res = [];
    function forEachCall(n, i, a) {
        res.push(callback(n, i, a));
    }
    myForEach(array, forEachCall);
    return res;
}

// myForEach(ar, n => console.log(n));


// let ar = [ 10, 12, 15, 18]

const ar4 = myMap(ar, maper);

console.log(ar4);

ar.map((n, i, a) => console.log(n * 2))

function MyMap(array, callback) {
    const new_ar = [];
    function mapCall(n, i, a) {
        new_ar.push(callback(n, i, a));
    }
    mapper2(array, mapCall);
    return new_ar;
}

const ar5 = MyMap(ar);

console.log(MyMap);


// console.log(ar5);


// let array = [ 10, 12, 15, 18]

// //array.forEach(n => console.log(n + 2));

// function myForEach(array, callback) {
//     for(let i = 0; i < array.length; i++){
//         callback(array[i], i, array);

//     }
    
// }

// //myForEach(array, n => console.log(n));

// let array_1 = [11, 13, 18];



//array_1.myForEach(array);
//-----------------------------/

// / // let arr = [17, 542, -42, 68, 44, 45.5, 92, 22];
// // // arr.forEach((a, i, m) => console.log(${'#' + a}));
// // // function myForEach(arr, callback ) {
// // //     for(let ind = 0; ind < arr.length; ind++){
// // //         callback(arr[ind], ind, );
// // //     }
// // // }
// // // function callback(el){
// // //     console.log(el * 2);
// // // }
// // // myForEach(arr, callback);

// // // function myMap(arr,callback) {
// // //     for(let ind = 0; ind < arr.length; ind++){
// // //         callback(arr[ind] ** 3)
// // //     }
// // // }
// // // myMap(arr, callback)
// // function mapper (n, i, a){
// //     return <li>${i + 1} of ${a.length} - ${n}</li>;
// // }
// //     function someFunction(){
// //         const ar = [10, 12, 45, -14, 47, 54, 55, 63];
// //         const ar3 = myMap(mapper);
// //     }
// // function myForEach(array, callback) {
// //     for (let i = 0; i < array.length; i++) {
// //         callback(arr[i], i, array);
// //     }
// // }
// // function myMap(array, callback) {
// //     const res = [];
// //     function forEachCall(n, i, a){
// //         res.push(callback(n, i, a));
// //     }
// //     myForEach(array, forEachCall);
// //     return res;
// // }
// // const ar10 = [10, 12, 45, -14, 47, 54, 55, 63];

// // const ar2 = myForEach(ar, n => n * 2);
// // myForEach(ar, n => console.log(n));
// // const ar4 = myMap(ar, mapper2);
// // console.log(ar4);
// // // console.log(ar2);
// // // someFunction();
// // /******************************HW - 14**************************/
// // const ar20 = [13,17,20,23,2,40];
// // const arEven = ar20.filter((n, i, a) => a.length % 2 == 0 ? 
// //     n / 2 == 0 : n % 2 == 1);
// // console.log(arEvenOdd);
// // /************************HW 14 definition task1 **************/
// // //TODO write myFilter(array, callback) based on myForEach
// // //callback-function with free possible parameters: current element, current index, refered array
// // /************************HW 14 definition task2***************/
// // //TODO write myReduce(array, callback, initialResult) based on myForEach
// //     const res = ar20.reduce((res, cur) => {return res + cur}, 0);
// // console.log(res);
// // const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
// // console.log(max);
// // //reduce with no second argument
// // res = ar20.reduce(( res, cur) => res + cur);

// /*******************************JS Objects**********************/
// const person1 = {id: 123, name: "Moshe", address: {city: "Lod", street: "Sokolov"}};
// const person2 = {id: 123, name: "Moshe", address: {city: "Lod", street: "Sokolov"}};
// const person3 = person1;
// console.log(person1 == person2 is ${person1 == person2});
// console.log(person1 == person3 is ${person1 == person3});
// console.log("123" == 123 is ${'123' == 123});
// console.log("123" == 123 is ${'123' === 123});
// console.log(JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)})
// console.log(JSON.stringify(person1));
// console.log(person1.toString()); 
// console.log(name of person1 is ${person1.name});
// console.log(person1 lives in ${person1.address.city});
// Object.keys(person1).forEach(k => console.log(k));//array of the object keys
// Object.values(person1).forEach(v => console.log(v));//array of the object values
// Object.entries(person1).forEach(e => console.log(e));//array of the object entries
// console.log(Object.entries(person1));
// function createAddress(city, street){
//     //return {city: city, street: street} <=> {city, street}
//     return {city, street};
// }
// function createPerson(id, name, address) {
//     return{id, name, address};
// }
// const persons = [
//     createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
//     createPerson(124, "Olya", createAddress("Rehovot", "Plaut")),
//     createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
// ]
// /**************HW 14 definition task3 */
// //TODO apply method of arrays you should find the person living in Rehovot and display them out
// /**************HW 14 definition task4 */
// //TODO move the person that don't live in Rehovot at beginning of the array persons