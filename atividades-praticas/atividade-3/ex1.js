import readline from "readline-sync"

let firstNum = readline.questionInt(`Digite o primeiro numero do intervalo: `)
let lastNum = readline.questionInt(`Digite o ultimo numero do intervalo: `)

if (firstNum > lastNum) {
    console.log(`\nIntervalo invalido!`)
}

for (let i = firstNum; i <= lastNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é multiplo de 3 e 5`)
    }
}