//function hoisting

sayMyName( );

function sayMayName(){
    console.log('Mayk')
}

// Como se o jS colocasse a function para cima fazendo o hoisting para funcionar


//diferente de:

sayMyName2();

const sayMyName = function(){
    console.log('mayk')
}

// por usar a palavra const, let ou var, de expressão não sofre elevação de hoisting
//Atualizando