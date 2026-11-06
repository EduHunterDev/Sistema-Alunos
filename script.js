const readline = require("readline-sync");

const alunos = [];
let executando = true;

while (executando) {
    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    const opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1": {
            console.log("\n--- CADASTRO DE ALUNO ---");

            const nome = readline.question("Nome: ").trim();
            const idade = Number(readline.question("Idade: "));
            const nota = Number(readline.question("Nota: "));

            if (!nome) {
                console.log("Nome invalido. Informe o nome do aluno.");
                break;
            }

            if (!Number.isInteger(idade) || idade <= 0) {
                console.log("Idade invalida. Informe uma idade inteira maior que zero.");
                break;
            }

            if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
                console.log("Nota invalida. Insira uma nota entre 0 e 10.");
                break;
            }

            const aluno = { nome, idade, nota };
            alunos.push(aluno);
            console.log("\nAluno cadastrado com sucesso!");
            break;
        }

        case "2":
            console.log("\n--- ALUNOS CADASTRADOS ---");

            if (alunos.length === 0) {
                console.log("Não existem alunos cadastrados.");
                break;
            }

            for (let i = 0; i < alunos.length; i++) {
                console.log("==============================");
                console.log(`ID: ${i + 1}`);
                console.log(`Nome: ${alunos[i].nome}`);
                console.log(`Idade: ${alunos[i].idade}`);
                console.log(`Nota: ${alunos[i].nota}`);
            }
            console.log("==============================");
            break;

        case "3": {
            console.log("\n--- CONSULTAR ALUNO ---");

            const nomeBusca = readline.question("Digite o nome: ").trim().toLowerCase();
            const alunoEncontrado = alunos.find(
                (aluno) => aluno.nome.toLowerCase() === nomeBusca
            );

            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
                break;
            }

            console.log(`Nome: ${alunoEncontrado.nome}`);
            console.log(`Idade: ${alunoEncontrado.idade}`);
            console.log(`Nota: ${alunoEncontrado.nota}`);
            console.log("Aluno encontrado!");
            break;
        }

        case "4":
            console.log("\n--- SITUACAO DOS ALUNOS ---");

            if (alunos.length === 0) {
                console.log("Nao existem alunos cadastrados.");
                break;
            }

            for (const aluno of alunos) {
                let situacao;

                if (aluno.nota >= 7) {
                    situacao = "Aprovado";
                } else if (aluno.nota >= 5) {
                    situacao = "Recuperacao";
                } else {
                    situacao = "Reprovado";
                }

                console.log(`${aluno.nome} - Nota: ${aluno.nota} - Situacao: ${situacao}`);
                console.log("==============================");
            }
            break;

        case "5":
            console.log("\nSistema encerrado!");
            executando = false;
            break;

        default:
            console.log("\nOpcao invalida!");
            break;
    }
}
