// Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
// ou se o número não corresponde a nenhum dos 12 meses.

let mes;

console.log("Digite um número de 1 a 12")
mes = 19;

switch (mes) {
    case 1:
        console.log(`Seu número (${mes}) corresponde ao mês de Janeiro`);
        break;
    case 2:
        console.log(`Seu número (${mes}) corresponde ao mês de Fevereiro`);
        break;
    case 3:
        console.log(`Seu número (${mes}) corresponde ao mês de Março`);
        break;
    case 4:
        console.log(`Seu número (${mes}) corresponde ao mês de Abril`);
        break;
    case 5:
        console.log(`Seu número (${mes}) corresponde ao mês de Maio`);
        break;
    case 6:
        console.log(`Seu número (${mes}) corresponde ao mês de Junho`);
        break;
    case 7:
        console.log(`Seu número (${mes}) corresponde ao mês de Julho`);
        break;
    case 8:
        console.log(`Seu número (${mes}) corresponde ao mês de Agosto`);
        break;
    case 9:
        console.log(`Seu número (${mes}) corresponde ao mês de Setembro`);
        break;
    case 10:
        console.log(`Seu número (${mes}, corresponde ao mês de Outubro`);
        break;
    case 11:
        console.log(`Seu número (${mes}) corresponde ao mês de Novembro`);
        break;
    case 12:
        console.log(`Seu número (${mes}) corresponde ao mês de Dezembro`);
        break;

    default:
        console.log(`O número ${mes} não corresponde à nenhum mês.`);
}