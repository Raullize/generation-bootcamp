import readline from "readline-sync"

console.log("\n=== CARDÁPIO ===")
console.log("1 - Cachorro Quente - R$ 10.00")
console.log("2 - X-Salada - R$ 15.00")
console.log("3 - X-Bacon - R$ 18.00")
console.log("4 - Bauru - R$ 12.00")
console.log("5 - Refrigerante - R$ 8.00")
console.log("6 - Suco de laranja - R$ 13.00")

const codigo = readline.questionInt("Digite o codigo do produto (1 a 6): ")
const quantidade = readline.questionInt("Digite a quantidade: ")

let nomeProduto, precoUnitario

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente"
        precoUnitario = 10.00
        break
    case 2:
        nomeProduto = "X-Salada"
        precoUnitario = 15.00
        break
    case 3:
        nomeProduto = "X-Bacon"
        precoUnitario = 18.00
        break
    case 4:
        nomeProduto = "Bauru"
        precoUnitario = 12.00
        break
    case 5:
        nomeProduto = "Refrigerante" 
        precoUnitario = 8.00
        break
    case 6:
        nomeProduto = "Suco de laranja"
        precoUnitario = 13.00
        break
    default:
        console.log("Opção inválida!")
        precoUnitario = 0
}

if (precoUnitario !== 0) {
    const valorTotal = quantidade * precoUnitario
    console.log(`\nProduto: ${nomeProduto}\nValor total: R$ ${valorTotal.toFixed(2)}`)
}