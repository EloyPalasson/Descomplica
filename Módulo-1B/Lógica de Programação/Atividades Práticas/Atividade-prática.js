var array = ["Eu gosto de programar",1234576.0,1.34790," ","nome",0,"@#$%",-14.89];

for (let i = 0; i < array.length; i++) {
    
    if (typeof array[i] === 'string') {
        console.log("O tamanho da string é de",array[i].length,"caracteres.");
    } else if (typeof array[i] === 'number'){
        if (array[i] < 0) {
            console.log("O valor é negativo");
        } else if (array[i] == 0){
            console.log("O valor é 0");
        } else console.log("O valor é positivo");
    }
}

/////////////////////////////////////////////////////

var num1 = 8;
var num2 = 5;
var num3 = 7;
var soma = 0;
var media = 0.0;

soma = num1+num2+num3;
media = (num1+num2+num3) / 3;

console.log("A soma dos números foi de:",soma);
console.log("A média dos números é de:",media.toFixed(2));


////////////////////////////////////////////////////////

var nome = "Matheus";
var idade = 21;
var altura = 1.87;
var casado = false;

console.log("Tipo de Caracter:",nome);
console.log("Tipo de Inteiros:",idade);
console.log("Tipo de Real:",altura);
console.log("Tipo de Booleano:",casado);

////////////////////////////////////////////////////

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");
var num3 = prompt("Digite o terceiro número: ");
// Ache um jeito de calcular com o usuário digitando o valor no console
// Calcule a média
// Mostre a soma e a média no console.


///////////////////////////////////////////////////