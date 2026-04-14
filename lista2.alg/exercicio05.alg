algoritmo "reajuste_salario"

var
   salario,novo_salario:real

inicio
escreva("digite o salario atual ")
   leia(salario)
  se salario <= 1500 entao
  novo_salario <- salario + (salario* 0.15)
  senao
  novo_salario <- salario + (salario*0.10)
  fimse 
  escreva (" o novo salario é: r$",novo_salario)
  fimalgoritmo
