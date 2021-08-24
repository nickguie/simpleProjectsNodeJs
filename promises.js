function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
} 

falarDepoisDe(3, 'Que Legal')
    .then((frase, abc) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // tratar erro com catch     
    .catch(e => console.log(e))