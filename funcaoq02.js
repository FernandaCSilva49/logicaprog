// Criar uma função calcularArea(base, altura) que retorne a área de um retângulo

function calcularArea (base, altura){
    return (base * altura) / 2;
}

console.log(calcularArea(18, 14));

// Criar uma função converterCelsius(temp) que converta Celsius para Fahrenheit: (temp * 9/5) + 32

function converterCelsius(temp){
    return (temp * 1.8) + 32;
};

console.log(converterCelsius(20));

// Criar uma função saudacaoPersonalizada(nome) que retorne "Olá, [nome]! Seja bem-vindo."

function saudacaoPersonalizada(nome){
    return `Olá, ${nome}! Seja bem-vindo`;
};

console.log(saudacaoPersonalizada("Fernanda"));