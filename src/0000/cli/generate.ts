import { Command } from "commander";
import { genFlex } from "./commands/gen_flex";

const program = new Command();

program
  .name("Generate Theme")
  .description("Tạo theme mới mỗi ngày")
  .version("0.8.0");

program.command("gen-flex").argument('<string>', 'FlexScheme name').option(
  '--name <string>', 'Tên theme'
).action(async function(schemeName, options) {
  await genFlex(schemeName, options.name);
});


// generate

program.parse();