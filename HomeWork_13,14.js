//                       HW 13                // 

const arr = [1, 3, 2, 5, 13, -21, 80, 60, 39, 0, -13];

arr.forEach((n, i, a) => console.log(`${'# ' + n}`));

function MyForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
    
}

MyForEach(arr, n => console.log(n + ' #'));



const arr2 = arr.reverse();
console.log(arr2);

arr2.map((n, i, a) => console.log(n * 2));

function MyMap(array, callback) { 
    const result = [];
    function forEachCALL(n, i, a) {
        result.push(callback(n, i, a))
    }
    MyForEach(array, forEachCALL);
    return result;
    
}

function multiply (n) {
    return n * 2 ;
 }

const arr3 = MyMap(arr2, multiply);

console.log(arr3);

//----------------- HW 14 ------------//



function myFilter(array, callbackPredicate) {
    const res = [];
    
    MyForEach(array, (n, i, a) => callbackPredicate(n, i, a) && res.push(n) );
    return res;
}



// const ar20 = [13, 17, 0, -20, 23, 21, 40,-50,70, -100, 0];
const minusOrZero = myFilter(arr,(n, _i, a) => arr < 0 ? n : n <= 0);
const arEvenOdd = myFilter(arr,(n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
console.log(minusOrZero);
console.log(arEvenOdd);
function myReduce(array, callbackReduce, initial) {
    
    if (initial === undefined) {
            initial = array[0];
            array = array.slice(1);
    }
    let res = initial;
  
    MyForEach(array,(n, i, a) => res = callbackReduce(res, n, i, a));
    return res;
}
let res = myReduce(arr2, (res, cur) => res + cur/2, 0);
console.log(res)

res = myReduce(arr2,(res, cur) => res + cur);
max = myReduce(arr,(max, cur)=>cur > max ? cur : max);
min = myReduce(arr, (min, cur) => cur < min ? cur : min)
console.log(res);
console.log(max);
console.log(min);

function createAddress(city, street) {
    //{city: city, street: street} <=> {city, street}
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address};
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]

function InTheCity(persons, city) {
    return persons.filter(man => man.address.city === city);
}
console.log(InTheCity(persons, 'Tel-Aviv'));

console.log('-------------------');

function getPersonsCity(persons, city) {
        return persons.filter(p => p.address.city === city);
}
console.log(getPersonsCity(persons, 'Lod'));

console.log('-------------------')

function movePersonsNoCityAtBeginning(persons, city) {
    const personsRes = getPersonsCity(persons, city);
    personsRes.unshift(...persons.filter(man => man.address.city !== city));
    return personsRes;
}

console.log(movePersonsNoCityAtBeginning(persons, 'Rehovot'));



