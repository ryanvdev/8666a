import { ThemeConfigDetail } from "../types";

export function segmentDarkLight(v: ThemeConfigDetail): ThemeConfigDetail[] {
  const dark: ThemeConfigDetail = {
    ...v,
    key: `${v.key}_dark`,
    isDark: true,
    themeData: {
      ...v.themeData,
      isDark: true,
    }
  }

  const light: ThemeConfigDetail = {
    ...v,
    key: `${v.key}_light`,
    isDark: false,
    themeData: {
      ...v.themeData,
      isDark: false,
    }
  }
  return [
    dark, light
  ]
}