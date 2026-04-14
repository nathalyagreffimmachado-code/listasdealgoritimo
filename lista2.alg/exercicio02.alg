algoritmo "calcular imc"

var
   peso,altura,imc:real

inicio

   escreval("Digite seu peso em kg: ")
   leia(peso)
   escreva("digite sua altura em metros:")
   leia(altura)
imc<-peso/(altura*altura)
escreva ("seu resultado de imc é:",imc)
fimalgoritmo
