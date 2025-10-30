programa
{
    funcao inicio()
    {
        inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
        inteiro i, j
        inteiro temp
        
        escreva("Vetor Original: [")
        para (i = 0; i < 10; i++)
        {
            escreva(vetor[i])
            se (i < 9) entao
                escreva(", ")
            fim_se
        }
        escreva("]\n")

        para (i = 0; i < 9; i++)
        {
            para (j = 0; j < 9 - i; j++)
            {
                se (vetor[j] < vetor[j + 1])
                {
                    temp = vetor[j]
                    vetor[j] = vetor[j + 1]
                    vetor[j + 1] = temp
                }
            }
        }

        escreva("Vetor Ordenado (Decrescente): [")
        para (i = 0; i < 10; i++)
        {
            escreva(vetor[i])
            se (i < 9) entao
                escreva(", ")
            fim_se
        }
        escreva("]\n")
    }
}