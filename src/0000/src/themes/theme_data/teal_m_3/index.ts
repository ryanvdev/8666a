import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "teal_m_3",
  isDark: false,
  title: "Xanh mòng két GM3",
  createdAt: new Date("2025-04-19T15:35:32.730Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "tealM3",
  },
};

export const tealM3Theme: ThemeConfigDetail[] = segmentDarkLight(config);
