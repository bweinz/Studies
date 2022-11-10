console.log(`\n Trabalhando com Listas`);
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const idadeComprador = 18;
const estaAcompanhada = false
let temPassagemComprada = false //começa como false

const destino = "Curitiba"

console.log("\n Destinos Possíveis");
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0
let destinoExiste = false

while (contador < 3) {

  if (listaDeDestinos[contador] == destino) {  // esta posição é igual ao destino da pessoa?
    destinoExiste = true;
    break;
  } 
    contador += 1
  }

  console.log("Destino existe: ", destinoExiste);

  if (podeComprar && destinoExiste) {
    console.log("Boa viagem")
  } else { 
    console.log("Desculpe tivemos um erro!")
  }
        //variavel inicial, condição do lopping, contador +1
        //

  for (let i = 0 ; contador < 3  ; i++ )
    if (listaDeDestinos[contador] == destino){
      destinoExiste = true;
    }

  // verifica se a pessoa pode comprar e se o destino existe.