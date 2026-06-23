// vetor com nome de alunos

// let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
// console.log(alunos); // exibe os dados do vetor todo
// console.log(alunos[3]); // exibe o aluno daquele indice, no caso "Diana"
// alunos[3] = "Ana Júlia" // substituindo o aluno do indice 3
// console.log(alunos[3]); // mostrando que mudou na indice
// console.log(alunos); // mostrando que mudou no vetor


// exibindo os vetores com for || aparece um embaixo do outro

let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
let numeros = [6, 23, -7, 18, 4, 92, 15, 33, 0, 50];
// let notas = [8.3, 3, 8, 10, 8];

// // for (let cont = 0; cont < 4; cont ++){
// //     // console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`)  // cont + 1 para começar a exibição pelo número 1 e não pelo 0 || pode ser só o cont
// //     // console.log("Testando com o contador");
// //     // console.log(alunos[cont]);
// //     console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}, sua nota é ${notas[cont]}`)

// // };

// alunos[4] = "Ana Júlia"

// for (let cont = 0; cont < alunos.length; cont++){
//     console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}, sua nota é ${notas[cont]}`);
// };

// EXEMPLO DE FOR OF > declara uma variavel que recebe um item de um vetor

// for (let aluno of alunos){
//     console.log(aluno)
// }

// EXEMPLO DE FOR EACH

// alunos.forEach(function(aluno, indice) {
// console.log(`${indice} / ${aluno}`);
// });

// métodos push, unshift, pop, shift

// push adiciona no final do vetor

// alunos.push("Raimundo");
// console.log(alunos);

// // pop remove no final do vetor

// alunos.pop();
// console.log(alunos);

// // unshift adiciona no inicio, substitui o 0 e todos os outros pulam 1 de indice

// alunos.unshift("Raimundo");
// console.log(alunos);

// // shift remove no inicio

// alunos.shift();
// console.log(alunos);

console.log(numeros);

// ordem crescente

numeros.sort((a, b) => a - b);      // tem que especificar que quer na ordem crescente
console.log(numeros);

// ordem decrescente

numeros.sort((a, b) => b - a);
console.log(numeros);

// matriz com 2 linhas e 2 colunas

let matriz = [
    [1, 2],
    [3, 4]
];

// matriz com 5 linhas e 4 colunas

let letras = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"],
    ["q", "r", "s", "t"]
]

console.log(matriz);
console.log(letras);

// for dentro do for pra exibir toda a matriz

for (let linha = 0; linha < 5; linha++){
    for (let col = 0; col < 4; col++){
        console.log(letras[linha][col]);
    };
};