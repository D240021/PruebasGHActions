function obtenerFactorial( numero ) {
    return numero <= 1 ? 1 : numero * obtenerFactorial( numero - 1 );
}
// eslint-disable-next-line no-undef
module.exports = { obtenerFactorial };

