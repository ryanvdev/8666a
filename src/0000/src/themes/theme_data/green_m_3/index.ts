import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "green_m_3",
  isDark: false,
  title: "Xanh lá GM3",
  createdAt: new Date("2025-04-19T15:36:04.781Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "greenM3",
  },
};

export const greenM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);
