import readline from "readline-sync"

let num = readline.questionInt(`Digite um numero: `, {limitMessage: `Digite um numero inteiro`})

if (num % 2 === 0 && num > 0) {
    console.log(`\nO Número ${num} é par e positivo!`)
} else if (num % 2 === 1 && num > 0) {
    console.log(`\nO Número ${num} é impar e positivo!`)
} else if (num % 2 === 0 && num < 0) {
    console.log(`\nO Número ${num} é par e negativo!`)
} else {
    console.log(`\nO Número ${num} é impar e negativo!`)
}