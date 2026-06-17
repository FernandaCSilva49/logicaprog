// Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
// com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.

let genero ;

console.log("Qual é o seu gênero?");
genero = "sunhiujfh";

switch(genero){
    case "mulher":
        console.log("Banheiro feminino à esquerda.");
        break;
    case "homem":
        console.log("Banheiro masculino à direita.");
        break;
    default:
        console.log("Gênero não identificado");
        break;
}