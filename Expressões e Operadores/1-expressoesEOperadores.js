/*
Expressions and Operators

- Expressões
- Operadores
    Binary  = Binario
    Unary   = Unario
    Ternary = Ternario

    expressões = qualquer linha de codigo que resolve algo no js
*/

let number = 1 

//Binario, dois valores e um operador
console.log(number + 1)

//Unario, um valor e algum tipo de operador
console.log(typeof number)

//ternario, 3 valores
console.log(true ? 'alo' : 'nada')
// vai verificar se é verdade, se for retorna 'alo', senão 'nada'


/*
    Operadores Unários
    typeof
    delete
*/

const person = {
    name: 'mayk',
    age: 25
}

delete person.age

console.log(typeof "mayk")
console.log(person)
//Atualizando