import * as fs from "node:fs";
import { ThemeConfigDetail, ThemeConfig } from "../types";
import path from "node:path";
import prettier from "prettier";

const themeDir = path.join(__dirname, "../../../../docs/0000/theme");

export async function saveListThemeConfig(v: ThemeConfig[]) {
  const json = JSON.stringify(v);
  const formattedJson = await prettier.format(json, {
    parser: "json",
  });

  const filePath = path.join(themeDir, "index.json");
  fs.writeFileSync(filePath, formattedJson, { encoding: "utf8" });
}

export async function saveThemeConfigDetail(v: ThemeConfigDetail) {
  const json = JSON.stringify(v);
  const dirPath: string = path.join(themeDir, v.key);
  const imagesDirPath = path.join(dirPath, "images");
  const filePath: string = path.join(dirPath, "index.json");

  if (fs.existsSync(dirPath) == false) {
    fs.mkdirSync(dirPath);
  }


  // Tạo thư mục ảnh rỗng
  if (fs.existsSync(imagesDirPath) == false) {
    fs.mkdirSync(imagesDirPath);
    for (const imageFilename of v.screenshots) {
      fs.writeFileSync(path.join(imagesDirPath, imageFilename), "", {
        encoding: "utf8",
      });
    }
  }

  fs.writeFileSync(filePath, json, { encoding: "utf8" });
}
