const read = require('readline-sync')

let salarioBruto = read.questionFloat("Digite o salario bruto: ", {limitMessage: 'Digite um numero float'})
let adicionalNorturno = read.questionFloat("Digite o adicional noturno: ", {limitMessage: 'Digite um numero float'})
let horasExtras = read.questionFloat("Digite o horas extras: ", {limitMessage: 'Digite um numero float'})
let descontos = read.questionFloat("Digite o descontos: ", {limitMessage: 'Digite um numero float'})

let salarioLiquido = salarioBruto + adicionalNorturno + (horasExtras * 5) - descontos

console.log(`Salario Liquido: ${salarioLiquido.toFixed(2)}`)