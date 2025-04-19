export const defScreenshots: string[] = [
  'daily.jpg',
  'monthly.jpg',
  'yearly.jpg',
];

export const defPrices:number[] = [
  2.0,
  20.0
];

export function generateDefaultScreenshot(): string[] {
  return [...defScreenshots];
}
