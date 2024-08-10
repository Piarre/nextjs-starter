"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { cn, CreateCommand } from "@/lib/utils";
import { ChevronRightIcon, Copy } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const CLIs = ["npm", "yarn", "pnpm", "bun"] as const;
export type CLI = (typeof CLIs)[number];

const Items = [
  { name: "app", label: "App", description: "Initialize as an App Router project." },
  {
    name: "srcDir",
    label: "Source directory (src)",
    description: "Initialize with a src directory.",
  },
  {
    name: "tailwind",
    label: "Tailwind",
    description: "Initialize with Tailwind CSS config. (Default)",
  },
  { name: "eslint", label: "ESLint", description: "Initialize with ESLint config" },
];

export default function Home() {
  const [command, setCommand] = useState<string>("");
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false);

  const formSchema = z.object({
    name: z
      .string()
      .regex(/^(?:(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?\/[a-z0-9-._~])|[a-z0-9-~])[a-z0-9-._~]*$/, {
        message: "Invalid app name. Must be a valid npm package name.",
      }),
    tailwind: z.boolean(),
    eslint: z.boolean(),
    app: z.boolean(),
    srcDir: z.boolean(),
    importAlias: z.string(),
    lang: z.union([z.literal("ts"), z.literal("js")]),
    cli: z.enum(CLIs),
    shadcnUi: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "myApp",
      tailwind: true,
      eslint: true,
      app: false,
      importAlias: "@/*",
      srcDir: true,
      lang: "ts",
      cli: "npm",
      shadcnUi: false,
    },
  });

  useEffect(() => {
    setCommand(CreateCommand(form.getValues()));
    form.watch((value) => setCommand(CreateCommand(value as any)));
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCommand(CreateCommand(values));
  }

  return (
    <>
      <div className="max-w-2xl mx-auto py-6 sm:py-12 px-6">
        <div className="flex justify-center items-center pb-4">
          <h1 className="text-4xl font-bold">Kepa&apos;s starter</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App name</FormLabel>
                  <FormControl aria-autocomplete="none">
                    <Input aria-autocomplete="none" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <div className="flex gap-4 justify-evenly">
                    <Button
                      type="button"
                      variant={form.getValues().lang == "js" ? "destructive" : "secondary"}
                      onClick={() => form.setValue("lang", "js")}
                      {...field}
                    >
                      JavaScript
                    </Button>
                    <Button
                      type="button"
                      variant={form.getValues().lang == "ts" ? "destructive" : "secondary"}
                      onClick={() => form.setValue("lang", "ts")}
                      {...field}
                    >
                      TypeScript
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              {Items.map(({ name, label, description }, x) => (
                <FormField
                  key={x}
                  control={form.control}
                  name={name as any}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>{label}</FormLabel>
                        <FormDescription>{description}</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormField
              control={form.control}
              name="cli"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CLI</FormLabel>
                  <FormDescription>Choose your package manager.</FormDescription>
                  <FormControl>
                    <div className="flex gap-4 justify-evenly">
                      {Object.values(CLIs).map((x, i) => (
                        <Button
                          key={i}
                          type="button"
                          onClick={() => form.setValue("cli", x)}
                          variant={form.getValues().cli === x ? "destructive" : "secondary"}
                          data-state={form.getValues().cli === x ? "active" : "inactive"}
                          {...field}
                        >
                          {x}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div>
              <Button
                type="button"
                onClick={() => setIsAdvanced(!isAdvanced)}
                variant={"link"}
                className="p-0"
              >
                <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm group">
                  Advanced options
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100",
                      isAdvanced ? "rotate-90" : "rotate-0",
                    )}
                  />
                </h3>
              </Button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isAdvanced ? 1 : 0,

                  height: isAdvanced ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-xs sm:text-sm"
              >
                <FormField
                  control={form.control}
                  name={"shadcnUi"}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-secondary">Add Shadcn/UI</FormLabel>
                        <FormDescription className="text-secondary">
                          Implementing Next Themes
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>
            <div className="flex w-full items-center gap-2 min-h-28">
              <Textarea disabled value={command} className="resize-none" />
              <Button
                size={"icon"}
                type="button"
                variant={"outline"}
                onClick={() => navigator.clipboard.writeText(command)}
              >
                <Copy className="size-4" />
              </Button>
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full">
                Generate
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
