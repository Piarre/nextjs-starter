import { z } from "zod";
import { NextStarterFormSchema } from "../data/form";
import { CLI } from "./cli";

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

export { type Options as NextOptions, type NextFileTreeProps };
