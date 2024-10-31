const verificarBoolean = new Promise((resolve, reject) => {

    const condicao =  true; //false

    if (condicao) {
        resolve("a condição é verdadeira");
    }else {
        reject("a condição é falsa");
    }
})

verificarBoolean
.then((resultado) =>{
    console.log("Verificamos que", resultado);
})
.catch((erro) => {
    console.log("Verificamos que", erro);
})

//////////////////////////////////////////////

const arrayExemplo = [1,2,3,4,5]; //"Matheus"

function somarArray(array) {
    return new Promise((resolve,reject) => {
        if (!Array.isArray(array)) {
            reject("o argumento passado não é um array!");
        }
        const soma = array.reduce((total,num) => total + num,0);
        resolve(soma);
    })
}

somarArray(arrayExemplo)
.then((resultado) =>{
    console.log("O resultado da soma do array é:", resultado);
})
.catch((erro) => {
    console.log("Ocorreu o seguinte erro:", erro);
})

///////////////////////////////////////////////////

class verificarValor {
    constructor(valor) {
        this.valor = valor;
    }

    operacaoAssincrona(){
        return new Promise((resolve,reject) => {
            const operacao = this.valor * 2;

            if (operacao > 0) {
                resolve(operacao);
            } else reject("o valor passado é um número negativo");
        })
    }
}

const verificacao = new verificarValor(19); // -19
verificacao.operacaoAssincrona()
.then((resultado) => {
    console.log("O resultado da operação é:", resultado);
})
.catch((erro) =>{
    console.log("Ocorreu o seguinte erro:", erro);
})

//////////////////////////////////////

function obterValor(valor) {
    return new Promise((resolve,reject) =>{
        if (!isNaN(valor)) {
            resolve(valor + 2);
        } else {
            reject("O argumento passado não é um número");
        }
    })
}

function dobrarValor(valor) {
    return valor * 2;
}

function adicionarValor(valor) {
    return valor + 10;
}

obterValor(5) //"M"
.then((valor) =>{
    console.log("Primeiro valor obtido:", valor);
    return dobrarValor(valor)
})
.then((novoValor) =>{
    console.log("Novo valor obtido:", novoValor);
    return adicionarValor(novoValor);
})
.then((resultado) =>{
    console.log("O resultado no fim ficou em:", resultado);
})
.catch((erro) =>{
    console.log("Ocorreu o seguinte erro:", erro);
})