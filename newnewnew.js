/**************************************HW 14 definition task3 */ 

// TODO write function getPersonsCity(persons, city) , taking array of the persons and a city (see the branch js-objects ) and returning array of the persons living in the given city. For example, find persons living in Rehovot 
//  const persos = [ 

  

// ] 

// const persons = [
//     createPerson(123, "111", createAddress("Rehovot", "Brener")),
      
// createPerson(123, "Vasya", createAddress("Rehovot","Parshani")), 

// createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")), 

// createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")), 

// createPerson(126, "Sara", createAddress('Lod', 'Sokolov')) 
// ]


//  getPersonsCity(persons, ‘Rehovot’) => [ 

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
// // task 4
// function movePersonsNoCityAtBeginning(persons, city) {
//         const personsRes = getPersonsCity(persons, city);
//         personsRes.unshift(...persons.filter(p => p.address.city !== city));
//         return personsRes;
// }
// console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot'));

// let array = [10,11,15,20, 50]

// console.log(array)

// array = array.push[80]

// console.log(array)

const myAwesomeArray = ["a", "b", "c", "d", "e"]

console.log(myAwesomeArray.some(test => test === "d"))
//-------> Output : true

const MyAwesomeArray = [1, 2, 3, 4, 5]
console.log(
    MyAwesomeArray.reduce((total, value) => total - value))
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120


console.log(MyAwesomeArray.map(y => y * y))

const persons = [ createPerson(123, "Vasya", createAddress("Rehovot","Parshani")) ]
            
console.log(persons);