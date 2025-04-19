import path from "node:path";
import { setSchemeString } from "../../src/scheme_string";
import _ from "lodash";
import prettier from "prettier";
import fs from "node:fs";

const themeDataDir = path.join(__dirname, "../../src/themes/theme_data");
const generatedJsonFile = path.join(__dirname, "../../gen/generated.json");

export async function genFlex(scheme: string, name?: string) {
  if (setSchemeString.has(scheme as any) == false) {
    console.log(`Invalid scheme = ${scheme}`);
    return;
  }
  const key = _.snakeCase(scheme);
  const dirPath = path.join(themeDataDir, key);
  const filePath = path.join(dirPath, "index.ts");

  const oldGeneratedScheme: string[] = JSON.parse(
    fs.readFileSync(generatedJsonFile, { encoding: "utf8" })
  );
  const newGeneratedScheme = _.uniq([...oldGeneratedScheme, scheme]);
  await saveCodeIndexGenCode(newGeneratedScheme);

  const strCode = [
    `import { defPrices, generateDefaultScreenshot } from "../../../config";`,
    `import { ThemeConfigDetail } from "../../../types";`,
    `import { segmentDarkLight } from "../../../util/segment_dark_light";`,
    "",
    `const config: ThemeConfigDetail = {`,
    `  key: "${key}",`,
    `  isDark: false,`,
    `  title: "${name || scheme}",`,
    `  createdAt: new Date("${new Date().toJSON()}"),`,
    `  price: defPrices[0],`,
    `  colorGroups: [],`,
    `  screenshots: generateDefaultScreenshot(),`,
    `  themeData: {`,
    `    isDark: false,`,
    `    scheme: "${scheme}",`,
    `  },`,
    `};`,
    "",
    `export const ${scheme}Theme: ThemeConfigDetail[] = segmentDarkLight(config);`,
  ].join("\n");

  const strFormattedCode = await prettier.format(strCode, {
    parser: "typescript",
  });

  await fs.writeFileSync(
    generatedJsonFile,
    await prettier.format(JSON.stringify(newGeneratedScheme), {
      parser: "json",
    }),
    {
      encoding: "utf8",
    }
  );

  // Tạo thư mục
  if (fs.existsSync(dirPath) == false) {
    fs.mkdirSync(dirPath);
  }

  // Ghi file
  fs.writeFileSync(filePath, strFormattedCode, {
    encoding: "utf8",
  });

  console.log(filePath);
}

async function saveCodeIndexGenCode(v: string[]) {
  const codeImport = v.map((schemeName) => {
    const themeFileName: string = _.snakeCase(schemeName);
    return `import { ${schemeName}Theme } from "./${themeFileName}";`;
  });

  const codeExport: string[] = v.map((schemeName) => {
    return `  ...${schemeName}Theme,`;
  });

  const code = [
    `import { ThemeConfigDetail } from "../../types";`,
    "// Generated import",
    ...codeImport,
    "",
    "",
    `export const listGenThemeConfigDetail: ThemeConfigDetail[] = [`,
    "// Generated export",
    ...codeExport,
    `];`,
  ].join("\n");
  const formattedCode = await prettier.format(code, {
    parser: "typescript",
  });

  fs.writeFileSync(path.join(themeDataDir, "index.gen.ts"), formattedCode, {
    encoding: "utf8",
  });
}
