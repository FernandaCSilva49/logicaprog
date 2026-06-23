// Crie uma matriz 2x2, acesse seus elementos individualmente e percorra todos com loops aninhados.

let matriz = [
    [1, 2],
    [3, 4]
];

for (let linhas = 0; linhas < matriz.length; linhas++) {    // percorrendo com .lentgh
    for (let col = 0; col < matriz[linhas].length; col++) {
        console.log(`[${linhas}][${col}] = ${matriz[linhas][col]}`);
    };
};