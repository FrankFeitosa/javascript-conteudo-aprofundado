// Array Methods

let lista = [1,2,3];

console.log(lista.map(item => item +2))

let impares = lista.filter(item => item % 2 != 0)

console.log(impares.includes(5))
console.log(impares.includes(3))

console.log(impares.find(item => item == 1))

console.log(impares.reduce((acumulador, interador) => acumulador + interador,0))

let pessoas = [{
    nome:  'Frank', idade: 34
},
{
    nome: 'Cristina', idade: 35
}]

console.log(pessoas.reduce((a,i) => a + i.idade,0))

console.log(pessoas.find(pessoa => pessoa.idade > 30, 0))

console.log(pessoas.includes('Cristina'))

console.log(pessoas.filter(pessoa => pessoa.nome == 'Cristina'))

console.log(lista)
console.log(impares)
console.log(pessoas)