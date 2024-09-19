import { CMD } from "@/lib/types/cli";

const NextCMD: CMD = {
  npm: "npx create-next-app@latest",
  yarn: "yarn create next-app",
  pnpm: "pnpm create next-app",
  bun: "bun create next-app",
} as const;

const ShadcnCMD: CMD = {
  npm: "npx shadcn@latest init --defaults",
  yarn: "npx shadcn@latest init --defaults",
  pnpm: "pnpm dlx shadcn@latest init --defaults",
  bun: "bunx --bun shadcn@latest init --defaults",
} as const;

export { NextCMD, ShadcnCMD };
