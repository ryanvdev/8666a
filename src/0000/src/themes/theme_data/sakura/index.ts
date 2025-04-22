import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "sakura",
  isDark: false,
  title: "Hoa Anh Đào",
  createdAt: new Date("2025-04-22T14:57:32.131Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "sakura",
  },
};

export const sakuraTheme: ThemeConfigDetail[] = segmentDarkLight(config);
