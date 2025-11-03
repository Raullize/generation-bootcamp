import readline from "readline-sync"

const nomeDoColaborador = readline.question("Digite o nome do colaborador: ")

console.log("\n=== CARGOS DISPONÍVEIS ===")
console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Técnico de TI")

const cargoId = readline.questionInt("Digite o ID do cargo (1 a 6): ")
const salario = readline.questionInt("Digite o salario do colaborador: ")

let reajuste = 0.0, cargo = null

switch (cargoId) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break
    default:
        console.log("Opção inválida!")
}

if (cargo !== null) {
    const novoSalario = salario + (reajuste * salario)
    console.log(`\nNome do colaborador: ${nomeDoColaborador}\nCargo: ${cargo}\nSalário: R$ ${novoSalario}`)
}

