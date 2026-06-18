// Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
// + 97 + 98 + 99 + 100)

let cont = 1;
let acum = 0;     // acumulador começa valendo 0 pra contas de + e - (por que ele vai mudando depois) || contas de * começaria com 1 (por qur precisa de
                  // elemento neutro)

while (cont <= 100){

    acum = acum + cont; // ele mesmo mais a variavel com o número
    cont = cont + 1;

}

console.log(`A soma dos 100 primeiros números é: ${acum}`);