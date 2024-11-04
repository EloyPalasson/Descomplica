
function dividir(a,b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");        
    }
    return a / b;
}

try {
    const primeiroResultado = dividir(10,2);
    console.log("O resultado é",primeiroResultado);
    const segundoResultado = dividir(5,0);
} catch (error) {
    console.log("Ocorreu uma exception:", error.message);
}

/////////////////////////////////

function verificarTamanhoSenha(senha) {
    if (senha.length <= 6) {
        throw new Error("A senha deve ter mais de 6 caracteres");
    } else console.log("Senha válida");
}

try {
    const primeiraSenha = "Mty&7.s";
    verificarTamanhoSenha(primeiraSenha);
    const segundaSenha = "M293u8"
    verificarTamanhoSenha(segundaSenha);
} catch (error) {
    console.log("Ocorreu uma exception:", error.message);
}

/////////////////////////////////////////////////

const numeros = [1,2,3,4,5];
//const letras = ["M", "J", "K"];

try {
    const dobrarNumeros = numeros.map((num) => {
        if (typeof num !== "number") {
            throw new Error ("O array só aceita números")
        }
        return num * 2;
    })
    console.log("Array com número dobrados:", dobrarNumeros);
} catch (error) {
    console.log("Ocorreu uma exception:", error.message);
}

/////////////////////////////////////////////////

function processarNome(nome,callback) {
    if (typeof nome !== "string") {
        callback(new Error("O nome deve ser uma string"))
        return;
    }

    if (nome.length === 0) {
        callback(new Error("O nome não pode estar vazio"));
        return;
    }

    callback(null,"Nome processado com sucesso");
}

processarNome("Matheus",(error,result) => {
    if (error) {
        console.log("Ocorreu um problema: " + error.message);
    } else {
        console.log("Status -", result);
    }
})

///////////////////////////////////////////////

function verificarArrayPositivo(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error("O argumento deve ser de um array");
    }   

    const positivos = numeros.every((num) => num > 0);
    if (!positivos) {
        throw new Error("O array deve conter apenas números positivos");
    }
    return true;
}

try {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const isPositive = verificarArrayPositivo(numbers);

    console.log("O array contém números positivos -", isPositive);

} catch (error) {
    console.log("Ocorreu um exception:", error.message);
}


