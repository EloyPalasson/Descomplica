const sync = require('readline-sync');

console.log("Seja bem vindo ao processo seletivo da empresa TESTE");
var nome = sync.question("Nos informe seu nome: ");
var idade = sync.questionInt("Nos informe sua idade: ");
var experiencia = sync.questionInt("Nos informe seus anos de experiência: ");
var educacao = sync.question("Qual seu nível de educação? ");
var certificado = sync.question("Você possui certificado? Responda com SIM ou NÃO. ");

if (idade >= 18 && experiencia >= 2 && educacao === "superior" && certificado === "SIM") {
    console.log("Parabéns",nome,"você foi aprovado nessa fase do processo");
} else {
    console.log("Sinto muito",nome,"você não atende com os requisitos mínimos pra vaga");
    console.log("Muito obrigado por participar lhe desejamos muita sorte!");
}
