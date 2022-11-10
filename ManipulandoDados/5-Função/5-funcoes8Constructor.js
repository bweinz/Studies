/* 
    Function() constructor

    *expressão new
    *criar um novo objetos
    *this keyword  (está palavra-chave)

*/ 

function Person(name){
    this.name = name
    this.walk = function(){
         return this.name+ " esta " + "andando"}
}

const mayk = new Person("Maike");
const joao = new Person("Joao");

console.log(mayk.walk());
console.log(joao.walk());


//criamos novos objetos a partir da function Person que serve como molde para todos os objetos criados.