function mapper2(n){
    return n + 1;
}


function myForEach(array, callback){
    for(let i=0; i < array.length; i++){
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

//


// const ar = [1, 2, 3];
// console.log(ar);
// const ar2 = myMap(ar, mapper2);

// myForEach(ar2, n => console.log(n));

///// CW 14//
const ar20 = [103, 17, 20, 23, 2, 10, 70];
//const arEven = ar20.filter(n => n % 2 == 0); // вернуть только четные числа
const arEven = ar20.filter((n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n %2 == 1); //вернуть если нечетная длина массива нечетные значения в противном случае вернуть четные
console.log(arEven);
// HW 14 #1//
//написать myFilter(array, callback) на основе myForEach
//callback с 3я пораметрами element, index, massiv 

// _i - обозначает параметр
// принимает результат, элемент, мвссив, текущий индекс
const res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
//функциональный блок без return возвращает undefined
const max = ar20.reduce((max, cur) => cur > max ? cur : max , ar20[0]);
//всегда должна что то вернуть иначе undefined
console.log(max);
//написать myReduse(array, callback, initialResult) на основе myForEach
//callback с 3я пораметрами element, index, massiv 

//если в редьюс не передается второй аргумент, то в качестве вторго аргумента используется первый элемент массива и обход идет с первого элемента
//