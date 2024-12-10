var sync = require('readline-sync');

console.log("Bem vindo a escolha inicial de pokemon")
var escolha = 0;
do {
    console.log("Qual Pokemon você vai escolher?");
    console.log("Bulbassauro - 1 \nSquirtle - 2 \nCharmander - 3");
    escolha = sync.questionInt("\n");
    switch (escolha) {
        case 0:
            console.log("0 nem é número irmão...");
            break;
        case 1:
            console.log("Escolha errada... Bulbassauro mano?");
            break;
        case 2:
            console.log("Gosta de agua? vai pra praia!!!");
            break;
        case 3:
            console.log("Charmander é a escolha certa!!!!!!");
            break;
        default: 
            console.log("Só tem três pokemons irmão...");
            break;
    }
} while (escolha != 3);


