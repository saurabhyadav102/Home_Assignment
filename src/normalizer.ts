export function normalize(values: number[]): number[] {
  const min = Math.min(...values);
  const max = Math.max(...values);

  return values.map((v) => (max === min ? 1 : (v - min) / (max - min)));
}
