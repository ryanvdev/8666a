import { ThemeConfigDetail } from "../types";
import { blackWhiteTheme } from "./theme_data/black_white";
import { blueTheme } from "./theme_data/blue";
import { cyanM3Theme } from "./theme_data/cyan_m3";
import { greenTheme } from "./theme_data/green";
import { listGenThemeConfigDetail } from "./theme_data/index.gen";
import { pinkM3Theme } from "./theme_data/pink_m3";
import { rosewoodTheme } from "./theme_data/rosewood";

export const listThemeConfigDetail: ThemeConfigDetail[] = [
  // Gen code
  ...listGenThemeConfigDetail,

  // Custom
  ...blueTheme,
  ...rosewoodTheme,
  ...cyanM3Theme,
  ...pinkM3Theme,
  ...greenTheme,
  ...blackWhiteTheme,
];
