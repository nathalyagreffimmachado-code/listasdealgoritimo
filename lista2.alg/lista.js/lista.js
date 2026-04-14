function exercicio1() {
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"));
  const idade = 2026 - anoNascimento;

  alert("Idade: " + idade);

  if (idade >= 16) {
    alert("Pode votar");
  } else {
    alert("Não pode votar");
  }

  if (idade >= 18) {
    alert("Pode tirar CNH");
  } else {
    alert("Não pode tirar CNH");
  }
}
const buttonexercico1 = document.getElementById("exercicio1")
buttonexercico1.addEventListener('click', () => { exercicio1() })
//--------------EXERCICIO 2-------------------//
function exercicio2() {
  let n1 = Number(prompt("Digite o primeiro número:"));
  let n2 = Number(prompt("Digite o segundo número:"));
  let op = prompt("Digite a operação (+, -, *, /):");

  let resultado;

  if (op === "+") {
    resultado = n1 + n2;
  } else if (op === "-") {
    resultado = n1 - n2;
  } else if (op === "*") {
    resultado = n1 * n2;
  } else if (op === "/") {
    if (n2 === 0) {
      console.log("Erro: divisão por zero");
    } else {
      resultado = n1 / n2;
    }
  } else {
    console.log("Operação inválida");
  }

  if (resultado !== undefined) {
    console.log("Resultado:", resultado);
  }
}
const buttonexercico2 = document.getElementById("exercicio2")
buttonexercico2.addEventListener('click', () => { exercicio2() })
//----------------EXERCICIO 3 ----------------------------//
function exercicio3() {
  let peso = parseFloat(prompt("Digite seu peso (kg):"));
  let altura = parseFloat(prompt("Digite sua altura (m):"));

  let imc = peso / (altura * altura);

  console.log("IMC:", imc.toFixed(2));

  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if (imc < 25) {
    console.log("Peso normal");
  } else if (imc < 30) {
    console.log("Acima do peso");
  } else {
    console.log("Obeso");
  }
}
const buttonexercico3 = document.getElementById("exercicio3")
buttonexercico3.addEventListener('click', () => { exercicio3() })
//------------------EXERCICIO 4 --------------//
function exercicio4() {
  function calcularTotal(preco, codigo) {
    switch (codigo) {
      case 1:
        return preco * 0.90; // 10% desconto
      case 2:
        return preco * 0.95; // 5% desconto
      case 3:
        return preco; // preço normal
      case 4:
        return preco * 1.20; // 20% acréscimo
      default:
        return null;
    }
  }

  // Entrada de dados
  let preco = parseFloat(prompt("Digite o preço do produto:"));

  let codigo = parseInt(prompt(
    "Escolha a condição de pagamento:\n" +
    "1 - À vista em dinheiro/PIX (10% de desconto)\n" +
    "2 - À vista no cartão (5% de desconto)\n" +
    "3 - Em 2x (preço normal)\n" +
    "4 - Em 3x ou mais (20% de acréscimo)"
  ));

  // Validação e cálculo
  if (isNaN(preco) || preco <= 0) {
    console.log("Preço inválido!");
  } else {
    let total = calcularTotal(preco, codigo);

    if (total === null) {
      console.log("Código inválido!");
    } else {
      console.log(`Valor final a pagar: R$ ${total.toFixed(2)}`);
    }
  }
}
const buttonexercico4 = document.getElementById("exercicio4")
buttonexercico4.addEventListener('click', () => { exercicio4() })
//-----------------EXERCICIO 5 ------------------------------//
function exercicio5() {
  function classificarNadador(idade) {
    if (idade >= 5 && idade <= 7) return "Infantil A";
    if (idade <= 10) return "Infantil B";
    if (idade <= 13) return "Juvenil A";
    if (idade <= 17) return "Juvenil B";
    return "Adulto";
  }

  // Entrada
  let idade = parseInt(prompt("Digite a idade:"));

  // Validação
  if (isNaN(idade) || idade < 0) {
    console.log("Idade inválida!");
  } else if (idade < 5) {
    console.log("Idade abaixo da categoria mínima.");
  } else {
    let categoria = classificarNadador(idade);
    console.log("Categoria:", categoria);
  }
}
const buttonexercico5 = document.getElementById("exercicio5")
buttonexercico5.addEventListener('click', () => { exercicio5() })
//-------------- EXERCICIO 6 -------------//
function exercicio6() {
  function calcularInvestimento(tipo, valor) {
    let rendimento;

    if (tipo === 1) {
      rendimento = 0.03; // Poupança
    } else if (tipo === 2) {
      rendimento = 0.04; // Renda Fixa
    } else {
      return null;
    }

    return valor + (valor * rendimento);
  }

  // Entrada de dados
  let tipo = parseInt(prompt("Digite o tipo de investimento:\n1 - Poupança\n2 - Renda Fixa"));
  let valor = parseFloat(prompt("Digite o valor do investimento:"));

  // Validação
  if (isNaN(tipo) || isNaN(valor) || valor <= 0) {
    console.log("Dados inválidos!");
  } else {
    let total = calcularInvestimento(tipo, valor);

    if (total === null) {
      console.log("Tipo de investimento inválido!");
    } else {
      console.log(`Valor corrigido: R$ ${total.toFixed(2)}`);
    }
  }
}
const buttonexercico6 = document.getElementById("exercicio6")
buttonexercico6.addEventListener('click', () => { exercicio6() })
//--------------EXERCICIO 7 ---------------//
function exercicio7() {
  function classificarRisco(idade, peso) {
    if (idade < 20) {
      if (peso <= 60) return 9;
      if (peso <= 90) return 8;
      return 7;
    } else if (idade <= 50) {
      if (peso <= 60) return 6;
      if (peso <= 90) return 5;
      return 4;
    } else {
      if (peso <= 60) return 3;
      if (peso <= 90) return 2;
      return 1;
    }
  }

  // Entrada
  let idade = parseInt(prompt("Digite a idade:"));
  let peso = parseFloat(prompt("Digite o peso:"));

  // Validação
  if (isNaN(idade) || isNaN(peso) || idade < 0 || peso <= 0) {
    console.log("Dados inválidos!");
  } else {
    let grupo = classificarRisco(idade, peso);
    console.log(`Grupo de risco: ${grupo}`);
  }
}
const buttonexercico7 = document.getElementById("exercicio7")
buttonexercico7.addEventListener('click', () => { exercicio7() })
//------------------------EXERCICIO 8 ----------------------//
function exercicio8() {
  function calcularReajuste(salario) {
    if (salario <= 300) {
      return salario * 1.35; // 35% de aumento
    } else {
      return salario * 1.15; // 15% de aumento
    }
  }

  // Entrada
  let salario = parseFloat(prompt("Digite o salário:"));

  // Validação
  if (isNaN(salario) || salario <= 0) {
    console.log("Salário inválido!");
  } else {
    let novoSalario = calcularReajuste(salario);
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
  }
}
const buttonexercico8 = document.getElementById("exercicio8")
buttonexercico8.addEventListener('click', () => { exercicio8() })
//-------------- EXERCICIO 9 ----------------------------//
function exercicio9 () {
  // Algoritmo "operacoes" em JavaScript

// Leitura dos números
let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));

// Escolha da operação
let opcao = parseInt(prompt(
  "Escolha a operação:\n" +
  "1 - Média\n" +
  "2 - Soma\n" +
  "3 - Produto"
));

let resultado;

// Estrutura de decisão
switch (opcao) {
  case 1:
    resultado = (n1 + n2) / 2;
    break;
  case 2:
    resultado = n1 + n2;
    break;
  case 3:
    resultado = n1 * n2;
    break;
  default:
    alert("Erro: opção inválida");
    throw new Error("Opção inválida"); // Para interromper a execução
}

// Exibir o resultado
alert("Resultado: " + resultado);
}
const buttonexercico9 = document.getElementById("exercicio9")
buttonexercico9.addEventListener('click', () => { exercicio9() })
//----------------- EXERCICIO 10 ----------------//
function exercicio10 () {
// Algoritmo "aumento_salario" em JavaScript

// Leitura do salário atual
let salario = parseFloat(prompt("Digite o salário atual:"));

// Definição do percentual de aumento
let aumento;

if (salario <= 300) {
    aumento = 0.15;
} else if (salario <= 600) {
    aumento = 0.10;
} else if (salario <= 900) {
    aumento = 0.05;
} else {
    aumento = 0;
}

// Cálculo do novo salário
let novoSalario = salario + (salario * aumento);

// Exibição do resultado
alert("Novo salário: " + novoSalario.toFixed(2));
}
const buttonexercico10 = document.getElementById("exercicio10")
buttonexercico10.addEventListener('click', () => { exercicio10() })