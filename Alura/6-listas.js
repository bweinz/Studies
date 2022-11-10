console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//Cria uma lista com diversas entradas
const listaDeDestinos = new Array ("Salvador","São Paulo", "Rio de Janeiro");
//Adiciona um item dentro da lista já criada .push()
listaDeDestinos.push("Curitiba");

console.log("Destinos Possíveis");
//console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos)

//Splice.(posição, quantidade) serve para deletar uma ou mais posições do array
listaDeDestinos.splice(1,1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1])