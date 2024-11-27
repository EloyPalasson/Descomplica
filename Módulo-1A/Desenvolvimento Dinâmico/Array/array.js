
var numeros = [2, 8, 3, 10, 24, 1];

console.log("Invertendo os valores de um array usando o método reverse:");
console.log("Array original", numeros);
console.log("Array invertido", numeros.reverse() + "\n");

/////////////////////////////////////////

var array = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90];
let imparOuMenorQueZero = false;
let divisiveis3Ou5 = true;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0 || array[i] < 0) {
        imparOuMenorQueZero = true;
        break;
    }
}

for (let j = 0; j < array.length; j++) {
    if (array[j] % 3 != 0 || array[j] % 5 != 0) {
        divisiveis3Ou5 = false;
        break;
    }
}
console.log("Pelo menos um número não é par ou menor que zero?",imparOuMenorQueZero);
console.log("Todos os números são divisíveis por 3 e 5?",divisiveis3Ou5);

/////////////////////////////////////////

var total = 0;

for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
}
console.log("A média do array é:", (total / numeros.length).toFixed(2));

////////////////////////////////////////

var maxNumber = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maxNumber) {
        maxNumber = numeros[i];
    }
}
console.log("O maior número é:", maxNumber + "\n");

///////////////////////////////////////

var estados = ["Fortaleza", "São Paulo", "Rio de Janeiro",
    "Bahia", "Tocantins", "Paraná", "Santa Catarina"];
var maiorEstado = estados[0];

for (let i = 1; i < estados.length; i++) {
    if (estados[i].length > maiorEstado.length) {
        maiorEstado = estados[i];
    }
}
console.log("Buscando o Estado com o maior nome dentro de um array:");
console.log("O Estado com o maior nome é", maiorEstado
    + " com o tamanho de", maiorEstado.length + " caracteres" + "\n");

////////////////////////////////////////

var numeros = [-5, 10, -3, 12, -7, 89, -36, 1, -19, 6];
var numerosPositivos = new Array

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        numerosPositivos.push(numeros[i]);
    }
}
console.log("Extraindo números positivos para outro array:");
console.log("Array com todos os números", numeros);
console.log("Array somente números positivos", numerosPositivos + "\n");

////////////////////////////////////////

var nomes = ["Guilherme", "Manuel", "Samuel", "Davi", "João"];
var indice = 0;

console.log("Testando os métodos adicionando mais um nome e retirando um nome no seguinte array: \n", nomes, "\n");

nomes.push("Mônica");

console.log("Adicionado mais um nome: \n", nomes, "\n");

nomes.pop();

console.log("Retirando o último elemento: \n", nomes, "\n");

nomes.splice(1, 1, "Emanuel");

console.log("Alterando um nome: \n", nomes, "\n");

console.log("Buscando o indice de um nome com o indexOf:")
for (let i = 0; i < nomes.length; i++) {
    indice = nomes.indexOf("Samuel");
}
console.log("O nome Samuel está no indice", indice, "no array \n");

////////////////////////////////////////

console.log("Dividindo um array com todos os meses em trimestes:")
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var primeiroTrimestre = meses.slice(0, 3);
var segundoTrimestre = meses.slice(3, 6);
var terceiroTrimestre = meses.slice(6, 9);
var quartoTrimestre = meses.slice(9);

console.log(primeiroTrimestre);
console.log(segundoTrimestre);
console.log(terceiroTrimestre);
console.log(quartoTrimestre, "\n");

////////////////////////////////////

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var divisíveis = numeros.filter(number => number % 2 == 0);

console.log("Usando o método filter para buscar valores dentro de um array. \n");
console.log("Apenas números divisíveis por dois: \n", divisíveis);

var maioresQueCinco = numeros.filter(
    function (valor) {
        return valor > 5;
    }
)
console.log("Apenas números maiores que cinco: \n", maioresQueCinco);

function menoresQueCinco(valor) {
    return valor < 5;
}
var numerosEncontrados = numeros.filter(menoresQueCinco);
console.log("Apenas números menores que cinco: \n", numerosEncontrados, "\n");

///////////////////////////////////

var funcionarios = [
    { nome: "Matheus", idade: 20 },
    { nome: "Raphael", idade: 40 },
    { nome: "Gabriel", idade: 60 },
    { nome: "Juliano", idade: 80 },
]
console.log("Lista de funcionários e suas respectivas idades:")
var listarFuncionarios = funcionarios.filter(valor =>
    console.log("O funcionário", valor.nome, "tem", valor.idade, "anos."));

var maioresQueCinquenta = funcionarios.filter(valor => valor.idade > 50);
console.log("Os funcionários com mais de 50 anos são:", maioresQueCinquenta, "\n");

//////////////////////////////////

var produtos = [
    { id: 1, descricao: "Celular", categoria: "Eletronico" },
    { id: 2, descricao: "Notebook", categoria: "Eletronico" },
    { id: 3, descricao: "Geladeira", categoria: "Eletrodomestico" }
]

var eletronicos = [produtos.filter(valor => valor.categoria == "Eletronico")];
console.log("Filtrando os produtos do array com a categoria eletrônico:\n", eletronicos, "\n");

/////////////////////////////////

var numeros = [3, 4, 5, 6];
var multiplicacao = numeros.map(valor => valor * 3)
console.log("Utilizando o método map para multiplicar cada item de um array:\n", numeros, "\n", multiplicacao, "\n");

/////////////////////////////////

var funcionarios = [
    { nome: "Matheus", idade: 20, funcao: "Progrmador" },
    { nome: "Raphael", idade: 40, funcao: "Gerente" },
    { nome: "Gabriel", idade: 60, funcao: "Diretor" },
    { nome: "Juliano", idade: 80, funcao: "Analista" },
]
var pessoas = funcionarios.map(element => element.nome + " " + element.idade + " " + element.funcao);
console.log("Usando map para trazer os dados dos funcionários:\n", pessoas, "\n");

////////////////////////////////

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
var soma = numeros.reduce(function (total, numero) {
    return total + numero;
}, 0);
console.log("Usando o método reduce, estamos somando o total do seguinte array:\n", numeros);
console.log("A soma total do array é:", soma, "\n");

//////////////////////////////

var comidas = ["Carne", "Arroz", "Ovo", "Peixe"];
console.log("Usando o forEach, vamos exibir na tela cada elemento dentro de um array:");
var food = comidas.forEach(comida => console.log(comida));

/////////////////////////////

var array = [29, "Matheus", 34, 10, 45, "Vincenzo", "Bola", 198];
var arrayMap = array.map((element) => {
    if (typeof element === 'number') {
        return element * 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
})
console.log("\nUsando o map com condicionais para cada tipo do seguinte array:\n", array, "\n");
console.log("Esse é o array depois de passar pelas condicionais:\n", arrayMap, "\n")


var arrayFilter = array.filter(
    function (valor) {
        if (typeof valor === 'number') {
            return valor;
        }
    }
)

console.log("Filtrando somente os dados númericos do array:\n", arrayFilter, "\n");

var axTotal = 0;
var arrayReduce = array.reduce((axTotal, element) => {
    if (typeof element === 'number') {
        return axTotal + element;
    } else {
        return axTotal;
    }
}, 0);

console.log("Usando o método reduce para somar todos os dados numéricos do array:\n", arrayReduce, "\n");

///////////////////////////////////

//var nacionalidade = "Brasileiro";
var nacionalidade = "Estadunidense";
console.log("Verificando a string de acordo com a nacionalidade:");

if (nacionalidade != "Brasileiro") {
    console.log("Sua nacionalidade é", nacionalidade, "\n");
} else console.log("Sua nacionalidade é Brasileira\n");

///////////////////////////////////

var carros = [
    { id: 1, marca: "Toyota", nome: "Corolla", preco: 120000 },
    { id: 2, marca: "Honda", nome: "Fit", preco: 70000 }
];

var carrosX = [
    { id: 1, marca: "Toyota", nome: "Corolla", preco: 120000 },
    { id: 2, marca: "Honda", nome: "Fit", preco: 70000 },
    { id: 3, marca: "Bugatti", nome: "Veirron", preco: 27323000 }
];
var valorTotal = 0;
var valorTotalX = 0;
console.log("Criando alguns objetos de carros e calculando seus preços:\n");

for (const i in carros) {
    valorTotal += carros[i].preco;
}

for (const car of carrosX) {
    valorTotalX += car.preco
}

for (let categoria in carros) {
    console.log(carros[categoria])
}

console.log();

for (let categoria in carrosX) {
    console.log(carrosX[categoria])
}

console.log("\nO preço total dos carros sem a Bugatti ficou em:", valorTotal.toFixed(2));
console.log("O preço total com a Bugatti ficou em:", valorTotalX.toFixed(2), "\n");

////////////////////////////////////

console.log("Um simples exercício de While:");

var i = 0;
while (i <= 10) {
    console.log("O i é igual a: " + i);
    i++;
}

//////////////////////////////////


var numeros = [2, 6, 4, 8, 5, 2, 1, 3];
var sum = 0;
var indice = 0;

do {
    sum = numeros.reduce((accumulator, currentValue, currentIndex) => {
        if (currentIndex <= indice) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, sum);

    indice++;

} while (indice < numeros.length);

console.log("\nA soma dos números é:", sum, "\n");

////////////////////////////////////////////

const carro = {
    modelo: 'Audi A3',
    marca: 'Audi',
    ano: 2020
};

console.log("Usando um for para exibir as informações do carro:");

for (let caracteristica in carro) {
    console.log(caracteristica + ': ' + carro[caracteristica]);
}

//////////////////////////////////////////////

var numeros = [2, 4, 6, 8, 10];

let ax = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        ax += numeros[i];
    }
}

console.log("\nSomando os valores de um array com o for:", ax, "\n");

////////////////////////////////////////////

var matheus = "Matheus";
var m = matheus.length;
var resultado = m < 8 ? "Esse é meu nome" : "Não sou eu não"
console.log(matheus, resultado)
console.log(matheus.toLocaleUpperCase(), "\n");

//////////////////////////////////////////

var jogo = "Barcelona versus Real madri, o melhor jogo!";
console.log("A string original é essa:", jogo);

var posicao = jogo.indexOf("Real");
console.log("Usando o indexOf, essa é a posição da palavra Real:", posicao);

var cortado = jogo.slice(17,);
console.log("Usando o Slice na string:", cortado);

var procura = jogo.includes("versus");
console.log("Na string, tem a palavra versus?", procura, "\n");

///////////////////////////////////////////

console.log("Utilizando métodos para as strings:");

var str1 = "Sarah";
var str2 = " linda";
var str3 = str1.concat(str2);
console.log("Usando concat:", str3);

var frase = "      Olá mundo    "
console.log("Usando trim:", frase.trim())

var js = "Java, Cobol e C#"
var novoJs = js.substring(6, 11);
console.log("Usando substring:", novoJs, "\n");

var texto = "Eu te amo";
if (texto.startsWith("Eu")) {
    let sub = texto.substring(6);
    let novoTexto = sub.replace("amo", "admiro");
    let novo = novoTexto.toUpperCase();
    //console.log(novoTexto);
}

///////////////////////////////

console.log("Usando métodos para dividir uma string:");

var url = "www.linkedlin.com.br?nome=matheus&sobrenome=eloy,palasson";
var parametros = url.split("?")[1];
console.log("Usando o método split:", parametros);
var sequencia = parametros.split("&");
console.log("usando o método split:", sequencia);

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i].startsWith("sobrenome=")) {
        sequencia[i] = "sobrenome=" + sequencia[i].substring(10).toUpperCase();
    }
}
console.log("Percorrendo a string para usar o toUpperCase no sobrenome:", sequencia, "\n");

//////////////////////////////////

var nomes = ["Matheus", "Raphael", "Renata", "Alex"]
console.log("Usando o map para alterar cada um dos elementos do seguinte array:\n", nomes)
var convertidos = nomes.map(nome => nome.toUpperCase());
console.log("Array depois do map:", convertidos, "\n");

////////////////////////////////

var valores = [1, 2, 3, 4, 5];
var valoresMap = valores.map((num) => num * num);
console.log("Usando o map para potencializar os valores de um array:", valoresMap, "\n");

///////////////////////////////