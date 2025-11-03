import readline from "readline-sync"

let palavra1 = readline.question("Digite a primeira palavra (ex: vertebrado): ").toLowerCase()
let palavra2 = readline.question("Digite a segunda palavra (ex: mamifero): ").toLowerCase()
let palavra3 = readline.question("Digite a terceira palavra (ex: onivoro): ").toLowerCase()

let animal = "Animal não encontrado ou características inválidas"

if (palavra1 === "vertebrado" || palavra2 === "vertebrado" || palavra3 === "vertebrado") {
    if (palavra1 === "ave" || palavra2 === "ave" || palavra3 === "ave") {
        if (palavra1 === "carnivoro" || palavra2 === "carnivoro" || palavra3 === "carnivoro") {
            animal = "Águia"
        } else if (palavra1 === "onivoro" || palavra2 === "onivoro" || palavra3 === "onivoro") {
            animal = "Pomba"
        }
    } else if (palavra1 === "mamifero" || palavra2 === "mamifero" || palavra3 === "mamifero") {
        if (palavra1 === "onivoro" || palavra2 === "onivoro" || palavra3 === "onivoro") {
            animal = "Homem"
        } else if (palavra1 === "herbivoro" || palavra2 === "herbivoro" || palavra3 === "herbivoro") {
            animal = "Vaca"
        }
    }
} else if (palavra1 === "invertebrado" || palavra2 === "invertebrado" || palavra3 === "invertebrado") {
    if (palavra1 === "inseto" || palavra2 === "inseto" || palavra3 === "inseto") {
        if (palavra1 === "hematofago" || palavra2 === "hematofago" || palavra3 === "hematofago") {
            animal = "Pulga"
        } else if (palavra1 === "herbivoro" || palavra2 === "herbivoro" || palavra3 === "herbivoro") {
            animal = "Lagarta"
        }
    } else if (palavra1 === "anelideo" || palavra2 === "anelideo" || palavra3 === "anelideo") {
        if (palavra1 === "hematofago" || palavra2 === "hematofago" || palavra3 === "hematofago") {
            animal = "Sanguessuga"
        } else if (palavra1 === "onivoro" || palavra2 === "onivoro" || palavra3 === "onivoro") {
            animal = "Minhoca"
        }
    }
}

console.log(`\nO animal classificado é: ${animal}`)