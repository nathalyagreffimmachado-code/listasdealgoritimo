Algoritmo "adivinha_numero"
Var
   numero_secreto, palpite, tentativa: inteiro

Inicio
   numero_secreto <- 42

   Para tentativa de 1 ate 5 faca
      escreva("Tentativa ", tentativa, ": Digite um número: ")
      leia(palpite)

      se palpite = numero_secreto entao
         escreval("Parabéns! Você acertou em ", tentativa, " tentativa(s).")
         interrompa
      senao
         se palpite < numero_secreto entao
            escreval("Maior")
         senao
            escreval("Menor")
         fimse
      fimse
   fimpara

   se palpite <> numero_secreto entao
      escreval("Suas tentativas acabaram. O número secreto era 42.")
   fimse

Fimalgoritmo