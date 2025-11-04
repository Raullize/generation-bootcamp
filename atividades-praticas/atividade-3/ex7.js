import readline from "readline-sync"

const arr = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let posicao = null

let num = readline.questionInt(`Digite o numero que voce deseja encontrar: `)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log(`O número ${num} não foi encontrado!`)
} else {
    console.log(`O número ${num} está localizado na posição: ${posicao}`)
}