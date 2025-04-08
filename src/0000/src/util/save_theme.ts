import * as fs from 'node:fs';
import { ThemeConfigDetail, ThemeConfig } from "../types";
import path from 'node:path';


const themeDir = path.join(__dirname, '../../../../docs/0000/theme');

export async function saveListThemeConfig(v: ThemeConfig[]) {
  const json = JSON.stringify(v);
  const filePath = path.join(themeDir, 'index.json');
  fs.writeFileSync(filePath, json);
}

export async function saveThemeConfigDetail(v: ThemeConfigDetail) {
  const json = JSON.stringify(v);
  const dirPath: string = path.join(themeDir, v.key);
  const filePath: string = path.join(dirPath, 'index.json');

  if (fs.existsSync(dirPath) == false) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, json);
}