/* 1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores 
utilizando reduce.*/

const vetor = [1, 2, 3, 4, 5]
const somadora = (valorAnterior, valorAtual) => valorAnterior + valorAtual
const soma = vetor.reduce(somadora, 0)
console.log('Soma:', soma)

