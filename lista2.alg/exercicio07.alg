algoritmo "fatorial"
var
   N, i, fatorial: inteiro
inicio
   leia(N)

   se (N < 0) ou (N > 10) entao
      escreva("Número inválido")
   senao
      fatorial <- 1

      para i de 1 ate N faca
         fatorial <- fatorial * i
      fimpara

      escreva("Fatorial de ", N, " é ", fatorial)
   fimse
fimalgoritmo
