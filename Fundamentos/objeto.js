const prod1 = {}
prod1.nome = 'Celular Ultra'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  //evitar atributos com espaco
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 9.99,
    desconto: 0.1,
    categoria: {
        descricao:'Camisetas',
        id:1,
        subcategoria:{
            id:11,
            descricao:'tamanho G'
        }
    }
}
console.log(prod2)


























