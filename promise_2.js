
//setTimeout(funcaoComoParametro{}, 2000(2k milisegundos = 2 segundos))

// setTimeout(function(){
//     console.log('Executando callback')

//     setTimeout(function(){
//         console.log('Executando callback 2')

//         setTimeout(function(){
//             console.log('Executando callback 2')
//         }, 2000)

//     }, 2000)

// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve()
        }, tempo)
    })
}
esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)