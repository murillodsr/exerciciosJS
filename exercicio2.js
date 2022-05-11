/*  2 Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando 
    reduce e filter.*/

//vetor 
//MAP: utilizado para extrair dados, processamento de dados...
//     utilizando const garante que o vetor original não sofrera mudança

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function (item) {
  return { original: item, dobrado: item * 2 }
})
console.log(vetor, dobrado)

//arrow function
const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

//FILTER: 
const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log('Pares Dobrado: ', paresDobrado)

//REDUCE: Reduzir, concatenar, agrupar valores de alguma maneira
const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar)
console.log('Somar com reduce:', somatorio)

//Quando utliza o FILTER e o MAP chamamos de high arrow function:
//uma função que recebe outra função como parâmentro.

