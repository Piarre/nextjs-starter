import { z } from "zod";
import regex from "./regex";
import { CLIs } from "../types/cli";
import { Item } from "../types/form";
import { toast } from "sonner";

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

export const UnvailableToastAPI = () =>
  toast.error("API is currently not availabe", {
    description: "Only generated command is available.",
    action: {
      label: "Status",
      onClick: () => window.open("https://status.start.piarre.app", "_blank"),
    },
    duration: 3000,
    closeButton: true,
  });

export const Items: Item[] = [
  { name: "app", label: "App", description: "Initialize as an App Router project." },
  {
    name: "srcDir",
    label: "Source directory (src)",
    description: "Initialize with a src directory.",
  },
  { name: "eslint", label: "ESLint", description: "Initialize with ESLint config" },
] as const;
