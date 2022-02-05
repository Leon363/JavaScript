// let arr = [1, 10, 12, 100, -10, 50, 13];

// let qwer = [15, 22, 0, 14];

// arr.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));
// arr.forEach((n,i,a) => console.log(`${i + 1} of ${a.length} - ${n - 700}`));


// function print (n, i, a) {
//   return `<li>${i + 1} of ${a.length} - ${n * 2}</li>`    
// }
// function mapper2(n) {
//    return n + 10;
// }


// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//           callback(array[i], i, array);
//   }
// }
// function myMap(array, callback) {
//   const res = [];
//   function forEachCall(n, i, a) {
//           res.push(callback(n, i, a));
//   }
//   myForEach(array, forEachCall);
//   return res;
// }

//  myForEach(arr, n => console.log(n*2));
// const ar4 = myMap(arr, mapper2)
// const ar5 = myMap(arr, print)

// console.log(ar4); 
// console.log(ar5); 

//  const ar20 = [13, 17, 20, 23, 2, 10, 4, 15 ];
// const arEvenOdd = qwer.filter((n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);

// let e = ar20.reduce((res, cur) => {return res + cur},0);
// console.log(e);


// function myFilter(array, callback) {
//   for(let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }

// }

// myFilter(arr, n => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);

// function multiply (n) {
//       return n * 3 ;
//    }

// myFilter(ar20, multiply);
// function MyForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//       callback(array[i], i, array);
//   }
  
// }

// const person1 = { id: 123, name: 'Moshe', address: { city: 'Lod', street: 'Sokolov' } };
// const person2 = { id: 123, name: 'Moshe', address: { city: 'Lod', street: 'Sokolov' } };
// const person3 = person1;
// console.log(person2.name + " has id - " + person2.id + " lives in " + person2.address.city + ", " + person2.address.street + " street")
// console.log(`"123" == 123 is ${"123" == 123}`);
// console.log(`"123" === 123 is ${"123" === 123}`);
// console.log(`person1 === person3 is ${person1 === person3}`)
// console.log(`person1 === person2 is ${person1 === person2}`)
// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) ===
//         JSON.stringify(person2)}`);
// console.log(JSON.stringify(person1));
// console.log(person1.toString());
// console.log(`name of person1 is ${person1.name}`)
// console.log(`person1 lives in city ${person1.address.city}`);
// Object.keys(person1).forEach(k => console.log(k)) //array of the object keys
// Object.values(person1).forEach(v => console.log(v)); //array of the object values
// Object.entries(person1).forEach(e => console.log(e)); //array of arrays - [key, value]
// console.log(Object.entries(person1));
// function createAddress(city, street) {
        //{city: city, street: street} <=> {city, street}
//         return {city, street}
// }
// function createPerson(id, name, address) {
//         return {id, name, address};
// }
// const persons = [
//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov')),
   
// ]

// Object.entries(persons).forEach(k => console.log(k));
// console.log(persons.entries)
/**************************************HW 14 definition task3 */ 

// function getPersonsCity(persons, city) {
   

// }

//TODO write function getPersonsCity(persons, city) , taking array of the persons and a city (see the branch js-objects ) and returning array of the persons living in the given city. For example, find persons living in Rehovot 

// Input: const persons = [ 

//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")), 

//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")), 

//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")), 

//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov')) 

// ] 

// Output: getPersonsCity(persons, ‘Rehovot’) => [ 

//         {id: 123, name: "Vasya", address:{city: "Rehovot",street: "Parshani")), 

//         {id: 124, name: "Olya", address:{city: "Rehovot",street: "Pr. Plaut")) 

// ] 

 
 

/****************************************HW 14 definition task4 */ 

//TODO write function movePersonsNoCityAtBeginning(persons, city) taking array of the persons and a city (see the branch js-objects ) and returning new array with all persons not living in the given city moved at beginning; 

// 
/************************************************ */

/*************************************************HW 14 solutions */
//task 3
// function getPersonsCity(persons, city) {
//         return persons.filter(p => p.address.city === city);
// }
// console.log(getPersonsCity(persons, 'Rehovot'));
//task 4
// function movePersonsNoCityAtBeginning(persons, city) {
//         const personsRes = getPersonsCity(persons, city);
//         personsRes.unshift(...persons.filter(p => p.address.city !== city));
//         return personsRes;
// }
// console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot'));