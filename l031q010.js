// Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
// valor + (valor x (taxa : 100) x tempo em dias).


let valor;
let taxa;
let tempo;

console.log("Informe o valor da prestação:");
valor = 1500;

console.log("Informe o valo da taxa:");
taxa = 200;

console.log("Informe, em dias, o tempo de atraso:");
tempo = 5;



console.log(valor + (valor * (taxa / 100) * tempo));