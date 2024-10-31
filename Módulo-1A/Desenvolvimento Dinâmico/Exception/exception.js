
function dividir(a,b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");        
    }
    return a / b;
}

try {
    const result = dividir(10,2);
    console.log("O resultado é",result);
} catch (error) {
    console.log("Ocorreu uma exception", e.message);
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
    console.log("Ocorreu uma exception", error.message);
}

/////////////////////////////////////////////////
