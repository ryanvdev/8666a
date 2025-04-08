import { SchemeString } from './scheme_string';

export type ColorGroup = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

export interface Color {
  color: string;
}

export interface Shape {
  borderRadius: number; // double
  shape: 'stadium' | 'roundedRectangle' | 'beveledRectangle';
}

export interface ThemeColorScheme {
  generator?: 'flex_seed_scheme' | string;
  isDarkMode?: boolean;
  primaryKey?: Color;
  secondaryKey?: Color;
  tertiaryKey?: Color;
}

export interface ThemeData {
  isDark?: boolean;
  scheme?: SchemeString;
  shape?: Shape;
  fontFamily?: string;
  numberFontFamily?: string;
  colorScheme?: ThemeColorScheme;
}

export interface ThemeConfig {
  key: string;
  title: string;
  isDark: boolean;
  createdAt: Date;
  price: number;
  colorGroups: ColorGroup[];
  screenshots: string[];
}

export interface ThemeConfigDetail extends ThemeConfig {
  themeData: ThemeData;
}


const defScreenshots: string[] = [
  'daily.jpg',
  'monthly.jpg',
  'yearly.jpg',
];

export function generateDefaultScreenshot(): string[] {
  return [...defScreenshots];
}

