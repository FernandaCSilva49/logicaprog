// Calcule a soma de todos os elementos de um array de números utilizando um loop e uma variável acumuladora.

let numeros = [1, 2, 3, 4, 5];
let soma = 0;

// for (let num of numeros) {
//     soma = soma + num;
// }

// console.log("Total:", soma);

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]  // posso usar o i de index

}

console.log(`Total: ${soma}`);