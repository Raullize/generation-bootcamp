programa
{
    inclua biblioteca Matematica --> mat
    
    funcao inicio()
    {
        inteiro vetor[10]
        inteiro i
        inteiro soma = 0
        real media
        
        para (i = 0; i < 10; i++)
        {
            escreva("Digite o ", i + 1, "º número inteiro: ")
            leia(vetor[i])
        }

        escreva("\n-------------------------------------")
        escreva("\nElementos nos índices ímpares: ")
        para (i = 0; i < 10; i++)
        {
            se (i % 2 != 0)
            {
                escreva(vetor[i], " ")
            }
        }

        escreva("\nElementos pares: ")
        para (i = 0; i < 10; i++)
        {
            se (vetor[i] % 2 == 0)
            {
                escreva(vetor[i], " ")
            }
        }

        para (i = 0; i < 10; i++)
        {
            soma = soma + vetor[i]
        }

        media = mat.arredondar(soma / 10.0, 0)

        escreva("\nSoma: ", soma)
        escreva("\nMédia: ", media)
        escreva("\n-------------------------------------\n")
    }
}