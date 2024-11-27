
class user {
    constructor(primeiroNome, segundoNome) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
    }

    get FullName() {
        console.log(this.primeiroNome + " " + this.segundoNome);
    }
}

const usuario = new user("Matheus", "Eloy");
console.log("Trazendo os dados da classe user:");
usuario.FullName;
console.log();

///////////////////////////////////////

class dispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log("já está ligado");
            return;
        }
        this.ligado = true;
    }
}

class Smartphone extends dispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var galaxy = new Smartphone("Samsung", "preto", "galaxy");
console.log("Criando um celular que herdou características de outra classe:\n",galaxy,"\n");
galaxy.ligar();
console.log("Usando uma função para ligar o aparelho:\n",galaxy);