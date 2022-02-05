// const circle = {radius: 20, square: function() {
//         return 3.14 * (this.radius ** 2)
// }, perimeter: () => 2 * 3.14 * this.radius,
// toString: function(){
//         return `radious of this circle is ${this.radius}`
// }};
// console.log(`square=${circle.square()}, perimeter=${circle.perimeter()}`); 
//circle.square will be converted to square(circle) where circle as argument value,
// "this" is the hidden parameter in the function 
// in any arrow function there is no "this"
// function square(circle) {
//         return 3.14 * (circle.radius ** 2);
// }
// console.log(`circle: ${circle}`)
// const circle1 = {radius: 20,  perimeter: function() {
//                 return 2 * 3.14 * this.radius}
//         ,
//         toString: function(){
//                 return `radious of this circle is ${this.radius}`
//         }};
//         //circle1.square(); error because the method square is not defined inside object circle1
//         function Circle(radius) {
//                 this.radius = radius;
//         }
//         Circle.prototype.square = function() {
//                 return 3.14 * (this.radius ** 2);  
//         }
//         Circle.prototype.perimeter = function() {
//                 return 2 * 3.14 * this.radius
//         }
//         Circle.prototype.toString = function() {
//                 return `radius of this circle is ${this.radius}`
//         }
//         const circle10 = new Circle(10);
        /*******************************************************HW #16 definition task 1 */
//Write constructor Deferred
        //         const d = new Deferred()
// d.then(function(res){ console.log('1 ', res); return 'a'; });

// d.then(function(res){ console.log('2 ', res); return 'b'; });

// d.then(function(res){ console.log('3 ', res); return 'c'; });
// d.resolve('hello');
//Output: 
//1 hello
//2 a
//3 b
/********************************************************* */
/*******************************************HW #16 definition task2 */
//write constructor MyArray
//const myArray = new MyArray(10);
//myArray.get(index) - result 10
//write method get getting an index value and returning common value
// (set in constructor)
//myArray.set(index, value); 
//write method set that sets a given value at a given index
//myArray.setValue(value) - sets new value in all elements of myArray
//Example:
// const myArray = new MyArray(10);
// console.log(myArray.get(100)) // displayed out 10
// myArray.set(100, 500)//sets 500 at index 100
// console.log(myArray.get(200)) //displayed out 10
// console.log(myArray.get(100)) //displayed out 500
// myArray.setValue(300);
// console.log(myArray.get(100)) //displayed out 300
// console.log(myArray.get(200)) //displayed out 300

/***************************************************************************** */
// Array.prototype.filter = function(callbackPredicate) {
//         console.log('Tel-Ran copyright')
//         const res = []
//        this.forEach((n, i, a) => callbackPredicate(n, i, a) && res.push(n));
//        return res;
// }
// const ar = [1, 2, 4, 5, 100];
// ar.filter(n => n % 2 !== 0).forEach(n => console.log(n));

/*****************************************************HW #16 solution task 1*/
// function Deferred() {
//   this.functions = []
// };
// Deferred.prototype.then = function(thenFn) {
//   this.functions.push(thenFn);
// }
// Deferred.prototype.resolve = function(res) {
//   this.functions.forEach(fn => res = fn(res));

// }
//    const d = new Deferred()
// d.then(function(res){ console.log('1 ', res); return 'a'; });

// d.then(function(res){ console.log('2 ', res); return 'b'; });

// d.then(function(res){ console.log('3 ', res); return 'c'; });
// d.resolve('hello');
// /***********************************************************HW #16 solution task 2 */
// function MyArray(initialValue) {
//   this.value = initialValue; //common value
//   this.array = []; //values at the indexes
// }
// MyArray.prototype.setValue = function(value) {
//   this.value = value;
// this.array = [];
// }
// MyArray.prototype.set = function(index, value) {
//   this.array[index] = value;
// }
// MyArray.prototype.get = function(index) {
//   return this.array[index] ?? this.value; // if this.array[index] either undefined or null returns this.value
// }



// const myArray = new MyArray(10);
// console.log("should be 10",myArray.get(100)) // displayed out 10
// myArray.set(100, 500)//sets 500 at index 100
// console.log("should be 10",myArray.get(200)) //displayed out 10
// console.log("should be 500",myArray.get(100)) //displayed out 500
// myArray.setValue(300);
// console.log("should be 300",myArray.get(100)) //displayed out 300
// console.log("should be 300",myArray.get(200)) //displayed out 300
// myArray.set(20, 0);
// console.log("should be 0",myArray.get(20)) //displayed out 300
/******************************************************************* */
// how to get array's length
// const arr1 = [];
// arr1[100000000] = 10;
// arr1.length = 1;
// console.log(`length of arr1 is ${arr1.length}`);
// arr1.length = 0;
// console.log(arr1[1]);
// Array.prototype.toString = function() {
//   return "[object, Object]"
// }
// const arr3 = [];


class Person {
  #id;
  #name;
  constructor(id, name) {
          this.#id = id;
          this.#name = name
  }
  getId() {
          return this.#id;
  }
  getName() {
          return this.#name
  }
  toString() {
          return `id: ${this.#id}; name: ${this.#name};`
  }
}
const person = new Person(123, 'Moshe');
console.log(`person is ${person}`)
class Employee extends Person {
  #salary;
  constructor(id, name, salary) {
          super(id, name); //call the constructor of the class Person
          this.#salary = salary;
  }
  computeSalary() {
          return this.#salary
  }
  toString() {
          return super.toString() + ` salary: ${this.computeSalary()}`
  }
}
const person2 = new Employee(124, "Sara", 5000);
console.log(`person2 is ${person2}`)
console.log(typeof(person2)) // just object
console.log(person2.constructor.name) // only this way JS allow getting constructor name
class Child extends Person {
  #kindergarten
  constructor(id, name, kindergarten) {
       super(id, name);
       this.#kindergarten = kindergarten   
  }
  getKindergarten() {
          return this.#kindergarten;
  }
  toString() {
          return `${super.toString()} kindergarten: ${this.#kindergarten}`
  }
}
const person3 = new Child(125, 'Yakob', 'Shalom');
console.log(`person3 is ${person3}`)

class WageEmployee extends Employee {
  #hours
  #wage
  constructor(id, name, salary, hours, wage) {
          super(id, name, salary)
          this.#hours = hours;
          this.#wage = wage;
  }
  computeSalary() {
          return super.computeSalary() + this.#hours * this.#wage
  }
  

}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
console.log(`person4 is ${person4}`)
/**************************************************************HW #17 definition */
const persons = [
  new Child(100, 'Olya', 'Shalom'),
  new Child(101, 'Serega', "Boker"),
  new Child(102, 'Kolya', 'Shalom'),
  new Employee(103, 'Vasya', 1000),
  new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function countOfPersonType(persons, type) {
  //return count of persons of the given type
  //Example:
  //countOfPersonType(persons, 'WageEmployee') ---> 1
}
function computeSalaryBudget(persons) {
  //returns total salary of all employee objects in the given array
  //Example:
  //computeSalaryBudget(persons) ---> 3000
}
function countChildrenGindergarten(persons, kindergarten) {
  //returns number of children in the given kindergarten
  //Example:
  //countChildrenGindergarten(persons, 'Shalom') ---> 2
}
