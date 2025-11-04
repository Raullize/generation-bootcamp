import readline from "readline-sync"

console.log(`\n=== SISTEMA BANCÁRIO ===`)
console.log(`Saldo inicial: R$ 1000.00`)

let saldo = 1000.00

console.log(`\n=== OPERAÇÕES DISPONÍVEIS ===`)
console.log(`1 - Saldo`)
console.log(`2 - Saque`)
console.log(`3 - Depósito`)

const operacao = readline.questionInt(`Digite o codigo da operacao (1 a 3): `)

switch (operacao) {
    case 1:
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
        break
    case 2:
        const valorSaque = readline.questionFloat(`Digite o valor para saque: R$ `)
        
        if (valorSaque > saldo) {
            console.log(`Saldo Insuficiente!`)
        } else if (valorSaque <= 0) {
            console.log(`Valor invalido para saque!`)
        } else {
            saldo -= valorSaque
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`)
        }
        break
    
    case 3:
        const valorDeposito = readline.questionFloat(`Digite o valor para deposito: R$ `)
        
        if (valorDeposito <= 0) {
            console.log(`Valor invalido para deposito!`)
        } else {
            saldo += valorDeposito
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`)
        }
        break
    
    default:
        console.log(`\nOperacao Invalida!`)
        break
}