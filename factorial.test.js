// eslint-disable-next-line no-undef
const { obtenerFactorial } = require('./factorial.js');

// eslint-disable-next-line no-undef
describe('Pruebas para la función obtenerFactorial', () => {
  // eslint-disable-next-line no-undef
  test('Factorial de 0 debe ser 1', () => {
    // eslint-disable-next-line no-undef
    expect(obtenerFactorial(0)).toBe(1);
  });

  // eslint-disable-next-line no-undef
  test('Factorial de 1 debe ser 1', () => {
    // eslint-disable-next-line no-undef
    expect(obtenerFactorial(1)).toBe(1);
  });

  // eslint-disable-next-line no-undef
  test('Factorial de 5 debe ser 120', () => {
    // eslint-disable-next-line no-undef
    expect(obtenerFactorial(5)).toBe(120);
  });

  // eslint-disable-next-line no-undef
  test('Factorial de 10 debe ser 3628800', () => {
    // eslint-disable-next-line no-undef
    expect(obtenerFactorial(10)).toBe(3628800);
  });

  // Prueba incorrecta deliberadamente
  // eslint-disable-next-line no-undef
  test('Factorial de 5 debe ser incorrecto deliberadamente', () => {
    expect(obtenerFactorial(5)).toBe(100);
  });

  // eslint-disable-next-line no-undef
  test('Factorial de números negativos debe ser 1', () => {
    expect(obtenerFactorial(-5)).toBe(1);
  });
});
