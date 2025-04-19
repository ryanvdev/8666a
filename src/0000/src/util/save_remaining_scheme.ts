import path from "path";
import { listScheme, SchemeString } from "../scheme_string";
import prettier from "prettier";
import fs from "node:fs";
import _ from "lodash";

const filePath = path.join(__dirname, "../../gen/remaining_scheme_string.ts");

export async function saveRemainingScheme(resolvedSchemes: SchemeString[]) {
  const remainingSchemes = _.difference(listScheme, resolvedSchemes);

  const savedList:string[] = [];
  for(const item of remainingSchemes){
    savedList.push(`  '${item}',`);
  }
  for(const item of resolvedSchemes){
    savedList.push(`  // '${item}',`);
  }

  const rawCode = `[\n${savedList.join('\n')}\n];`;

  const strCode = `export const listRemainingScheme = ${rawCode}`;
  const strFormattedCode = await prettier.format(strCode, {
    parser: "typescript",
  });

  fs.writeFileSync(filePath, strFormattedCode, { encoding: "utf8" });
}
