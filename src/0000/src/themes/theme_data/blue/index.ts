import { generateDefaultScreenshot, ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'blue',
  isDark: false,
  title: 'Xanh Đại Dương',
  createdAt: new Date(2025, 4, 6),
  price: 10.0,
  colorGroups: [
    'blue',
  ],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: 'blue',
  }
}

export const blueTheme: ThemeConfigDetail[] = segmentDarkLight(config);