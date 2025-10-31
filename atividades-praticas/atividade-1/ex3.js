import readline from "readline-sync"

let salarioBruto = readline.questionFloat("Digite o salario bruto: ", {limitMessage: 'Digite um numero float'})
let adicionalNorturno = readline.questionFloat("Digite o adicional noturno: ", {limitMessage: 'Digite um numero float'})
let horasExtras = readline.questionFloat("Digite o horas extras: ", {limitMessage: 'Digite um numero float'})
let descontos = readline.questionFloat("Digite o descontos: ", {limitMessage: 'Digite um numero float'})

let salarioLiquido = salarioBruto + adicionalNorturno + (horasExtras * 5) - descontos

console.log(`Salario Liquido: ${salarioLiquido.toFixed(2)}`)