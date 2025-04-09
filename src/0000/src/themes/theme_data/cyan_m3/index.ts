import { generateDefaultScreenshot, ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'cyan_m3',
  isDark: false,
  title: 'Lục Lam Tự Do',
  createdAt: new Date(2025, 4, 7),
  price: 10.0,
  colorGroups: [
    'blue', 'violet',
  ],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: 'cyanM3',
  }
}

export const cyanM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);