let valor // não inicializada
console.log(valor)
//console.log(valor2)

valor = null
console.log(valor)  //null é ausencia de valor
// console.log(valor.toString())    //Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
// console.log(produto.preco.a)    //Cannot read property 'a' of undefined
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)
console.log(produto)

produto.preco = undefined   // evite fazer isso
console.log(!!produto.preco)
console.log(produto)

// delete produto.preco
// console.log(produto)

produto.preco = null    //sem preco
console.log(!!produto.preco)
console.log(produto)

























