algoritmo "leia ano"

var
   ano: inteiro
   resto4:inteiro
   resto100:inteiro
   resto400:inteiro
inicio
   escreva("Digite um ano: ")
   leia(ano)

  resto4 <- ano mod 4
  resto100 <- ano mod 100
  resto400 <- ano mod 400
  se (resto4 =0) e (resto100<> 0) ou (resto400= 0) entao
   escreval ("ano bissexto")
 senao 
 escreval ("ano nao bissexto")
fimse 



fimalgoritmo
