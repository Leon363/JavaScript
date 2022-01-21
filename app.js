/*****Arrays ***/

const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){ // сортировка
//     return a - b
// });
ar.sort((a,b) => a - b); // вариант записи  ----  => {return a - b}
//console.log(`ar is ${ar.toString()}`);

//HW № 12
//написать функию сортировки массива 
//четные в порядке возрастания
// нечетные в порядке убывания
const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27]
// expected[-10, 4, 28, 40, 27, 25, 17, 15, 13]
//task: write a comparator (a comparator returns < 0 if first less then second, > 0
//if first greater then second, ==0 if first equals second)
//********************** */
//adding element/s end of an array
ar[ar.length] = 200;
//console.log(ar);
// метод PUSH
ar.push(300, 25);
console.log(ar);
const ar1 = [-8, 30, -57];
//ar.push(ar1); будет добавлен массив, но не разделенные числа
//если охото добавить отдельные номера, следует применить оператор распределения
ar.push(...ar1);
console.log(ar);

//for adding elements at beginning of an array there is method "unshift"
//everything has been said about "push" will work for "unshift" only unlike "push" unshift method
//adds elements at beginning

const ar2 = [27, 35];
ar.unshift(...ar2);
//console.log(ar);
//unshift в начало массива добавление чисел

ar.splice(2,0,1,2); //(2, 0, 1, 2) (2- вставляем по индексу, 0 - сколько удаляем, 1,2 что добавляем)
//console.log(ar);

//removing (deleting)

let el = ar.pop(); // удаление последнего эдемента и его добавлене в элемент

el = ar.shift(); // удаление первого элеменка массива и добавление в элемент
//console.log(el, ar);

ar.splice(3, 5) // удаление 5 элементов начиная с индекса 3
//console.log(ar);
// includes, indexOf
//2-x мерный массив
const matrix1 = [[1,2,3], [4,5,6], [7, 8, 9], [10, 11, 12]];
// const matrix2 = [[100,20], [50, -5], [34,28]];
function displayMatrix(matrix){
    for (let i=0; i < matrix.length; i++){
        let row = ' ';
        for(let j = 0; j < matrix[i].length; j++){
            row = row + matrix[i][j] + '    '
        }
        console.log(row);
    }
}
displayMatrix(matrix1);
// displayMatrix(matrix2)
//HW 12

//написать ф-ю принимающую матрицу и возвращающую транспонированную матрицу
// в котором строки будут столбцами а столбцы строками
function displayMatrixTransponation(matrix){
    for (let i=0; i < matrix.length; i++){
        let row = ' ';
        for(let j = 0; j < matrix[i].length; j++){
            row = row + matrix[j][i] + '    '
        }
        console.log(row);
    }
}

displayMatrixTransponation(matrix1);

// function displayMatrixTransonation(matrix){
//     for (let i=0; i=matrix.length; i++)

// }

