// Crie um array com exatamente 5 números inteiros e exiba todos os elementos no console. Tente as três formas de iteração.

let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {  // posso usar o i de index
console.log(`EX 1: ${numeros[i]}`);
};

for (let num of numeros) {
console.log(`EX 2: ${num}`);
};

numeros.forEach((num, i) => {
console.log(`EX 3: ${i}, ${num}`);
});

