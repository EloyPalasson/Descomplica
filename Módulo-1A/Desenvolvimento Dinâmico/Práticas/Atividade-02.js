const numeros = [12, 5, 2, 55, 10, 34, 23];
var axPar = 0;
var axImpar = 0;
var ax3e5 = [];

for (let i = 0; i < numeros.length; i++) {
    if (!numeros[i] <= 0) {
        if (numeros[i] % 2 == 0) {
            axPar++;
        } else {
            axImpar++
        }
    }
    if (numeros[i] % 3 == 0 || numeros[i] % 5 == 0) {
        ax3e5.push(numeros[i]);
    }
}
console.log("Nesse array temos", axPar, "números pares");
console.log("Nesse array temos", axImpar, "números impares");
console.log("Os números divisíveis por 3 e por 5 são:", ax3e5);