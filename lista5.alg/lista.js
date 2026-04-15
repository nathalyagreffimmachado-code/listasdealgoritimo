//--------- EXERCICIO 1 -----------//
console.log("--- Múltiplos de 3 (3 a 30) ---");
for (let i = 3; i <= 30; i += 3) {
    process.stdout.write(i + " "); 
}
//------------EXERCICIO 2 ------------//
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//---------- EXERCICIO 3 ---------//
let n = parseInt(prompt("Digite um valor inteiro e positivo: "));
let fat = 1;

for (let i = 1; i <= n; i++) {
    fat *= i;
}

console.log(`O fatorial de ${n} é: ${fat}`);
//--------- EXERCICIO 4 -------------//
for (let i = 1; i <= 10; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));

    if (nota >= 0 && nota <= 2.9) {
        console.log("E");
    } else if (nota <= 4.9) {
        console.log("D");
    } else if (nota <= 6.9) {
        console.log("C");
    } else if (nota <= 8.9) {
        console.log("B");
    } else {
        console.log("A");
    }
}
//---------- EXERCICIO 5 -----------------//
let contD = 0, contAB = 0, contE = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`--- Aluno ${i} ---`);
    let codigo = prompt("Digite o código do aluno: ");
    let nota = parseFloat(prompt("Digite a nota final: "));
    let conceito = "";

    if (nota >= 0.0 && nota <= 2.9) {
        conceito = "E";
        contE++;
    } else if (nota >= 3.0 && nota <= 4.9) {
        conceito = "D";
        contD++;
    } else if (nota >= 5.0 && nota <= 6.9) {
        conceito = "C";
    } else if (nota >= 7.0 && nota <= 8.9) {
        conceito = "B";
        contAB++;
    } else if (nota >= 9.0 && nota <= 10.0) {
        conceito = "A";
        contAB++;
    }

    console.log(`O aluno de código ${codigo} obteve o conceito: ${conceito}`);
}

let percE = (contE / 10) * 100;

console.log("========== RESULTADO FINAL ==========");
console.log("A. Quantidade de alunos com conceito D: " + contD);
console.log("B. Quantidade de alunos com conceito A ou B: " + contAB);
console.log("C. Percentual de alunos com conceito E: " + percE + "%");
//--------- EXERCICIO 6 -----------------//
let contMenor18 = 0, contJogadores = 0, contPeso80 = 0;
let somaIdade = 0, somaAltura = 0;

let idade = parseInt(prompt("Digite a idade (ou 0 para sair): "));

while (idade !== 0) {
    let peso = parseFloat(prompt("Digite o peso: "));
    let altura = parseFloat(prompt("Digite a altura: "));

    contJogadores++;
    somaIdade += idade;
    somaAltura += altura;

    if (idade < 18) contMenor18++;
    if (peso > 80) contPeso80++;

    idade = parseInt(prompt("Digite a idade (ou 0 para sair): "));
}

if (contJogadores > 0) {
    console.log("Menores de 18: " + contMenor18);
    console.log("Média idade: " + (somaIdade / contJogadores).toFixed(2));
    console.log("Média altura: " + (somaAltura / contJogadores).toFixed(2));
    console.log("Mais de 80kg: " + contPeso80);
}
//------------- EXERCICIO 7 -----------//
let soma_veiculos = 0, soma_acid_pequenas = 0, qtd_cidades_pequenas = 0;
let maior_indice = -1;

let total_cidades = parseInt(prompt("Quantas cidades deseja cadastrar? "));

for (let i = 1; i <= total_cidades; i++) {
    console.log(`--- Dados da Cidade ${i} ---`);
    let codigo = prompt("Digite o código da cidade: ");
    let veiculos = parseInt(prompt("Número de veículos de passeio: "));
    let acidentes = parseInt(prompt("Número de acidentes com vítimas: "));

    soma_veiculos += veiculos;

    if (acidentes > maior_indice) {
        maior_indice = acidentes;
    }

    if (veiculos < 2000) {
        soma_acid_pequenas += acidentes;
        qtd_cidades_pequenas++;
    }
}

if (total_cidades > 0) {
    console.log("========== RESULTADOS ==========");
    console.log("A. Maior índice de acidentes: " + maior_indice);
    console.log("B. Média de veículos: " + (soma_veiculos / total_cidades).toFixed(1));

    if (qtd_cidades_pequenas > 0) {
        console.log("C. Média de acidentes (cidades pequenas): " + (soma_acid_pequenas / qtd_cidades_pequenas).toFixed(1));
    } else {
        console.log("C. Nenhuma cidade pequena registrada.");
    }
}