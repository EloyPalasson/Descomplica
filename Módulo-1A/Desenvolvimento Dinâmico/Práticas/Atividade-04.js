var sync = require('readline-sync');

console.log("Seja bem vindo, escolha a bebida que você deseja!");
console.log("Temos: Cafe, Chocolate, Cha e Leite");
var bebida = sync.question("Qual bebida vc vai levar? \n");

var valor = 0;

switch (bebida) {
    case "Cafe":
        valor = 45.50;
        console.log(`Você escolheu ${bebida} e o valor a ser pago ficou em ${valor.toFixed(2)}`);
        break;
    case "Cha":
        valor = 8;
        console.log(`Você escolheu ${bebida} e o valor a ser pago ficou em ${valor.toFixed(2)}`);
        break;
    case "Leite":
        valor = 3.50;
        console.log(`Você escolheu ${bebida} e o valor a ser pago ficou em ${valor.toFixed(2)}`);
        break;
    case "Chocolate":
        valor = 2.00;
        console.log(`Você escolheu ${bebida} e o valor a ser pago ficou em ${valor.toFixed(2)}`);
        break;
    default:
        console.log("A escolha de bebida, devem ser feitas entre Cha, Chocolate, Leite e Cafa")
        break;
}
