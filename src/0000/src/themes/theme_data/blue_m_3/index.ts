import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "blue_m_3",
  isDark: false,
  title: "Xanh dương GM3",
  createdAt: new Date("2025-04-19T15:40:28.278Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "blueM3",
  },
};

export const blueM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);
