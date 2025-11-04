import readline from "readline-sync"

let numero, somaTotal = 0

do {
    numero = readline.questionInt("Digite um numero: ")

    if (numero === 0) {
        break
    }

    if (numero > 0) {
        somaTotal += numero
    }

} while (numero != 0)

console.log(`A soma dos números positivos é: ${somaTotal}`)
