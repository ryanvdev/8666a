// green
import { generateDefaultScreenshot, ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'green',
  isDark: false,
  title: 'Xanh Lá Cây',
  createdAt: new Date(2025, 4, 10),
  price: 10.0,
  colorGroups: [
    'green',
  ],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: 'green',
  }
}

export const greenTheme: ThemeConfigDetail[] = segmentDarkLight(config);