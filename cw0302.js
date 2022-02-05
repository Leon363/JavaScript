class Person {
     #id; //privat - нет возможности добраться через инкапсуляцию синтаксис начало с #
     #name;
     constructor(id, name) {
         this.#id = id;
         this.#name = name;


     }
     getId() {
         return this.#id;

     }
     getName() {
         return this.#name;
     }
     toString() {
         return `id: ${this.#id}; ${this.#name}`
     }

}

const person = new Person(123, "Moshe");
console.log(`person is ${person}`);

class Employee extends Person {  //расширяет (extends) class Person
    #salary;
    constructor(id, name, salary) {
        super(id, name); //вызов конструктора класса Person
        this.salary = salary;
    }
    computeSalary() {
        return this.#salary
    }
    // toString() {
    //     return super.toString() + ` the salary: ${this.salary}`
    // }
} 

const person2 = new Employee(124, "Sara", 5000);
console.log(`person2 is ${person2}`);
console.log(typeof(person2));
console.log(person2.constructor.name) //только так можно получить доступ к конструктору
class Child extends Person {
    #KinderGarden
    constructor(id, name, kindergarden) {
        super(id, name, kindergarden)
        this.kindergarden = kindergarden
    }
    getKindergarden() {
        return this.#KinderGarden
    }
    toString() {
        return `${super.toString()} kindergarden: ${this.kindergarden}`
    }


}

const person3 = new Child(125, "Uri", "Shalom");
console.log(` person 3 is ${person3}`)

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
    toString() {
        return ` id: ${super.getId()}; name: ${this.getName()}; salary: ${this.computeSalary()}`
    }

}

const person4 = new WageEmployee(126, "Asaf", 1000, 10, 100);
console.log(`person 4 - ${person4}`)

//========= HW - 17 def

const person = [
    new Child(100, "Olya", "Shalom"),
    new Child(101, "Sergey", "Boker"),
    new Child(102, "Kolya", "Shalom"),
    new Employee(103, "Vasya", 1000),
    new WageEmployee(104, "Tolya", 1000, 10, 100)

]

//
function countOfPersonType(persons, type) {
    // return количество персонов данного типа из массива пример:
    //countOfPersonType(persons, "WageEmployee") -----> 1

}

function computeSalaryBudget(persons) {
    //return общую сумму всех рабочих из массива пример:
    //computeSalaryBudget(persons) -------> 3000
}

function countChildrenKinderGarden(person, kindergarden) {
    // return количество детей ходящих в этот садикю пример:
    // countChildrenKinderGarden(persons, "Shalom") --> 2 
}