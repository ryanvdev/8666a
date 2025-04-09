import { ThemeConfigDetail } from "../types";
import { blueTheme } from "./theme_data/blue";
import { cyanM3Theme } from "./theme_data/cyan_m3";
import { greenTheme } from "./theme_data/green";
import { pinkM3Theme } from "./theme_data/pink_m3";
import { rosewoodTheme } from "./theme_data/rosewood";

export const listThemeConfigDetail: ThemeConfigDetail[] = [
  ...blueTheme,
  ...rosewoodTheme,
  ...cyanM3Theme,
  ...pinkM3Theme,
  ...greenTheme,
];