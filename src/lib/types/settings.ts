import { NextOptions } from "./next";

export type Settings = Omit<NextOptions, "name"> & {};
export const defaultSettings: NextOptions = {
  name: "my-app",
  tailwind: true,
  eslint: true,
  app: false,
  importAlias: "@/*",
  srcDir: true,
  lang: "ts",
  skipInstall: false,
  cli: "npm",
  shadcnUi: false,
};
