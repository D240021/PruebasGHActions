function obtenerFactorial (numero) {
  return numero <= 1 ? 1 : numero * obtenerFactorial(numero - 1)
}

module.exports = { obtenerFactorial }
