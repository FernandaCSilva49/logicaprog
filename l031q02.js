// 2) Elaborar um programa que pergunte o nome do usuário e quatro valores inteiros e apresente 2 resultados:
// a) Resultado de suas adições
// b) Resultado de suas multiplicações
// Exixibir ao inicio uma saudação ao usuário

let nome;
let num1;
let num2;
let num3;
let num4;
let soma;
let multi;

console.log("Informe o seu nome");
nome = "Rafael";

console.log("Informe um valor inteiro");
num1 = 5;
console.log("Informe um valor inteiro");
num2 = 3;
console.log("Informe um valor inteiro");
num3 = 7;
console.log("Informe um valor inteiro");
num4 = 6;

soma = num1 + num2 + num3 + num4;
console.log("A soma dos quatro valores exibidos é de: " + soma + ".");
console.log(`SOMA: ${num1} + ${num2} + ${num3} + ${num4} = ${soma}`);

multi = num1 * num2 * num3 * num4;
console.log(`A multiplicação dos quatro valores exibidos é: ${multi}`);
console.log(`MULTIPLACÂO: ${num1} x ${num2} x ${num3} x ${num4} = ${multi}`);

// comentário inserido dia 17/06/2026