const ar = [-10, 50, -12, 80, 40];
ar.push(70);

//варианты решения без последнего соломита (#)

//let str = '';
// function qqq(ar){
//     for(let i = 0; i < ar.length; i ++) {
//         console.log("#" + ar[i])
//     }
//     console.log("#");

// }

// qqq(ar);

//  ar.forEach(function(n) {
//      str +=  n +'#' ;
//  })

// console.log(str);


// ar.forEach(function(element, index){
//     if (index != ar.length - 1){
//         str += element + "#";
//     } else str += element;
// })

// console.log(str);

//str = str.substring(0, str.length -1);



// const lastSharpIndex = str.lastIndexOf('#');

// const str1 = str.substring(0, lastSharpIndex);
// console.log(str1)
// const str2 = str.substring(lastSharpIndex + 1);

// str = str1 + str2;

// const ar1 = ar.slice(1);
// let str = '' + ar[0];
// ar1.forEach(n => str += '#' + n);

// console.log(str); 

// ar.forEach((n,i,a) => console.log(`${i + 1 } of ${a.length} - ${n}`))
// метод "map"
// проводит операции с элементами массива и выдает новый, преобразованный массив
const ar2 = ar.map(n => n +=2 ); // где n - элемент массива
console.log(ar2);
//const ar3 = ar.map(n => `<li>${n}</li>`);

const ar3 = ar.map((n, i, a) => `${i + 1} of ${ar.length} is ${n}`);
console.log(ar3);