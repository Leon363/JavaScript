/// Objects 

// const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// const person2= {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// console.log(`person1 == person2 is ${person1 == person2}`)
// console.log(`person1 === person2 is ${person1 === person2}`)
// //в сравнении участвуют адереса и результат сравнения - false


// console.log(`123 == "123" is ${123 == "123"}`) // сравниваются примитивные, типы переводятся в числа результат true
// console.log(`123 === "123" is ${123 === "123"}`) // сравниваются примитивные данные переводятся в числа результат false

// const person3 = person1;
// console.log(`person3 == person1 is ${person3 == person1}`) 
// //  так же сравниваются ссылки указывающий на один и тот же объект результат правда

// //для сравнения объектов они переводятся в строку и они(строки) сравниваются
// console.log(`JSON.stringify(person1) == JSON.stringify(person2) is ${JSON.stringify(person1) == JSON.stringify(person2)}`)
// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)}`)
// //рекомендуется использовать === т.к. это строгое сравнение

// console.log(JSON.stringify(person1));
// //вывод всей инвормации об объекте в формате строки

// console.log(person1.toString());
// //только ссылка на объект

// console.log(`name of person1 is ${person1.name}`)
// //ссылка на данные объекта по ключу


// console.log(`person lives in city ${person1.address.city}`)
// //получение данных через двойную точку

// Object.keys(person1).forEach(k => console.log(k));
// //получение массива ключей(имена свойств) у персона
// Object.values(person1).forEach(v => console.log(v));
// //получение значенией
// Object.entries(person1).forEach(e => console.log(e)) // массив массивов
// //Object.entries(person1).forEach(e => console.log(e));
// // Object.values(person1 ).forEach(v => console.log(v));
//метод принимающий данные и возвращает объект factory methods

function createAdress(city, street) {
    // {city:city, street:street} == {city, street}
    return {city:city, street:street}
}
function createPerson(id, name, address){
    return {id, name, address};

}

const persons = [
    createPerson(123, "Vasya", createAdress("Rehovot", "Parshani")),
    createPerson(124, "Olua", createAdress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolua", createAdress("Tel-Aviv", "Dizengoff")),
    
]

console.log(persons)

//найти всех проживающих в реховоте HW 14 task # 3

// HW 14 task # 4 тот кто живет в tel-aviv перенести на первое место

//Object.entries(persons).forEach(e => console.log(e));
// console.log(${JSON.stringify(Object.entries(persons.createPerson.createAdress.city)) == JSON.stringify(persons.city)})
//console.log(JSON.stringify(persons))

//console.log(JSON.stringify(persons.address))

function f(persons){
    if(createAdress.city == "Rehovot"){
        console.log(persons.id);
    }
}

//console.log(JSON.stringify(persons[2].address.city) )


// if(console.log(JSON.stringify(persons[2].address.city)) == "Tel-Aviv"){
//     return console.log("YRA");
// }

// function f(persons) {
//     for(i = 0; i < persons.length; i++){
         
//             if(console.log(JSON.stringify(persons[i].address.city  == 'Rehovot' == true))){
//                 return console.log("YRA");
//             }
//             else return console.log("no")
        


//     }
// }



// f(persons);

// console.log(persons[0][0])


// function enaverCityBegining(persons, city) {
//     const resultPersons = get(persons, city);
//     resultPersons.unshift(...persons.filter(p => p.address.city !== city));
//     return resultPersons;
    
// }

// console.log(enaverCityBegining(persons, 'Rehovot'));    

const funk = 