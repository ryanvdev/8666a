import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'pink_m3',
  isDark: false,
  title: 'Hồng Tự Do',
  createdAt: new Date('2025-04-09T12:41:10.079Z'),
  price: defPrices[0],
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