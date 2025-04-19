export type SchemeString =
  | "material"
  | "materialHc"
  | "blue"
  | "indigo"
  | "hippieBlue"
  | "aquaBlue"
  | "brandBlue"
  | "deepBlue"
  | "sakura"
  | "mandyRed"
  | "red"
  | "redWine"
  | "purpleBrown"
  | "green"
  | "money"
  | "jungle"
  | "greyLaw"
  | "wasabi"
  | "gold"
  | "mango"
  | "amber"
  | "vesuviusBurn"
  | "deepPurple"
  | "ebonyClay"
  | "barossa"
  | "shark"
  | "bigStone"
  | "damask"
  | "bahamaBlue"
  | "mallardGreen"
  | "espresso"
  | "outerSpace"
  | "blueWhale"
  | "sanJuanBlue"
  | "rosewood"
  | "blumineBlue"
  | "flutterDash"
  | "materialBaseline"
  | "verdunHemlock"
  | "dellGenoa"
  | "redM3"
  | "pinkM3"
  | "purpleM3"
  | "indigoM3"
  | "blueM3"
  | "cyanM3"
  | "tealM3"
  | "greenM3"
  | "limeM3"
  | "yellowM3"
  | "orangeM3"
  | "deepOrangeM3"
  | "blackWhite"
  | "greys"
  | "sepia"
  | "custom";

export const listScheme: readonly SchemeString[] = Object.freeze([
  "material",
  "materialHc",
  "blue",
  "indigo",
  "hippieBlue",
  "aquaBlue",
  "brandBlue",
  "deepBlue",
  "sakura",
  "mandyRed",
  "red",
  "redWine",
  "purpleBrown",
  "green",
  "money",
  "jungle",
  "greyLaw",
  "wasabi",
  "gold",
  "mango",
  "amber",
  "vesuviusBurn",
  "deepPurple",
  "ebonyClay",
  "barossa",
  "shark",
  "bigStone",
  "damask",
  "bahamaBlue",
  "mallardGreen",
  "espresso",
  "outerSpace",
  "blueWhale",
  "sanJuanBlue",
  "rosewood",
  "blumineBlue",
  "flutterDash",
  "materialBaseline",
  "verdunHemlock",
  "dellGenoa",
  "redM3",
  "pinkM3",
  "purpleM3",
  "indigoM3",
  "blueM3",
  "cyanM3",
  "tealM3",
  "greenM3",
  "limeM3",
  "yellowM3",
  "orangeM3",
  "deepOrangeM3",
  "blackWhite",
  "greys",
  "sepia",
  "custom",
] as SchemeString[]);


export const setSchemeString = new Set(listScheme);
