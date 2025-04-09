import { listThemeConfigDetail } from "./themes";
import { ThemeConfig } from "./types";
import { saveThemeConfigDetail, saveListThemeConfig } from "./util/save_theme";
import { removeDetailFromThemeConfig } from "./util/remove_detail_from_theme_config";


async function main() {
  const themeIndex: ThemeConfig[] = listThemeConfigDetail.map(removeDetailFromThemeConfig);
  themeIndex.sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;

    if (a.isDark && (b.isDark == false)) {
      return -1;
    }

    if ((a.isDark == false) && b.isDark) {
      return 1;
    }

    return 0;
  });
  await saveListThemeConfig(themeIndex);

  for (const themeConfig of listThemeConfigDetail) {
    await saveThemeConfigDetail(themeConfig);
  }
}

main();