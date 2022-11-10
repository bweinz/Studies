//  Contar elementos de um Array

console.log([
  "a",
  { type: "array" },
  function () {
    return "Alo";
  },
]);

//Um array aceita qualquer dado dentro dele
//Podemos quebrar a linha do array para organizar melhor

console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "Alo";
    },
  ].length
);

// Podemos utilizar o .length para verificar quantos itens existem dentro do Array

console.log([
    "a",
    { type: "array" },
    function () {
        return "Alo";
    },
  ][2]()
);

//Podemos abrir o que está na posição 2 do array = [2] e pedir para que execute = () ou seja: [2]()