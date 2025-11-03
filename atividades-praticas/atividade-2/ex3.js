import readline from "readline-sync"

let nome = readline.question("Digite o Nome do doador: ")
let idade = readline.questionInt("Digite a Idade do doador: ")
let primeiraDoacao = readline.keyInYNStrict("Primeira doacao de sangue? ")

let statusDoador = "não está apto"

if (idade < 18 || idade > 69) {
    statusDoador = "não está apto"
} else if (idade >= 18 && idade < 60) {
    statusDoador = "está apto"
} else if (idade >= 60 && idade <= 69) {
    if (!primeiraDoacao) {
        statusDoador = "está apto"
    }
}

console.log(`\n${nome} ${statusDoador} para doar sangue!`)