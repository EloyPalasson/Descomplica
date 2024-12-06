//Exercício A
const sync = require('readline-sync');

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var num9 = 0;
var num10 = 0;

console.log("Inicío da entrada de dados:");
num1 = sync.questionInt("Digite o primeiro numero:") * 2;
num2 = sync.questionInt("Digite o segundo numero:") * 2;
num3 = sync.questionInt("Digite o terceiro numero:") * 2;
num4 = sync.questionInt("Digite o quarto numero:") * 2;
num5 = sync.questionInt("Digite o quinto numero:") * 2;
num6 = sync.questionInt("Digite o sexto numero:") * 2;
num7 = sync.questionInt("Digite o setimo numero:") * 2;
num8 = sync.questionInt("Digite o oitavo numero:") * 2;
num9 = sync.questionInt("Digite o nono numero:") * 2;
num10 = sync.questionInt("Digite o decimo numero:") * 2;
console.log("Fim da entrada de dados");
console.log("Resultado dos números multiplicados:");
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);

////////////////////////////////////////////////////////////////

//Exercício B
const sync = require('readline-sync');

var num = 0;

console.log("Inicío da entrada de dados:");
for (let i = 1; i <= 10; i++) {
    num = sync.questionInt("Digite um numero:") * 2;
    console.log(num);
}

////////////////////////////////////////////////////////////////

const sync = require('readline-sync');

var num1 = 0;
var num2 = 0;

num1 = sync.questionInt("Digite o primeiro numero:");
num2 = sync.questionInt("Digite o segundo numero:");

console.log("O resultado da multiplicação é de:", (num1 * num2));