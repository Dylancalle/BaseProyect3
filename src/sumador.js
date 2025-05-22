function sumar(a, b) {
  if (a < 0 || b < 0) {
    return 0; // lógica adicional no cubierta en el test
  }
  return a + b;
}

export default sumar;
