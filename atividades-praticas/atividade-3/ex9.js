import readline from "readline-sync"

let matriz = new Array(3)

for(let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3)
    for(let j = 0; j < matriz.length; j++) {
        matriz[i][j] = readline.questionInt(`Digite o numero do elemento [${i}][${j}]: `)
    }
}

console.log(`\n`)
console.log(`Elementos da Diagonal Principal: ${matriz[0][0]} ${matriz[1][1]} ${matriz[2][2]}\n`)
console.log(`Elementos da Diagonal Secundária: ${matriz[0][2]} ${matriz[1][1]} ${matriz[2][0]}\n`)
console.log(`Soma dos Elementos da Diagonal Principal: ${matriz[0][0] + matriz[1][1] + matriz[2][2]}\n`)
console.log(`Soma dos Elementos da Diagonal Secundária: ${matriz[0][2] + matriz[1][1] + matriz[2][0]}\n`)

// console.table(matriz)