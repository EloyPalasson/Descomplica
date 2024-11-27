function multiplicacao(x, y) {
    return x * y;
}
console.log("Utilizando a função multiplicação com 2 números como parâmetros:")

var a = multiplicacao(4, 20);
console.log("Resultados dos parâmetros 4 e 20:", a);

var b = multiplicacao(10, 200);
console.log("Resultados dos parâmetros 10 e 200:", b, "\n");

/////////////////////////////////////////

var soma = function (a, b, c, d) {
    return a + b + c + d;
}
console.log("Utilizando uma função para somar os parâmetros:",);

console.log("Resultado da função:", soma(13, 57, 3, 12), "\n");

///////////////////////////////////////


var somaSimples = (num1, num2) => { return num1 + num2 };
console.log("Resultado de uma soma simples usando a Arrow function:", somaSimples(24, 12), "\n");

//////////////////////////////////////

function primeiraMaiuscula(elemento) {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}
var produtos = ["geladeira", "fogão", "air frier"];
console.log("Vamos modificar o seguinte array com algumas funções:", produtos);
var editar = produtos.map(primeiraMaiuscula);

console.log("Tornando a primeira letra de cada item maiúscula:", editar, "\n");

/////////////////////////////////////


var shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
}

function removeToCart(item) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

function viewCart() {
    if (shoppingCart.length == 0) {
        console.log("Shopping cart está vazia");
    } else {
        console.log("Seus itens: ");
        for (let i = 0; i < shoppingCart.length; i++) {
            console.log(`${i + 1} - ${shoppingCart[i]}`);
        }
    }
}

function clearCart() {
    shoppingCart.length = 0;
    console.log("Seu shopping cart está limpo");
}
addToCart("Tênis");
addToCart("Blusa");
addToCart("Óculos");
console.log("Usando funções para adicionar, remover e limpar o shopping cart:\n");

viewCart();

removeToCart("Tênis");
console.log();

viewCart();

clearCart();
console.log();

viewCart();
console.log();

////////////////////////////////////////

var pessoa = {
    nome: 'Matheus',
    sobrenome: 'Eloy'
}
console.log("Buscando a característica de um objeto pessoa:", pessoa['sobrenome']);

var trabalhador = new Object();
trabalhador.nome = "Alex";
trabalhador.sobrenome = "Palasson";
trabalhador.profissao = "Atendente";

console.log("Buscando a característica de um objeto trabalhador:", trabalhador.profissao, "\n");

////////////////////////////////////////


function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

var sarah = criarPessoa("Sarah", "Alves Albuquerque Felício", 20);
var renata = criarPessoa("Renata", "Eloy Palasson", 45);

console.log("Usando uma função para inserir os dados de uma pessoa e usando um getter:");
console.log(sarah.nomeCompleto)
console.log(renata.nomeCompleto, "\n");

////////////////////////////////////////////

function criarGEnte(nome, idade, p, a) {
    return {
        nome,
        idade,
        peso: p,
        altura: a,
        calculaImc() {
            let imc = this.peso / (this.altura ** 2).toFixed(1);
            if (imc < 18.5) {
                console.log("Abaixo do peso");
            } else if (imc >= 18.5 && imc < 24.9) {
                console.log("Peso normal");
            } else if (imc >= 25 && imc < 29.9) {
                console.log("Sobrepeso");
            } else if (imc >= 30 && imc < 34.9) {
                console.log("Obesidade 1");
            } else if (imc >= 35 && imc < 39.9) {
                console.log("Obesidade 2");
            } else console.log("Obesidade 3");
        }
    }
}

var matheus = criarGEnte("Matheus", 20, 100, 1.86);
console.log("Usando uma função para calcular o IMC de uma pessoa:");
matheus.calculaImc();
console.log();

///////////////////////////////////


class user {
    constructor(primeiroNome,segundoNome){
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
    }
  
    get FullName(){
      console.log(this.primeiroNome + " " + this.segundoNome);
    }
  }
  
  const usuario = new user("Matheus","Eloy");
  console.log("Trazendo os dados de uamclasse criada:");
  usuario.FullName;
