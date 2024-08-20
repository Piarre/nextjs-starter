import { z } from "zod";
import regex from "./regex";
import { CLIs } from "../types/cli";

export const NextStarterFormSchema = z.object({
  name: z.string().min(1).regex(regex.name, {
    message: "Invalid app name. Must be a valid npm package name.",
  }),
  tailwind: z.boolean(),
  eslint: z.boolean(),
  app: z.boolean(),
  srcDir: z.boolean(),
  importAlias: z.string().min(1).regex(regex.importAlias, {
    message: "Invalid import alias. Must be a valid import alias.",
  }),
  lang: z.union([z.literal("ts"), z.literal("js")]),
  skipInstall: z.boolean(),
  cli: z.enum(CLIs),
  shadcnUi: z.boolean(),
});
