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


