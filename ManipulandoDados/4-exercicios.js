//  1. Declare uma variável de nome weights.
var weights

//  2. Que tipo de dado é a variavel Acima?
undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados;
        *name: string
        *age: number (integer)
        *stars: number (float)
        *isSubscribed: boolean

*/ 

const name = 'Bruno'
const age = 23
const stars = 2.45
const isSubscribed = true

/*  4. A variável student abaixo é de que tipo de dados?
    
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    
    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg. */

    let student = {};

    //4.
    console.log(typeof student)

    //4.1
    student = {
        name: 'Bruno',
        age: 23,
        weight: 82.45,
        isSubscribed: true,
    };
    console.log(student)

    //4.2

    //console.log(`${student.name}, de idade ${student.age} pesa ${student.weight} Kg`)

    //5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somento o array vazio

    let arrayStudents = []

    /* 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4 (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)*/

    arrayStudents = [student]

    console.log(arrayStudents)

   /* 7. Coloque no console o valor da posição zero do Array acima*/ 

   console.log(arrayStudents[0])

   /* 8.Crie um novo student e coloque na posição 1 do array students*/ 

   let newStudent
   arrayStudents.push = [newStudent]
   console.log(arrayStudents)

   /* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? após sua resposta rode o código e veja se você acertou!
   console.log(arrayStudent)
   var a = 1;
   */ 
  console.log('vai rodar normalmente, pois acontece o fenomeno de hoisting a var sob e aparecerá o valor de undefined, o valor 1 só fica depois do A')