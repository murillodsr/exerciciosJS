
//functions are first class citizens
const soma = function (a, b) {
  return a + b
}

const sub = function (a, b) {
  return a - b
}

const div = function (a, b) {
  return a / b
}

const mult = function (a, b) {
  return a * b
}

const calculadora = function (op, a, b) {
  return op(a, b)
}
console.log(calculadora(soma, 1, 2))
console.log(calculadora(sub, 3, 1))
console.log(calculadora(div, 10, 2))
console.log(calculadora(mult, 5, 5))