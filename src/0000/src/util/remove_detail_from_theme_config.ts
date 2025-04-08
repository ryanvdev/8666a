import { ThemeConfigDetail, ThemeConfig } from "../types";

export function removeDetailFromThemeConfig(v: ThemeConfigDetail): ThemeConfig {
  return {
    key: v.key,
    isDark: v.isDark,
    title: v.title,
    colorGroups: v.colorGroups,
    createdAt: v.createdAt,
    price: v.price,
    screenshots: v.screenshots,
  }
}