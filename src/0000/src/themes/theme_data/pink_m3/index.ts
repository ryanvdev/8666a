import { generateDefaultScreenshot, ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'pink_m3',
  isDark: false,
  title: 'Hồng Tự Do',
  createdAt: new Date(2025, 4, 10),
  price: 10.0,
  colorGroups: [
    'blue', 'red', 'orange',
  ],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: 'pinkM3',
  }
}

export const pinkM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);