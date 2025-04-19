import { defPrices, generateDefaultScreenshot } from "../../../config";
import { ThemeConfigDetail } from "../../../types";
import { segmentDarkLight } from "../../../util/segment_dark_light";

const config: ThemeConfigDetail = {
  key: "indigo",
  isDark: false,
  title: "Màu chàm",
  createdAt: new Date("2025-04-19T15:46:26.759Z"),
  price: defPrices[0],
  colorGroups: [],
  screenshots: generateDefaultScreenshot(),
  themeData: {
    isDark: false,
    scheme: "indigo",
  },
};

export const indigoTheme: ThemeConfigDetail[] = segmentDarkLight(config);
