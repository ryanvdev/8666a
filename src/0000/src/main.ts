import { listThemeConfigDetail } from "./themes";
import { ThemeConfig } from "./types";
import { saveThemeConfigDetail, saveListThemeConfig } from "./util/save_theme";
import { removeDetailFromThemeConfig } from "./util/remove_detail_from_theme_config";


async function main() {
  const themeIndex: ThemeConfig[] = listThemeConfigDetail.map(removeDetailFromThemeConfig);
  await saveListThemeConfig(themeIndex);

  for (const themeConfig of listThemeConfigDetail) {
    await saveThemeConfigDetail(themeConfig);
  }
}

main();