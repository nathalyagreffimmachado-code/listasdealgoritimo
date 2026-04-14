//-------------- EXERCICIO 1 -----------------//
const valor = 3;

if (valor <= 30) {
    resto = valor % 3;

    if (resto === 0) {
        console.log(valor);
    }
    valor = valor + 1;
}
//---------- EXERCICIO 2 ------------------------//
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//------------- EXERCICIO 3 --------------//

const n = Number(prompt("Digite um valor para n: "));

const fat = 1;


for (const i = 1; i <= n; i++) {
    fat = fat * i;
}
console.log(`O fatorial de ${n} é: ${fat}`);
//--------------- EXERCICIO 4 ------------/

for (let i = 1; i <= 10; i++) {

    let codigo = parseInt(prompt(`Digite o código do aluno ${i}:`));
    
 
    let nota = parseFloat(prompt("Digite a nota final:"));
    
    let conceito;

    if (nota >= 9.0) {
        conceito = "A";
    } else if (nota >= 7.0) {
        conceito = "B";
    } else if (nota >= 5.0) {
        conceito = "C";
    } else if (nota >= 3.0) {
        conceito = "D";
    } else {
        conceito = "E";
    }

  
    console.log(`O aluno de código ${codigo} obteve o conceito: ${conceito}`);
    console.log("---------------------------------------");
}
//----------- EXERCICIO 5 ----------------------------//
// Algoritmo: Controle_Notas_Estatisticas

// Inicialização dos contadores
let qtd_D = 0;
let qtd_AB = 0;
let qtd_E = 0;

for (let i = 1; i <= 10; i++) {
    let codigo = parseInt(prompt(`Digite o código do aluno ${i}:`));
    let nota = parseFloat(prompt("Digite a nota final do aluno (0 a 10):"));
    let conceito = "";

   
    if (nota >= 0.0 && nota <= 2.9) {
        conceito = "E";
        qtd_E++;
    } else if (nota >= 3.0 && nota <= 4.9) {
        conceito = "D";
        qtd_D++;
    } else if (nota >= 5.0 && nota <= 6.9) {
        conceito = "C";
    } else if (nota >= 7.0 && nota <= 8.9) {
        conceito = "B";
        qtd_AB++; 
    } else if (nota >= 9.0 && nota <= 10.0) {
        conceito = "A";
        qtd_AB++;
    }


    console.log(`O aluno de código ${codigo} obteve o conceito: ${conceito}`);
    console.log("-------------------------------------------");
}


let percentual_E = (qtd_E / 10) * 100;


console.log("====== RESULTADOS FINAIS ======");
console.log(`A. Alunos com conceito D: ${qtd_D}`);
console.log(`B. Alunos com conceito A ou B: ${qtd_AB}`);
console.log(`C. Percentual de alunos com conceito E: ${percentual_E}%`);

//---------- EXERCICIO 6 -----------//
let qtd_menor18 = 0;
let qtd_peso80 = 0;
let total_jogadores = 0;
let soma_idade = 0;
let soma_altura = 0;


let idade = parseInt(prompt("Digite a idade do jogador (ou 0 para sair):"));

while (idade !== 0) {
    let peso = parseFloat(prompt("Digite o peso do jogador (kg):"));
    let altura = parseFloat(prompt("Digite a altura do jogador (m):"));

    
    total_jogadores++;
    soma_idade += idade;
    soma_altura += altura;

    if (idade < 18) {
        qtd_menor18++;
    }

    if (peso > 80) {
        qtd_peso80++;
    }

    console.log("--- Próximo Jogador ---");
    

    idade = parseInt(prompt("Digite a idade do próximo jogador (ou 0 para sair):"));
}


if (total_jogadores > 0) {
    let media_idade = soma_idade / total_jogadores;
    let media_altura = soma_altura / total_jogadores;

    console.log("====== RESULTADOS FINAIS ======");
    console.log(`A. Jogadores menores de 18 anos: ${qtd_menor18}`);
    
    console.log(`B. Média de idade dos jogadores: ${media_idade.toFixed(1)}`);
    console.log(`C. Média de altura do campeonato: ${media_altura.toFixed(2)}m`);
    console.log(`D. Jogadores com mais de 80kg: ${qtd_peso80}`);
} else {
    console.log("Nenhum jogador foi cadastrado.");
}

//------------- EXERCICIO 7 ----------//
// Algoritmo: Estatisticas_Futebol

// Inicialização de contadores e acumuladores
let menor18 = 0;
let peso80 = 0;
let jogadores = 0;
let  = 0;
let altura = 0;

// Primeira leitura (entrada no loop)
let  = parseInt(prompt("Digite a idade do jogador (ou 0 para sair):"));

while (idade !== 0) {
    let peso = parseFloat(prompt("Digite o peso do jogador (kg):"));
    let altura = parseFloat(prompt("Digite a altura do jogador (m):"));

    // Atualização de estatísticas
    total_jogadores++;
    soma_idade += idade;
    soma_altura += altura;

    // Verificações condicionais (IFs simples)
    if (idade < 18) {
        qtd_menor18++;
    }

    if (peso > 80) {
        qtd_peso80++;
    }

    console.log("--- Jogador Registrado ---");
    
    // Leitura para a próxima iteração
    idade = parseInt(prompt("Digite a idade do próximo jogador (ou 0 para sair):"));
}

// Exibição dos resultados finais
if (total_jogadores > 0) {
    let media_idade = soma_idade / total_jogadores;
    let media_altura = soma_altura / total_jogadores;

    console.log("====== RESULTADOS FINAIS ======");
    console.log(`A. Jogadores menores de 18 anos: ${qtd_menor18}`);
    console.log(`B. Média de idade dos jogadores: ${media_idade.toFixed(1)} anos`);
    console.log(`C. Média de altura do campeonato: ${media_altura.toFixed(2)}m`);
    console.log(`D. Jogadores com mais de 80kg: ${qtd_peso80}`);
} else {
    console.log("Nenhum jogador foi cadastrado.");
}

