/*
    Módulo 01 - Exercícios 01

    Instruções:
    Todos os exercícios foram colocados dentro de uma estrutura de repetição do/while combinada com uma de condição switch. Para utilizar é só executar todo o algorítmo (é necessário o prompt-sync), escolher o número do exercício (igual ao da atividade) e quando quiser sair, digitar qualquer valor diferente de 1 a 15. E lembre-se, aqui os números de ponto flutuante devem ser escritos com "." e não ",".
*/

const prompt = require('prompt-sync')();

let opcao = 0;

do {
    opcao = parseFloat(prompt(`Digite o número do exercício (1 a 15) ou qualquer valor diferente disso para sair${opcao > 0 ? " (sua última opção digitada foi a " + opcao + ")" : ""}: `));

    console.log();

    switch (opcao) {
        case 0:
            break;

        case 1:
            console.log("Par ou Ímpar");

            let parImpar = parseInt(prompt("Digite um valor inteiro para saber se é par ou ímpar: "));
            console.log();

            if (!(isNaN(parImpar)) && parImpar >= 0) {
                if (parImpar % 2 === 0) {
                    console.log(`${parImpar} é um valor PAR!`);
                } else {
                    console.log(`${parImpar} é um valor ÍMPAR!`);
                }
            } else {
                console.log("Você digitou um valor inválido!")
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 2:
            console.log("Pessoas");

            let idade = parseInt(prompt("Digite a idade (em anos): "));
            console.log();

            if (!(isNaN(idade))) {
                if (idade <= 12) {
                    console.log("Criança");
                } else if (idade >= 13 && idade <= 17) {
                    console.log("Adolescente");
                } else if (idade >= 18 && idade <= 64) {
                    console.log("Adulto(a)");
                } else if (idade >= 65) {
                    console.log("Idoso(a)");
                }
            } else {
                console.log("Você digitou um valor inválido!")
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 3:
            console.log("Aprovado, Recuperação, Reprovado");

            let ar_nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));
            console.log();

            if (!(isNaN(ar_nota)) && ar_nota >= 0 && ar_nota <= 10) {

                if (ar_nota >= 5) {
                    console.log(`Sua nota foi ${ar_nota}. PARABÉNS! Você foi aprovado!`);
                } else if (ar_nota < 5 && ar_nota > 2) {
                    console.log(`Sua nota foi ${ar_nota}. PREPARE-SE! Você ficou de recuperação!`);
                } else {
                    console.log(`Sua nota foi ${ar_nota}. #@$%! Você foi REPROVADO! Estude mais!`);
                }
            } else {
                console.log("Você digitou algum valor inválido!")
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 4:
            console.log("3 Opções");

            console.log("Escolha uma opção:");
            console.log("Opção 1 (a mais segura!)");
            console.log("Opção 2 (por sua conta e risco!)");
            console.log("Opção 3 (só se você for maluco!)");
            console.log();

            let opcoes3 = parseInt(prompt("Digite sua opção: "));

            if (!(isNaN(opcoes3))) {
                switch (opcoes3) {
                    case 1:
                        console.log("Vocë encontrou um gatinho!");
                        break;

                    case 2:
                        console.log("Vocë encontrou um mini pinscher raivoso!");
                        break;

                    case 3:
                        console.log("Vocë encontrou o Jair Bolsonaro!");
                        break;

                    default:
                        console.log("O valor digitado não é válido!");
                }
            } else {
                console.log("O valor digitado não é válido!");
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 5:
            console.log("IMC");

            let imc_peso = parseFloat(prompt("Digite seu peso (em quilos): "));
            let imc_altura = parseFloat(prompt("Digite sua altura (em metros): "));
            console.log();

            if (!(isNaN(imc_peso) && isNaN(imc_altura)) && imc_altura > 0) {
                let imc = imc_peso / (Math.pow(imc_altura, 2));
                if (imc < 18.5) {
                    console.log(`Seu IMC é ${imc} e você está abaixo do peso!`);
                } else if (imc > 18.5 && imc < 25) {
                    console.log(`Seu IMC é ${imc} e você está com o peso adequado!`)
                } else if (imc > 25 && imc < 30) {
                    console.log(`Seu IMC é ${imc} e você está com sobrepeso!`)
                } else if (imc > 30 && imc < 35) {
                    console.log(`Seu IMC é ${imc} e você está com obesidade grau 1!`)
                } else if (imc > 35 && imc < 40) {
                    console.log(`Seu IMC é ${imc} e você está com obesidade grau 2!`)
                } else {
                    console.log(`Seu IMC é ${imc} e você está com obesidade extrema!`)
                }
            } else {
                console.log("Algum valor digitado não é válido!");
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 6:
            console.log("Triângulo");

            let a = parseFloat(prompt("Digite o lado A: "));
            let b = parseFloat(prompt("Digite o lado B: "));
            let c = parseFloat(prompt("Digite o lado C: "));
            console.log();

            if (!(isNaN(a) || isNaN(b) || isNaN(c))) {
                if (a < (b + c) && b < (a + c) && c < (a + b)) {
                    if (a == b || a == c || b == c) {
                        console.log("Triângulo Isóceles");
                    } else if (a != b && a != c && b != c) {
                        console.log("Triângulo Escaleno");
                    } else if (a == b && b == c) {
                        console.log("Triângulo Equilátero");
                    }
                } else {
                    console.log("Os valores informados não formam um triângulo!");
                }
            } else {
                console.log("Você digitou algum valor inválido!")
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 7:
            console.log("Maçãs");

            let macas = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
            console.log();

            if (!isNaN(macas)) {
                if (macas < 12) {
                    console.log(`${macas} custam R$ ${macas * 0.3}.`);
                } else {
                    console.log(`${macas} custam R$ ${macas * 0.25}.`);
                }
            } else {
                console.log("O valor digitado não é válido!");
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 8:
            console.log("Ordem crescente");

            let c_val1 = parseFloat(prompt("Digite o primeiro valor: "));
            let c_val2 = parseFloat(prompt("Digite o segundo valor: "));
            console.log();

            if (!(isNaN(c_val1) || isNaN(c_val2))) {
                if (c_val1 < c_val2) {
                    console.log(`${c_val1}, ${c_val2}.`);
                } else if (c_val2 < c_val1) {
                    console.log(`${c_val2}, ${c_val1}.`);
                } else {
                    console.log("Os valores são iguais e não podem ser colocados em ordem crescente!");
                }
            } else {
                console.log("Você digitou algum valor inválido!")
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 9:
            console.log("Contagem Regressiva");
            console.log();

            for (i = 10; i > 0; i--) {
                console.log(i);
            }
            console.log("KABUM!!!")

            console.log();
            console.log("Fim do programa!");
            break;

        case 10:
            console.log("Escrever 10 vezes");

            let dez_vezes = parseInt(prompt("Digite um número inteiro qualquer: "));
            console.log();

            if (!isNaN(dez_vezes)) {
                for (let i = 1; i <= 10; i++) {
                    console.log(`${i} - ${dez_vezes}.`);
                }
            } else {
                console.log("O valor digitado não é válido!");
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 11:
            console.log("Soma 5 números");

            let total = 0;

            for (i = 1; i <= 5; i++) {
                let numero = parseFloat(prompt(`Digite o ${i}º número: `));
                if (!(isNaN(numero))) {
                    total += numero;
                } else {
                    console.log("O valor deve ser um número, tente novamente!");
                    i--;
                }
            }
            console.log();
            console.log("O total é ", total);

            console.log();
            console.log("Fim do programa!");
            break;

        case 12:
            console.log("Tabuada");

            let tabuada = parseInt(prompt("Digite um número inteiro: "));
            console.log();

            if ((!isNaN(tabuada)) && tabuada > 0) {
                for (let i = 1; i <= 10; i++) {
                    console.log(`${i} x ${tabuada} = ${i * tabuada}`);
                }
            } else {
                console.log(`O número não é válido!`);
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 13:
            console.log("Média aritmética - Digite 0 (zero) para terminar.");

            let ma_numero;
            let ma_soma = 0;
            let ma_divisor = 0;

            while (ma_numero !== 0) {
                ma_numero = parseFloat(prompt("Digite um número: "));
                if ((!isNaN(ma_numero)) && ma_numero !== 0) {
                    ma_soma += ma_numero;
                    ma_divisor++;
                }
            }
            if (ma_divisor > 0) {
                console.log();
                console.log(`A média aritmética apenas dos valores numéricos digitados (${ma_divisor}) é ${ma_soma / ma_divisor}.`);
            }

            console.log();
            console.log("Fim do programa!");
            break;

        case 14:
            console.log("Fatorial");

            let numFatorial = parseInt(prompt("Digite um número inteiro: "));
            console.log();
            let fatorial = 1;

            for (i = numFatorial; i >= 1; i--) {
                fatorial *= i
            }

            console.log(`O valor de ${numFatorial}! é ${fatorial}.`)

            console.log();
            console.log("Fim do programa!");
            break;

        case 15:
            console.log("Fibonacci");
            console.log();

            let fibonacci = 1;
            let fibonacciAtual = 1;
            let fibonacciAnterior = 0;

            for (i = 0; i < 10; i++) {
                console.log(fibonacci);
                fibonacci = fibonacciAnterior + fibonacciAtual;
                fibonacciAnterior = fibonacciAtual;
                fibonacciAtual = fibonacci;
            }

            console.log();
            console.log("Fim do programa!");
            break;

        default:
            console.log("O valor escolhido não faz parte da lista de exercícios!");
    }

    console.log();

} while (!(isNaN(opcao)) && opcao > 0 && opcao < 16);

console.log("Fim da Atividade!");