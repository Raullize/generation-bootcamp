import readline from "readline-sync"

let num1 = readline.questionFloat("Digite o numero 1: ", {limitMessage: 'Digite um numero float'})
let num2 = readline.questionFloat("Digite o numero 2: ", {limitMessage: 'Digite um numero float'})
let num3 = readline.questionFloat("Digite o numero 3: ", {limitMessage: 'Digite um numero float'})
let num4 = readline.questionFloat("Digite o numero 4: ", {limitMessage: 'Digite um numero float'})

let calculo = (num1 * num2) - (num3 * num4)

console.log(`Diferenca: ${calculo.toFixed(1)}`)