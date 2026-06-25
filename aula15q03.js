/*

Escreva uma função chamada verificarMaioridade em
Ela deve receber um parâmetro chamado idade e retornar uma string dizendo
"Maior de idade" se a idade for 18 ou mais, ou "Menor de idade" caso contrário. CerIfique-se de definir o
Ipo do retorno da função.

*/

function verificarMaioridade(idade){
    if (idade >= 18){
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    };
};

verificarMaioridade(29);