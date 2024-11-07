
var numeros = [2,8,3,10,24,1];

console.log("Invertendo os valores de um array usando o método reverse:");
console.log("Array original", numeros);
console.log("Array invertido", numeros.reverse());

/////////////////////////////////////////

var total = 0;

for (var i = 0; i < numeros.length; i++){
    total += numeros[i];
}
console.log("A média do array é:", (total / numeros.length).toFixed(2));

////////////////////////////////////////

var maxNumber = 0;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maxNumber) {
        maxNumber = numeros[i];
    }
}
console.log("O maior número é:", maxNumber + "\n");

///////////////////////////////////////

var estados = ["Fortaleza","São Paulo","Rio de Janeiro",
    "Bahia","Tocantins","Paraná","Santa Catarina"];
var maiorEstado = estados[0];

for (let i = 1; i < estados.length; i++){
    if (estados[i].length > maiorEstado.length) {
        maiorEstado = estados[i];
    }
}
console.log("Buscando o Estado com o maior nome dentro de um array:");
console.log("O Estado com o maior nome é", maiorEstado 
    + " com o tamanho de", maiorEstado.length + " caracteres" + "\n");

////////////////////////////////////////

var numeros = [-5,10,-3,12,-7,89,-36,1,-19,6];
var numerosPositivos = new Array

for (let i = 0; i < numeros.length;i++){
    if (numeros[i] > 0) {
        numerosPositivos.push(numeros[i]);
    } 
}
console.log("Extraindo números positivos para outro array:");
console.log("Array com todos os números", numeros);
console.log("Array somente números positivos", numerosPositivos  + "\n");


