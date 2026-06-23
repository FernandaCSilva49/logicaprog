// Dado um array desordenado, exiba-o antes e depois da ordenação, tanto crescente quanto decrescente.

let numeros = [42, 7, 19, 3, 55, 28];
console.log("Original:", numeros);

// ordem crescente

numeros.sort((a, b) => a - b);      
console.log(numeros);

// ordem decrescente

numeros.sort((a, b) => b - a);
console.log(numeros);
