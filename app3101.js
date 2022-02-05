const circle = {radius: 20, square: function() {
    return 3.14 * (this.radius ** 2)
}, perimeter: () => 2 * 3.14 * this.radius,
toString: function(){
    return `radious of this cercle is ${this.radius}`
}};
// console.log(`squere = ${circle.square()}, perimetr = ${circle.perimeter()}`);


// function squere(circle) {
//     return 3.14 * (circle.radius ** 2);
// }


// const Deferred = {resolve: "hello",  then: function(res){

//     return 

// }





// const circle = {radius: 20, square: function() {
//     return 3.14 * (this.radius ** 2)
// }, perimeter: () => 2 * 3.14 * this.radius;
// toString: function(){
//     return `radious of this cercle is ${this.radius}`
// }
// console.log(`squere = ${circle.square()}, perimetr = ${circle.perimeter()}`);


// console.log(`circle - ${circle}`)

// будет  всегда circle - [object Object] так как это вызываются toString 


// добавляем метод toString 
// конструктор в JS - определяется по первой букве и дает право формировать this - есть  свойство когода можно опреде
// prototipe - ссылка на объект внутри конструктора которая формирует this. 


// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.square = function() {
//     return 3.14 * (this.radius ** 2)
// }

// Circle.prototype.perimeter = function() {
//     return 2 * 3.14 * this.radius
// }

// Circle.prototype.toString = function() {
//     return `radius of this circle is ${this.radius}`
// }
// const circle10 = new Circle(10);

// методы не участвуют в создании объекта, 

//построить конструктор по output

//------------------ HW 16

// const d = new Deferred()

// d.then(function(res){ console.log('1 ', res); return 'a';});
// d.then(function(res){ console.log('2 ', res); return 'b';});
// d.then(function(res){ console.log('3 ', res); return 'c';});
// d.resolve('hello');


const Deferred = {resolve: "1 hello", then: function(res){
    res = a;
    return console.log(`1 ${this.resolve}`, res)
}, 
toString: function(res){
    d.resolve(Hello)
    d.then(function(res){console.log('2 ', res); return 'b'})
    d.resolve('hello');
}
}

console.log(Deferred)

function resolve(){
    console.log("1 hello");
    res = a;
    return res;
}



// // output

// 1 hello
// 2 a
// 3 b

// const d = new Deferred()

// function Deferred() {
    
// } Deferred


// function resolve(Hello) {
//     return console.log("1 hello");
    
   
// }

// resolve()

// d.resolve(Hello) 
//     return `"a"`;

// d.then

//

// const myArray = new myArray(10);
// myArray.get(1000) - result 10
//написатьметод гет, принимающий значение индекса и возвращающий значение 10
// myArray.set(index, value); 
//написать метод сет, который дает значение 
//myArray.setValue(value) - sets новое значение во всех элементах of myArray
//привмер:
// const myArray = new myArray(10);
// console.log(myArray.get(100))  //вывод на экран - 10
// myArray.set(100, 500) // sets 500 at index 100
// console.log(myArray,get(200)) // вывод на экран  10
// console.log(myArray,get(200)) //  вывод на экран  500
// myArray.setValue(300);
// console.log(myArray.get(100))  // вывод  на экран 300
// console.log(myArray.get(200))  // вывод  на экран 300
//--------------------------------------------------------------------------------


//стандартные конструкторы

// Array.prototype.filter = function(callbackPredicate) {
//     const res = []
//     this.forEach((n, i, a) => !callbackPredicate(n, i, a) && res.push(n));  // можно поиграть с ! перед callback
//     return res;
// }

// const ar = [1, 2, 4, 5, 100];

// ar.filter(n => n%2 === 0).forEach(n => console.log(n)); 