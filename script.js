const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = [];

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

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = Number(readline.question("Nota: "));

            // TODO:
            // Verificar se a nota está entre 0 e 10
            if (nota >= 0 && nota <= 10){
            // TODO:
            // Criar um objeto aluno
             let Aluno {
                Nome: nome,
                idade: idade,
                nota: nota
             };
            // TODO:
            // Adicionar o aluno ao array
            alunos.push(aluno);
            console.log("\n Aluno Cadastrado com Sucesso!");
            } else {("Nota Invalida! \n Insira uma nota de 0 à 10")
            }

            break;


        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

            // TODO:
            // Verificar se existem alunos cadastrados
            if (alunos.length === 0){

            for (let i = 0; i < alunos.length; i++){
            console.log("==============");
            console.log("Id " + (i + 1));
            console.log("Nome:" + alunos[i].nome);
            console.log("idade:" + alunos[i].idade);
            console.log("nota:" + alunos[i].nota);
            Console.log("==============");
            }

            }else ("\n Não existem Alunos Cadastrados!"){

            }
            // TODO:
            // Percorrer o array utilizando FOR

            // Mostrar:
            // Nome
            // Idade
            // Nota


            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ").toLowerCase();

            let alunoEncontrado = false;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.
            // Se encontrar:
            // - Mostrar os dados
            for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome.toLowerCase() === nomeBusca) {
                Console.log("Nome: " + alunos[i].nome);
                Console.log("Idade: " + alunos[i].idade);
                Console.log("Nota: " + alunos[i].nota);

            // - Alterar alunoEncontrado para true
                alunoEncontrado = true;
                Console.log("Aluno encontrado!");

                // - Utilizar BREAK
                break;
            
            
                
                }
            }


            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");

            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            // TODO:
            // Percorrer todos os alunos

            // Se nota >= 7
            //    Aprovado
            //
            // Senão se nota >= 5
            //    Recuperacao
            //
            // Senão
            //    Reprovado
            for (let i = 0; i < alunos.length; i++)
            if (alunos.length !== 0) {
                let situacao;
                console.log("\n Nao existem alunos cadastrados.");
            } else {
                 {
                
                    if (alunos[i].nota >= 7) {
                        situacao = "Aprovado";
                    } else if (alunos[i].nota >= 5) {
                        situacao = "Recuperacao";
                    } else {
                        situacao = "Reprovado";
                    }
                    console.log(alunos[i].nome + " -  Nota: " + alunos[i].nota + " - Situacao: " + situacao);
                    console.log("==============");
                
                }
            }

            break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
