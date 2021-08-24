//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String
const produto = 'IPAD'
console.log(`${produto} é muito caro !`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras) 

const [x, ,y] = [1,2,3]
console.log(x,y)

const{ idade:i, nome} = {nome: 'Nickolas', idade: 24}
console.log(`${nome}, ${i}`)