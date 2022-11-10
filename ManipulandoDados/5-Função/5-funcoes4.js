//function scope

let subject = 'create video'
//subject recebe create video

function createThink (subject){ //a função cria um argumento subject
    subject = 'Study'           // subject vira study
    return subject
}

console.log(subject)
console.log(createThink())

//toda função que não tem retorno torna-se undefined 