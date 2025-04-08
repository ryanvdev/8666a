import { ThemeConfigDetail } from "../types";
import { blueTheme } from "./theme_data/blue";
import { cyanM3Theme } from "./theme_data/cyan_m3";
import { rosewoodTheme } from "./theme_data/rosewood";

export const listThemeConfigDetail: ThemeConfigDetail[] = [
  ...blueTheme,
  ...rosewoodTheme,
  ...cyanM3Theme,
];