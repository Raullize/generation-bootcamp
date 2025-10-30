const read = require('readline-sync');

let salario = read.questionFloat("Digite o salario: ", {limitMessage: 'Digite um numero float'})
let abono = read.questionFloat("Digite o abono: ", {limitMessage: 'Digite um numero float'})
let novoSalario = salario + abono

console.log(`O novo salario é ${novoSalario.toFixed}`)