import readline from "readline-sync"

let salario = readline.questionFloat("Digite o salario: ", {limitMessage: 'Digite um numero float'})
let abono = readline.questionFloat("Digite o abono: ", {limitMessage: 'Digite um numero float'})

let novoSalario = salario + abono

console.log(`\nNovo Salario: ${novoSalario.toFixed}`)