export function saludo(nombre: string): string {
  return `Hola, ${nombre}! Stack 2026 operativo.`;
}

if (import.meta.main) {
  console.log(saludo("piloto"));
}