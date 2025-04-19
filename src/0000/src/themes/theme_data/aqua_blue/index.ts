import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "aqua_blue",
  isDark: false,
  title: "Xanh lam nhạt",
  createdAt: new Date("2025-04-19T15:51:49.720Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "aquaBlue",
  },
};

export const aquaBlueTheme: ThemeConfigDetail[] = segmentDarkLight(config);
