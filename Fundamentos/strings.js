const escola = "Cod3r"

console.log(escola.charAt(4))       //base 0
console.log(escola.charAt(7))

console.log(escola.charCodeAt(3))   //char code do caracter em html
console.log(escola.charCodeAt(4))

console.log(escola.indexOf(3))
console.log(escola.indexOf('o'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))      //regex >> todos os digitos
console.log(escola.replace(/\w/g, 'e'))      //regex >> todos os caracteres

console.log('Ana,Maria,Pedro'.split(','))














