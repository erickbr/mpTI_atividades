/*
    Módulo 01 - Exercícios 02

    Instruções:
    Bem-vindo ao meu algorítmo com a resolução da Atividade 02 do Módulo 01 do curso Dev Full Stack da +praTI. Para cada exercício foi atribuída uma função com o valor correspondente à Atividade. O algoritmo é controlado por uma função principal, encarregada de executar as demais funções e que conta com uma estrutura de repetição do/while, que continuará executando os exercícios, sempre informando qual foi o último executado, até ser digitado um valor de saída. Para utilizar é só executar todo o algorítmo (é necessário o prompt-sync), escolher o número do exercício e quando desejar encerrar, basta digitar qualquer valor diferente de 1 a 15.
*/

const prompt = require('prompt-sync')();

// função principal encarregada de executar o programa
function startsExercise() {
    let opcao = 0;
    do {
        console.log();
        opcao = parseFloat(prompt(`Digite o número do exercício (1 a 15) ou qualquer valor diferente disso para sair${opcao > 0 ? " (sua última opção digitada foi a " + opcao + ")" : ""}: `));
        console.log();

        if (opcao > 0 && opcao < 16 && Number.isInteger(opcao)) {
            let funcao = `(exercise${opcao}())`;
            eval(funcao);
        } else {
            return console.log("--> Fim da Atividade");
        }
    } while (!(isNaN(opcao)) && opcao > 0 && opcao < 16);
} // fim função principal

// exercise1
const exercise1 = function () {
    console.log("1. Acessando Propriedades de Objetos");
    console.log("Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.");
    console.log();

    let carro = {
        marca: "Ford",
        modelo: "Ká",
        ano: 2024,
        cor: "Cinza Metálico"
    };

    for (let chave in carro) {
        console.log(`${chave}: ${carro[chave]}`);
    }

    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise1

// exercise2
const exercise2 = function () {
    console.log("2. Verificando Propriedades");
    console.log("Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.");
    console.log();

    let livro = {
        titulo: "O livro da Bruxa",
        autor: "Roberto Lopes",
        anoPublicacao: 2007,
        genero: "Ficção"
    }

    let controle = 0;
    for (chave in livro) {
        console.log(chave);
    }

    console.log();
    console.log('Não existe a propriedade "editora"');
    console.log();

    for (let chave in livro) {
        if (chave == "editora") {
            controle = 1;
        }
    }

    console.log('Incluindo "editora"...');
    if (controle == 0) {
        livro.editora = "Arx";
    }

    console.log();
    console.log('Criada a propriedade "editora"');
    console.log();

    for (let chave in livro) {
        console.log(`${chave}: ${livro[chave]}`);
    }

    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise2

// exercise3
const exercise3 = function () {
    console.log("3. Filtrando Propriedades de Objetos");
    console.log("Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.");
    console.log();

    let produto = {
        nome: "Colchão Original Classic Casal",
        marca: "Emma",
        modelo: "King",
        pesoKg: 43,
        larguraCm: 193,
        comprimentoCm: 203,
        alturaCm: 18,
        preco: 4499,
        quantidade: 10
    }

    let valor = parseFloat(prompt("Digite um valor específico: "));
    console.log();
    let novoProduto = {};

    if (!(isNaN(valor))) {
        for (let chave in produto) {
            if (produto[chave] > valor) {
                novoProduto[chave] = produto[chave];
            } else {
                console.log(`Propriedade ${chave} com o valor ${produto[chave]} não adicionada ao novo Produto.`)
            }
        }
        console.log();
    } else {
        console.log("Valor inválido!");
    }

    for (let chave in novoProduto) {
        console.log(`${chave}: ${produto[chave]}`);
    }

    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise3

// exercise4
const exercise4 = function () {
    console.log("4. Iterando Sobre Arrays de Objetos");
    console.log("Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.");
    console.log();

    let pessoas = [
        {
            nome: "Pessoa1",
            idade: 15,
            cidade: "Brasília"
        },
        {
            nome: "Pessoa2",
            idade: 30,
            cidade: "São Paulo"
        },
        {
            nome: "Pessoa3",
            idade: 45,
            cidade: "Porto Alegre"
        }
    ];

    let i = 0;
    for (let value of pessoas) {
        console.log(`Índice ${i}:`)
        for (let key of Object.keys(value)) {
            console.log(`- ${key}: ${value[key]}`);
        }
        i++;
        console.log();
    }

    return console.log("--> Fim do Exercício");
} // fim exercise4

// exercise5
const exercise5 = function () {
    console.log("5. Calculando Valores em Arrays de Objetos");
    console.log("Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.");
    console.log();

    let alunos = Array(
        {
            nome: "Aluno1",
            nota1: 8,
            nota2: 7
        },
        {
            nome: "Aluno2",
            nota1: 5,
            nota2: 9
        },
        {
            nome: "Aluno1",
            nota1: 3,
            nota2: 6
        }
    );

    let i = 0;
    for (let aluno of alunos) {
        console.log(`Índice ${i}:`);
        let notas = 0;
        let nomeAluno = "";
        for (let chave of Object.keys(aluno)) {
            if (chave == "nome") {
                nomeAluno = aluno[chave];
            } else {
                notas += aluno[chave];
            }
        }
        console.log(`${nomeAluno}, média ${notas / 2}`);
        console.log();
        i++;
    }

    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise5

// início exercise6
const exercise6 = function() {
    console.log("6. Filtrando Arrays de Objetos");
    console.log("Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.");
    console.log();
    
    let funcionarios = [
        {
            nome: "Nome1",
            cargo: "Vendedor",
            salario: 2000
        },
        {
            nome: "Nome2",
            cargo: "Gerente de Vendas",
            salario: 8000
        },
        {
            nome: "Nome3",
            cargo: "Gerente Geral",
            salario: 22000
        }
    ];

    let valor = parseFloat(prompt("Digite um valor específico: "));
    console.log();

    if (!(isNaN(valor))) {
        for (let funcionario of funcionarios) {
            for(let chave of Object.keys(funcionario)) {
                if(chave == "salario" && funcionario[chave] > valor) {
                    for(let chave2 of Object.keys(funcionario)) {
                        console.log(`${chave2}: ${funcionario[chave2]}`);
                    }
                    console.log();
                }
            }
        }
    } else {
        console.log("Valor inválido!");
        console.log();
    }

    return console.log("--> Fim do Exercício");
} // fim exercise6

// exercise7
const exercise7 = function() {
    console.log("7. Modificando Objetos em um Array");
    console.log("Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.");
    console.log();

    let produtos = [
        {
            nome: "Produto1",
            preco: 1000,
            desconto: 0.10
        },
        {
            nome: "Produto2",
            preco: 500,
            desconto: 0.10
        },
        {
            nome: "Produto3",
            preco: 100,
            desconto: 0.10
        }
    ];

    produtos.forEach((produto, i) => {
        produtos[i].preco -= produto.preco * produto.desconto

        Object.keys(produto).forEach(chave => {
            console.log(`${chave}: ${produto[chave]}`);
        })
        console.log();
    });

    return console.log("--> Fim do Exercício");
} // fim exercise7

// exercise8
const exercise8 = function() {
    console.log("8. Criando Novos Arrays a Partir de Objetos");
    console.log("Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.");
    console.log();

    let filmes = [
        {
            titulo: "Filme1",
            direto: "Nome diretor filme1",
            anoLancamento: 2021
        },
        {
            titulo: "Filme2",
            direto: "Nome diretor filme2",
            anoLancamento: 2022
        },
        {
            titulo: "Filme3",
            direto: "Nome diretor filme3",
            anoLancamento: 2023
        }
    ];

    let filmesTitulos = [];

    let i = 0;
    filmes.forEach(filme => {
        filmesTitulos[i] = filme.titulo;
        i++;
    });
    console.log(filmesTitulos);

    console.log();
    return console.log("--> Fim do Exercício");
}// fim exercise8

// exercise9
const exercise9 = function() {
    console.log("9. Contabilizando Elementos com uma Condição");
    console.log("Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.");
    console.log();

    let clientes = Array(
        {
            nome: "Cliente1",
            idade: 21,
            cidade: "São Luis"
        },
        {
            nome: "Cliente2",
            idade: 31,
            cidade: "Salvador"
        },
        {
            nome: "Cliente3",
            idade: 41,
            cidade: "Terezina"
        }
    );

    let contagem = 0;

    clientes.forEach(cliente => {
        Object.keys(cliente).forEach(chave => {
            if (chave == "idade" && cliente[chave] > 30) {
                contagem++;
            }
        });
    });
    console.log(`${contagem} clientes tem mais de 30 anos.`)
    
    console.log();
    return console.log("--> Fim do Exercício");
}// fim exercise9

// exercise10
const exercise10 = function() {
    console.log("10. Criando Relatórios com Objetos e Arrays");
    console.log("Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.");
    console.log();

    let vendas = [
        {
            produto: "Produto1",
            quantidade: 20,
            valor: 100
        },
        {
            produto: "Produto2",
            quantidade: 10,
            valor: 1000
        },
        {
            produto: "Produto3",
            quantidade: 30,
            valor: 10
        }
    ];

    vendas.forEach(venda => {
        let totalTemp = 0;
        Object.keys(venda).forEach(chave => {
            if (chave == "produto") {
                console.log(`O valor total de vendas para o produto ${venda[chave]} é:`);
            } else if (chave == "quantidade") {
                totalTemp = venda[chave];
            } else {
                totalTemp *= venda[chave];
            }
        });
        console.log(`R$ ${totalTemp}.`);
    });

    console.log();
    return console.log("--> Fim do Exercício");
}// fim exercise10

// exercise11
const exercise11 = function () {
    console.log("11. Agrupando Elementos com forEach");
    console.log("Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.");
    console.log();

    let pedidos = [
        {
            cliente: "Cliente1",
            produto: "Produto1",
            quantidade: 10
        },
        {
            cliente: "Cliente1",
            produto: "Produto2",
            quantidade: 10
        },
        {
            cliente: "Cliente2",
            produto: "Produto1",
            quantidade: 10
        }
    ];

    let totalProCli = {};

    pedidos.forEach(pedido => {
        if (totalProCli[pedido.cliente]) {
            totalProCli[pedido.cliente] += pedido.quantidade;
        } else {
            totalProCli[pedido.cliente] = pedido.quantidade;
        }
    });
    console.log(totalProCli);

    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise11

// exercise12
const exercise12 = function() {
    console.log("12. Atualizando um Array de Objetos");
    console.log("Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.");
    console.log();

    let estoque = [
        {
            produto: "Produto1",
            quantidade: 5,
            minimo: 10
        },
        {
            produto: "Produto2",
            quantidade: 50,
            minimo: 10
        },
        {
            produto: "Produto3",
            quantidade: 9,
            minimo: 10
        }
    ];

    estoque.forEach(produto => {
        if (produto.quantidade < produto.minimo) {
            produto.quantidade *= 2;
        }
    });
    console.log(estoque);
    
    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise12

// exercise13
const exercise13 = function() {
    console.log("13. Implementando um Carrinho de Compras");
    console.log("Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.");
    console.log();

    let carrinho = {
        itens: [
            {
                nome: "Produto1",
                quantidade: 1,
                precoUnitario: 100
            },
            {
                nome: "Produto2",
                quantidade: 1,
                precoUnitario: 50
            },
            {
                nome: "Produto3",
                quantidade: 2,
                precoUnitario: 175
            }
        ]
    };

    Object.values(carrinho).forEach(valor => {
        let total = 0;
        valor.forEach(item => {
            total += item.quantidade * item.precoUnitario;
        });
        console.log(total);
    });
    
    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise13

// exercise14
const exercise14 = function() {
    console.log("14. Manipulando Objetos Complexos");
    console.log("Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.");
    console.log();

    let empresa = {
        departamentos: [
            {
                nome: "Depto1",
                funcionarios: ["Funcionário1", "Funcionário2", "Funcionário3", "Funcionário4", "Funcionário5"]
            },
            {
                nome: "Depto2",
                funcionarios: ["Funcionário6", "Funcionário7", "Funcionário8"]
            },
            {
                nome: "Depto3",
                funcionarios: ["Funcionário9", "Funcionário10"]
            }
        ]
    };

    for (let departamentos in empresa) {
        for (let departamento of empresa[departamentos]) {
            for (let nome in departamento) {
                if (!Array.isArray(departamento[nome])) {
                    console.log(departamento[nome]);
                } else {
                    for (let funcionarios of departamento[nome]) {
                        console.log(funcionarios);
                    }
                    console.log();
                }
            }
        }
    }
    
    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise14

// exercise15
const exercise15 = function() {
    console.log("15. Filtrando e Somando Valores");
    console.log("Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.");
    console.log();

    let transacoes = [
        {
            tipo: "entrada",
            valor: 100
        },
        {
            tipo: "saída",
            valor: 50
        },
        {
            tipo: "saída",
            valor: 20
        },
        {
            tipo: "entrada",
            valor: 100
        },
        {
            tipo: "daída",
            valor: 80
        }
    ];

    let saldoFinal = 0;

    transacoes.forEach(transacao => {
        if (transacao.tipo == "entrada") {
            saldoFinal += transacao.valor;
        } else {
            saldoFinal -= transacao.valor;
        }
    });
    console.log(saldoFinal);
    
    console.log();
    return console.log("--> Fim do Exercício");
} // fim exercise15

//inicia a função principal
startsExercise();