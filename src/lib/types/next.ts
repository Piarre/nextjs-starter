import { CLI } from "@/pages";

type Options = {
  name: string;
  lang: "ts" | "js";
  tailwind: boolean;
  eslint: boolean;
  app: boolean;
  srcDir: boolean;
  importAlias: string;
  cli: CLI;
  shadcnUi: boolean;
};

export { type Options as NextOptions };
