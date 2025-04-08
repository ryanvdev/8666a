import { generateDefaultScreenshot, ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'rosewood',
  isDark: false,
  title: 'Gổ Từ Đàn',
  createdAt: new Date(2025, 4, 6),
  price: 10.0,
  colorGroups: [
    'blue', 'red', 'orange',
  ],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: 'rosewood',
  }
}

export const rosewoodTheme: ThemeConfigDetail[] = segmentDarkLight(config);