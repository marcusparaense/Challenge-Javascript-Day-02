const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}!`;

nome
idade
linguagem

alert(msg)
//alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + ' !')

gosta()

function gosta() {
    const gostaLinguagem = prompt('Você gosta de estudar ' + linguagem + ' ?  Responda com numero 1 para SIM ou 2 para NÃO')
    if(gostaLinguagem == 1) {
        alert('Muito Bom! Continue estudando e você terá muito sucesso.')
    }
    if(gostaLinguagem == 2) {
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    }
}
