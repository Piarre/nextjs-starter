import { z } from "zod";
import { NextStarterFormSchema } from "../data/form";

type Options = z.infer<typeof NextStarterFormSchema>;

const CLIs = ["npm", "yarn", "pnpm", "bun"] as const;
type CLI = (typeof CLIs)[number];

export { type Options as NextOptions, CLIs, type CLI };
