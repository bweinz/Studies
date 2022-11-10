/*
    Falsy

    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

    Se qualquer um desses valores esteja no lugar do valor booleano o js transforma ele no coersion em false
*/

console.log( undefined? 'verdade': 'falso')


/*
    Truthy ( Confiavel )
    
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio (Condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

    console.log(Infinity? 'Verdadeiro': 'falso')