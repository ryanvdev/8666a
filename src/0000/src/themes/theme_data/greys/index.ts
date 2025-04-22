import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "greys",
  isDark: false,
  title: "Màu xám",
  createdAt: new Date("2025-04-22T14:28:59.513Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "greys",
  },
};

export const greysTheme: ThemeConfigDetail[] = segmentDarkLight(config);
