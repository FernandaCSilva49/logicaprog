// Use os métodos push, pop, shift e unshift para manipular dinamicamente um array de alunos.

// Solução em TypeScript
let turma = ["Ana", "Bruno", "Carlos"];
console.log("Turma inicial:", turma);


turma.push("Diana");
console.log("Após push:", turma);


let removido = turma.pop();
console.log("Removido:", removido); // "Diana"
console.log("Após pop:", turma);


turma.unshift("Zélia");
console.log("Após unshift:", turma);


turma.shift();
console.log("Após shift:", turma);