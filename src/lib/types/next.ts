import { z } from "zod";
import { NextStarterFormSchema } from "../data/form";

type Options = z.infer<typeof NextStarterFormSchema>;

interface NextFileTreeProps {
  name: string;
  eslint?: boolean;
  tailwind?: boolean;
  srcDir?: boolean;
  app?: boolean;
  cli?: CLI;
  lang: "js" | "ts";
  shadcUi?: boolean;
}

const CLIs = ["npm", "yarn", "pnpm", "bun"] as const;
type CLI = (typeof CLIs)[number];

export { type Options as NextOptions, CLIs, type CLI, type NextFileTreeProps };
