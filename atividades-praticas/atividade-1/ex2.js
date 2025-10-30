const read = require('readline-sync')

let nota1 = read.questionFloat("Digite a nota 1: ", {limitMessage: 'Digite um numero float'})
let nota2 = read.questionFloat("Digite a nota 2: ", {limitMessage: 'Digite um numero float'})
let nota3 = read.questionFloat("Digite a nota 3: ", {limitMessage: 'Digite um numero float'})
let nota4 = read.questionFloat("Digite a nota 4: ", {limitMessage: 'Digite um numero float'})

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(`Media final: ${media.toFixed(1)}`)