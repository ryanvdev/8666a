// green
import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: 'green',
  isDark: false,
  title: 'Xanh Lá Cây',
  createdAt: new Date('2025-04-10T12:12:10.079Z'),
  price: defPrices[0],
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