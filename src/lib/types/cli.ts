const CLIs = ["npm", "yarn", "pnpm", "bun"] as const;

type CLI = (typeof CLIs)[number];

type CMD<T = string> = Record<CLI, T>;

export { type CLI, type CMD, CLIs };
