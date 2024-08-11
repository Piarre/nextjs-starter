import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextOptions } from "./types/next";
import { CLI } from "@/pages";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const getCLIX = (cli: CLI) => {
  switch (cli) {
    case "npm":
      return "npx create-next-app@latest";
    case "yarn":
      return "yarn create next-app";
    case "pnpm":
      return "pnpm create next-app";
    case "bun":
      return "bun create next-app";
  }
};

export const CreateCommand = ({
  app,
  cli,
  eslint,
  importAlias,
  lang,
  name,
  srcDir,
  tailwind,
}: NextOptions): string => {
  return `${getCLIX(cli)} 
  ${name} 
  --${lang} 
  ${tailwind ? "--tailwind" : "--no-tailwind"}
  ${eslint ? "--eslint" : "--no-eslint"}
  ${app ? "--app" : "--no-app"}
  ${srcDir ? "--src-dir" : "--no-src-dir"} 
  --import-alias \"${importAlias}\" 
  --use-${cli}`
    .replace(/\n/g, "")
    .replace(/\s+/g, " ");
};
