algoritmo "trocar_valores"

var
   a,b,aux: inteiro

inicio
escreva("digite o valor de a: ")
   leia(a)
   escreva("digite o valor de b: ")
   leia(b)

   aux<- a
   a<-b
   b<-aux

   escreva("a=", a, "b=", b)

fimalgoritmo
