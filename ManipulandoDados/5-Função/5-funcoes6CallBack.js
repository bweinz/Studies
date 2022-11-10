//Callback = Chamar de volta

function sayMyName (name){
    console.log('antes de executar a função call back')
    name()

console.log('após executar a callback')
}

sayMyName(
    () => { console.log('Estou em uma callback')}
)