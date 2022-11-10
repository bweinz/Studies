//Variaveis e tipos de dados
//desclaração or declarations

var name

//assignment or atribuição de valores
name = "Bruno"

//que tipo de dado foi colocado na variavel
console.log(typeof name)

//agrupamento de declarações
let age, isHuman
age = 18
isHuman = true

//interpolação, template strungs
console.log(`${name} ${age} ${isHuman}`)


//object
const person = {
    name: 'Bruno',
    age: 29,
    weight: 88.6,
    isAdmin: true
}
console.log(person.name)


//Arrays
const animals = [
    'lion',
    'monkey',
    'cat'
]
console.log(animals[0])