// Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
// qualquer, ou seja, de b^2 onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().


// com **

// let expo = 2;
// let base = 3;
// let result;

// for (let cont = 1; cont <= expo; cont++){
//     result = base**expo;
// }

// console.log(result);

// sem ** e com acumulador (acum = 1 porque o elemento  neutro da multiplicação é o 1)

let expo = 2;
let base = 3;
let acum = 1;

for (let cont = 1; cont <= expo; cont++){

    acum = acum * base;
}

console.log(acum);