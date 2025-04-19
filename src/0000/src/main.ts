import { listThemeConfigDetail } from "./themes";
import { ThemeConfig } from "./types";
import { saveThemeConfigDetail, saveListThemeConfig } from "./util/save_theme";
import { removeDetailFromThemeConfig } from "./util/remove_detail_from_theme_config";
import _ from "lodash";
import { listScheme } from "./scheme_string";
import { saveRemainingScheme } from "./util/save_remaining_scheme";

// function brightnessToInt(isDark: boolean): number {
//   if (isDark) return 1;
//   return 0;
// }

// function compare<T>(a: T, b: T): number {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// }

async function main() {
  const themeIndex: ThemeConfig[] = listThemeConfigDetail.map(
    removeDetailFromThemeConfig
  );

  const sortedThemes = _.orderBy(
    themeIndex,
    [(e) => e.createdAt.getTime(), "isDark", "title"],
    "desc"
  );

  const listResolvedScheme = listThemeConfigDetail
    .map((e) => e.themeData.scheme)
    .filter((e) => e != null);

  await saveRemainingScheme(listResolvedScheme);

  await saveListThemeConfig(sortedThemes);

  for (const themeConfig of listThemeConfigDetail) {
    await saveThemeConfigDetail(themeConfig);
  }
}

main();
