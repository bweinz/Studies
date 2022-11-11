// function expression or function anonymous
// Tem a mesma ideia da função de antes porém não tem um nome declarado nela.

// parâmetros da função (parameters = number1 e number2)
const sum = function (number1,number2) {
   let total = number1 + number2
   return total
}

sum(2,3) // Quando invoco a função estou passando argumentos, 2 e 3 são argumentos de uma função executada
sum(4,5)


// 2º parte utilizando let

let valor1 = 34
let valor2 = 23

sum(valor1,valor2)
console.log(`o numero 1 é ${valor1} e o numero 2 é ${valor2} a soma é ${sum(valor1, valor2)}`)
//Att