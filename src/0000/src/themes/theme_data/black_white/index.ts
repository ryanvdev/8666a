import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "black_white",
  isDark: false,
  title: "Trắng & Đen",
  createdAt: new Date("2025-04-22T14:28:01.053Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "blackWhite",
  },
};

export const blackWhiteTheme: ThemeConfigDetail[] = segmentDarkLight(config);
