// COM PROMISE ...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
    
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
    
        })
    })
}

//Recurso do ES8
// Tem como objetivo SIMPLIFICAR o uso de PROMISE
let obterAlunos = async () =>{
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}// Retorna um Objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a=>a.nome))
    .then(nomes => console.log(nomes)) 