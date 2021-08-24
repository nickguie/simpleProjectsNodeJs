//Ja tem disponibilidade de usar a variável na linha após a atribuição/declaração
let a = 1
console.log(a)



const primeiroElemento = arrayOuString => arrayOuString[0]
//const primeiraLetra = string => string[0]
const letraMinuscula = letra =>letra.toLowerCase()

//Declara uma Promessa a ser cumprida
new Promise(function(resolve){
    //Gera o valor que sera enviado no then para cumprir a promessa(Objeto, valor, array, etc...)
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
//.then(v=>console.log(v)) é a mesma coisa que (Chama pro return a variavel com o mesmo nome):
.then (console.log)
