import readline from "readline-sync"

let numeroA = readline.questionInt(`Digite o numero A: `, {limitMessage: `Digite um numero inteiro`})
let numeroB = readline.questionInt(`Digite o numero B: `, {limitMessage: `Digite um numero inteiro`})
let numeroC = readline.questionInt(`Digite o numero C: `, {limitMessage: `Digite um numero inteiro`})

let somaNumeros = numeroA + numeroB

if (somaNumeros > numeroC) {
    console.log(`\n${numeroA} + ${numeroB} = ${somaNumeros} > ${numeroC}`)
    console.log(`A Soma de A + B é Maior do que C`)
} else if (somaNumeros < numeroC) {
    console.log(`\n${numeroA} + ${numeroB} = ${somaNumeros} < ${numeroC}`)
    console.log(`A Soma de A + B é Menor do que C`)
} else {
    console.log(`\n${numeroA} + ${numeroB} = ${somaNumeros} = ${numeroC}`)
    console.log(`A Soma de A + B é Igual do que C`)
}

