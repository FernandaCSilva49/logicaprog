/*

Crie uma função calcularDesconto(preco, percentual) que:
• Receba o preço e o percentual de desconto
• Calcule e retorne o valor final
• Substitua todo o código repetido

*/

function calcularDesconto(preco, percentual){

    desconto = (preco * percentual) / 100;
    console.log(`O seu salário após o desconto é: R$${preco - desconto},00`);

}

calcularDesconto(1500, 30);