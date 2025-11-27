// Projeto: Vingadores vs Thanos

// Definindo os personagens dos Vingadores
const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark 50",
    armaSecundaria: "Repulsores",
    velocidade: 95,
    forca: 85,
    resistencia: 90,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força bruta",
    armaSecundaria: "Regeneração",
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Stormbreaker",
    armaSecundaria: "Raios",
    velocidade: 90,
    forca: 98,
    resistencia: 95,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

const viuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Bastões elétricos",
    armaSecundaria: "Pistolas",
    velocidade: 88,
    forca: 65,
    resistencia: 75,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

const gaviao = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e flecha",
    armaSecundaria: "Flechas especiais",
    velocidade: 82,
    forca: 68,
    resistencia: 72,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

// Definindo o vilão Thanos
const thanos = {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada dupla",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistência: " + this.resistencia
    }
};

// Array com todos os personagens
const personagens = [capitaoAmerica, homemDeFerro, hulk, thor, viuvaNegra, gaviao, thanos];

// Função para comparar atributos
function compararPersonagens(atributo) {
    console.log(`\n========== COMPARAÇÃO: ${atributo.toUpperCase()} ==========\n`);
    
    let vencedor = personagens[0];
    
    for (let i = 0; i < personagens.length; i++) {
        console.log(personagens[i].descricao());
        console.log("\n----------------------------\n");
        
        if (personagens[i][atributo] > vencedor[atributo]) {
            vencedor = personagens[i];
        }
    }
    
    console.log(`🏆 VENCEDOR EM ${atributo.toUpperCase()}: ${vencedor.codinome} com ${vencedor[atributo]} pontos!\n`);
    console.log("=" .repeat(50) + "\n");
}

// Executando as comparações
console.log("🎯 BATALHA DOS VINGADORES VS THANOS 🎯\n");
console.log("=" .repeat(50));

compararPersonagens("velocidade");
compararPersonagens("forca");
compararPersonagens("resistencia");

// Comparação geral (soma de todos os atributos)
console.log("\n========== COMPARAÇÃO GERAL (PODER TOTAL) ==========\n");

let vencedorGeral = personagens[0];
let maiorPoder = 0;

for (let i = 0; i < personagens.length; i++) {
    let poderTotal = personagens[i].velocidade + personagens[i].forca + personagens[i].resistencia;
    console.log(`${personagens[i].codinome}: ${poderTotal} pontos totais`);
    
    if (poderTotal > maiorPoder) {
        maiorPoder = poderTotal;
        vencedorGeral = personagens[i];
    }
}

console.log(`\n🏆 VENCEDOR GERAL: ${vencedorGeral.codinome} com ${maiorPoder} pontos totais!\n`);
console.log("=" .repeat(50));
