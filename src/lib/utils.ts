import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CLI, NextOptions } from "./types/next";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const getNextCmd = (cli: CLI) => {
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

const getShadcnCmd = (cli: CLI) => {
  switch (cli) {
    case "pnpm":
      return "pnpm dlx shadcn-ui@latest init";
    case "bun":
      return "bunx --bun shadcn-ui@latest init";
    default:
      return "npx shadcn-ui@latest init";
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
  skipInstall,
}: NextOptions): string => {
  return `${getNextCmd(cli)} 
  ${name} 
  --${lang} 
  ${tailwind ? "--tailwind" : "--no-tailwind"}
  ${eslint ? "--eslint" : "--no-eslint"}
  ${app ? "--app" : "--no-app"}
  ${srcDir ? "--src-dir" : "--no-src-dir"} 
  --import-alias "${importAlias}" 
  ${skipInstall ? "--skip-install" : ""}
  --use-${cli}
  && cd ${name}/
  && ${getShadcnCmd(cli)}`
    .replace(/\n/g, "")
    .replace(/\s+/g, " ");
};
