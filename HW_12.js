const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27]
// arHW.sort((a,b) => a - b); // вариант записи  ----  => {return a - b}
// console.log(`arHW is ${arHW.toString()}`);

arHW.sort(function(a, b){
    if (a % 2 != 0 && b % 2 !=0){
         return b - a;
    }else if(a % 2 == 0 && b % 2 == 0){
        return a - b;
    }else if(a % 2 !=0 && b % 2 == 0){
        return 1;
    }else{
        return -1;
    }
    
});

console.log(" ");
    
console.log(`arHW is ${arHW.toString()}`)

const matrix1 = [[1,2,3], [4,5,6], [7, 8, 9]];
console.log(" ");

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
console.log(" ");