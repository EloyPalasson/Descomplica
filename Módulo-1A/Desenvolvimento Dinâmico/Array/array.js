
var numeros = [2,8,3,10,24,1];

console.log("Invertendo os valores de um array usando o método reverse:");
console.log("Array original", numeros);
console.log("Array invertido", numeros.reverse() + "\n");

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

////////////////////////////////////////

var nomes = ["Guilherme", "Manuel","Samuel","Davi","João"];
var indice = 0;

console.log("Testando os métodos adicionando mais um nome e retirando um nome no seguinte array: \n", nomes, "\n");

nomes.push("Mônica");

console.log("Adicionado mais um nome: \n", nomes, "\n");

nomes.pop();

console.log("Retirando o último elemento: \n", nomes, "\n");

nomes.splice(1,1,"Emanuel");

console.log("Alterando um nome: \n",nomes, "\n");

console.log("Buscando o indice de um nome com o indexOf:")
for (let i = 0; i < nomes.length; i++){
    indice = nomes.indexOf("Samuel");
}
console.log("O nome Samuel está no indice", indice, "no array \n");

////////////////////////////////////////

console.log("Dividindo um array com todos os meses em trimestes:")
var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var primeiroTrimestre = meses.slice(0,3);
var segundoTrimestre = meses.slice(3,6);
var terceiroTrimestre = meses.slice(6,9);
var quartoTrimestre = meses.slice(9);

console.log(primeiroTrimestre);
console.log(segundoTrimestre);
console.log(terceiroTrimestre);
console.log(quartoTrimestre, "\n");

////////////////////////////////////

var numeros = [1,2,3,4,5,6,7,8,9,10];
var divisíveis = numeros.filter(number => number % 2 == 0);

console.log("Usando o método filter para buscar valores dentro de um array. \n");
console.log("Apenas números divisíveis por dois: \n",divisíveis);

var maioresQueCinco = numeros.filter(
    function (valor) {
        return valor > 5;
    }
)
console.log("Apenas números maiores que cinco: \n",maioresQueCinco);

function menoresQueCinco(valor) {
    return valor < 5;
}
var numerosEncontrados = numeros.filter(menoresQueCinco);
console.log("Apenas números menores que cinco: \n",numerosEncontrados, "\n");

///////////////////////////////////

var funcionarios = [
    {nome: "Matheus", idade: 20},
    {nome: "Raphael", idade: 40},
    {nome: "Gabriel", idade: 60},
    {nome: "Juliano", idade: 80},
]
console.log("Lista de funcionários e suas respectivas idades:")
var listarFuncionarios = funcionarios.filter(valor => 
    console.log("O funcionário",valor.nome, "tem", valor.idade, "anos."));

var maioresQueCinquenta = funcionarios.filter(valor => valor.idade > 50);
console.log("Os funcionários com mais de 50 anos são:", maioresQueCinquenta, "\n");

//////////////////////////////////

var produtos = [
    {id: 1, descricao: "Celular", categoria: "Eletronico"},
    {id: 2, descricao: "Notebook", categoria: "Eletronico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"}
]

var eletronicos = [produtos.filter(valor => valor.categoria == "Eletronico")];
console.log("Filtrando os produtos do array com a categoria eletrônico:\n",eletronicos, "\n");

/////////////////////////////////

var numeros = [3,4,5,6];
var multiplicacao = numeros.map(valor => valor * 3)
console.log("Utilizando o método map para multiplicar cada item de um array:\n",numeros,"\n",multiplicacao,"\n");

/////////////////////////////////

var funcionarios = [
    {nome: "Matheus", idade: 20, funcao: "Progrmador"},
    {nome: "Raphael", idade: 40, funcao: "Gerente"},
    {nome: "Gabriel", idade: 60, funcao: "Diretor"},
    {nome: "Juliano", idade: 80, funcao: "Analista"},
]
var pessoas = funcionarios.map(element => element.nome + " " + element.idade + " " + element.funcao);
console.log("Usando map para trazer os dados dos funcionários:\n",pessoas);




