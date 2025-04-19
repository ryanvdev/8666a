import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "purple_m_3",
  isDark: false,
  title: "Tím GM3",
  createdAt: new Date("2025-04-19T15:34:53.946Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "purpleM3",
  },
};

export const purpleM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);
