const sync = require('readline-sync');

var num1 = 0;
var num2 = 0;

num1 = sync.questionInt("Digite o primeiro numero:");
num2 = sync.questionInt("Digite o segundo numero:");

console.log("O resultado da multiplicação é de:", (num1 * num2));