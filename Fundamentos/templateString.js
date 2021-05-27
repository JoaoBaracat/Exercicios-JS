const nome = 'rebeca'
const concatenacao = 'Ola ' + nome + '!'        //sem template nao pode quebrar linha no meio da str

const template = `
    Ola
    ${nome}!`;


console.log(concatenacao, template)    

// expressoes ...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)















