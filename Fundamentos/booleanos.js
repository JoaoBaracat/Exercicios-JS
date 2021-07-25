let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)
console.log(!isAtivo)

//verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 1))

//falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = 0))
console.log(!!('' || 0 || null || 'undefined'))


let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Teste'
console.log(nome || 'Desconhecido')








