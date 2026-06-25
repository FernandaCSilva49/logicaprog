// material 08 

let num;
let resultado;

function somar (a, b){

    resultado = a + b;
    return resultado;

}

console.log(somar(5, 3)); // exibindo o valor retornado pela função
console.log(resultado);   // só consigo exibir o resultado no console log se a variavel ter sido criado do lado de fora da função (lembrando que vc 
                                                                                              // precisa chamar e guardar o valor dentro da função)

num = somar(10, 20);       // guarando o resultado da função em uma variável e exibindo
console.log(num);

somar(4, 5); // o valor se perde 

function direcionador (){
    console.log("Siga em frente! Estude sempre.");
};

direcionador();  // não precisa do console.log pq a função ja faz isso

function mensagem (){
    return "Ame mais brigue menos";
};

mensagem();
console.log(mensagem());

function tudao (){
    console.log("Inicio da função tudão");
    direcionador();
    let calc = somar (2, 3);
    console.log(`Resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim");
};

tudao();


mensagem();
console.log(mensagem());