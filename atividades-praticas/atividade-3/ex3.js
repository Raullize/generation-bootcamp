import readline from "readline-sync"

let idade = 0, pessoasMenorQue21 = 0, pessoasMaiorQue50 = 0

while (idade >= 0) {
    idade = readline.questionInt(`Digite uma idade: `)
    
    if (idade < 0) {
        break
    }
    
    if (idade < 21) {
        pessoasMenorQue21++
    }

    if (idade > 50) {
        pessoasMaiorQue50++
    }
}

console.log(`Total de pessoas menores de 21 anos: ${pessoasMenorQue21}`)
console.log(`Total de pessoas maiores de 50 anos: ${pessoasMaiorQue50}`)
