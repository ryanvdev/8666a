import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "black_white",
  isDark: false,
  title: "Trắng & Đen",
  createdAt: new Date("2026-04-20T17:39:01.249Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "blackWhite",
  },
};

export const blackWhiteTheme: ThemeConfigDetail[] = segmentDarkLight(config);
