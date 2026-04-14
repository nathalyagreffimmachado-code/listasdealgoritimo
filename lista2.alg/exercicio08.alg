algoritmo "numero_primo"
var
   N, i: inteiro
   primo: logico
inicio
   leia(N)

   se (N <= 1) entao
      escreva("Número inválido")
   senao
      primo <- verdadeiro

      para i de 2 ate N - 1 faca
         se (N mod  i = 0) entao
            primo <- falso
         fimse
      fimpara

      se (primo) entao
         escreva("Número primo")
      senao
         escreva("Não é primo")
      fimse
   fimse
fimalgoritmo