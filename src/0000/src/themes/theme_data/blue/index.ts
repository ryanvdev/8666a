import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'blue',
  isDark: false,
  title: 'Xanh Đại Dương',
  createdAt: new Date('2025-04-06T12:12:10.079Z'),
  price: defPrices[0],
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