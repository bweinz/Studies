// Manipulando Strings e Arrays

// Separa um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let phrase = "Eu quero viver o Amor!"
let transformandoEmArray = phrase.split(" ") //Split tira o valor colocado como parametro
let transformandoemStringNovamente = transformandoEmArray.join("_")
console.log(transformandoemStringNovamente)