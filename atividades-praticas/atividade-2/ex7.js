import readline from "readline-sync"

const numero1 = readline.questionFloat(`Digite o 1 numero: `)
const numero2 = readline.questionFloat(`Digite o 2 numero: `)
const operacao = readline.questionInt(`Operacao (1 - Soma, 2 - Subtracao, 3 - Multiplicacao, 4 - Divisao): `)

let resultado = 0.0
let expressao = ""

switch (operacao) {
    case 1:
        resultado = numero1 + numero2
        expressao = `${numero1} + ${numero2} = ${resultado.toFixed(1)}`
        console.log(expressao)
        break
    case 2:
        resultado = numero1 - numero2
        expressao = `${numero1} - ${numero2} = ${resultado.toFixed(1)}`
        console.log(expressao)
        break
    case 3:
        resultado = numero1 * numero2
        expressao = `${numero1} * ${numero2} = ${resultado.toFixed(1)}`
        console.log(expressao)
        break
    case 4:
        if (numero2 === 0) {
            console.log(`Erro: Divisão por zero!`)
        } else {
            resultado = numero1 / numero2
            expressao = `${numero1} / ${numero2} = ${resultado.toFixed(1)}`
            console.log(expressao)
        }
        break
    default:
        console.log(`Operação Inválida!`)
}