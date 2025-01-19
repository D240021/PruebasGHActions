const { obtenerFactorial } = require('./factorial.js');
 
describe('Pruebas para la función obtenerFactorial', () => {
    test('Factorial de 0 debe ser 1', () => {
        expect(obtenerFactorial(0)).toBe(1);
    });

    test('Factorial de 1 debe ser 1', () => {
        expect(obtenerFactorial(1)).toBe(1);
    });

    test('Factorial de 5 debe ser 120', () => {
        expect(obtenerFactorial(5)).toBe(120);
    });

    test('Factorial de 10 debe ser 3628800', () => {
        expect(obtenerFactorial(10)).toBe(3628800);
    });

    test('Factorial de números negativos debe ser 1', () => {
        expect(obtenerFactorial(-5)).toBe(1);
    });

    // test('Factorial de 5 debe ser incorrecto deliberadamente', () => {
    //      expect(obtenerFactorial(5)).toBe(100); 
    //  });

});
