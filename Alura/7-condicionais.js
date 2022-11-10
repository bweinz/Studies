console.log(`Trabalhando com Listas`);
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const idadeComprador = 15;
const estaAcompanhada = false
const temPassagemComprada = true

//Adiciona um item dentro da lista já criada .push()
listaDeDestinos.push("Curitiba");

console.log("Destinos Possíveis");
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true
    ) {
     console.log("Boa Viagem");
     listaDeDestinos.splice(2, 1) //Removendo item
} else {
    console.log("Comprador não é maior de Idade e não posso vender");
}

console.log(listaDeDestinos);

console.log("Embarque: \n \n");
if (idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem!");
} else{ 
    console.log("Você não pode embarcar!");
}
