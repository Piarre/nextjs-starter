import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextOptions } from "./types/next";
import { NextCMD, ShadcnCMD } from "./data/cli";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const CreateCommand = ({
  app,
  cli,
  eslint,
  importAlias,
  lang,
  name,
  srcDir,
  tailwind,
  skipInstall,
  shadcnUi,
}: NextOptions): string => {
  return `${NextCMD[cli]} 
  ${name} 
  --${lang} 
  ${tailwind ? "--tailwind" : "--no-tailwind"}
  ${eslint ? "--eslint" : "--no-eslint"}
  ${app ? "--app" : "--no-app"}
  ${srcDir ? "--src-dir" : "--no-src-dir"} 
  --import-alias "${importAlias}" 
  ${skipInstall ? "--skip-install" : ""}
  --use-${cli}
  ${
    shadcnUi
      ? `&& cd ${name}/
  && ${ShadcnCMD[cli]}`
      : ""
  }`
    .replace(/\n/g, "")
    .replace(/\s+/g, " ");
};
