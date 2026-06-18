// Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let cont = 15;
let total;

while (cont <= 200){

    total = cont * cont;
    console.log( `${cont} ao quadrado é: ${total}`);
    cont = cont + 1;

}
