import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "brand_blue",
  isDark: false,
  title: "Màu xanh thương hiệu",
  createdAt: new Date("2025-04-19T15:13:57.316Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "brandBlue",
  },
};

export const brandBlueTheme: ThemeConfigDetail[] = segmentDarkLight(config);
