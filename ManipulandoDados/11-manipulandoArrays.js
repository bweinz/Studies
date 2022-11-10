//Manipulando Arrays


let techs = ["html", "css", "js"]

// Adicionar um item no fim do Array.

techs.push("nodejs") // O metodo push já coloca automaticamente no final 
console.log('Foi adicionado no Final Nodejs: ' + techs)


// Adicionar um item no Começo do Array.
techs.unshift("sql")
console.log('foi adicionado no começo SQL: ' + techs)


// Remover do fim.
techs.pop()
console.log('foi retirado o ultimo item do array: ' + techs)


// Remover do Começo.
techs.shift()
console.log('foi retirado o primeiro item do array: ' + techs)


// Pegar somente alguns elementos do array.
console.log(techs.slice(1,3))
//esse parametro vai pegar Css e JS = CSS posição 1 (contando do 0)  e JS final do array posição 3 (contando do 1)
//slice significa cortar, 1º qual a posição que quero que retire, e o segundo argumento qual a posição final do array que eu quero, no caso tem 3 elementos vou tirar do 1 css pois começa do 0 e que vá até a casa 3 o ultimo elemento, o segundo parametro faz o calculo a partir do 1 e não do 0


// Remover 1 ou mais items em qualquer posição do array.
techs.splice(1,2) //splice, da dois argumentos, qual é o index do array, a partir do 0, se quero tirar o css, index1 e o segundo parametro quantos elementos eu quero tirar a partir do primeiro parametro.


// Encontrar a posição de um elemento no Array.
let index = techs.indexOf('css'); //indexof = index de qual é a posição do css
techs.splice(index, 1);
console.log(techs)
