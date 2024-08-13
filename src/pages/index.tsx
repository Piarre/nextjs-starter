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
import { useEffect, useRef, useState } from "react";
import { cn, CreateCommand } from "@/lib/utils";
import { ChevronRightIcon, Copy, RotateCcw } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CLIs } from "@/lib/types/next";
import { NextStarterFormSchema } from "@/lib/data/form";
import CheckboxFormField from "@/components/checkbox-form-field";
import { Tree } from "@/components/magicui/file-tree";
import { NextFileTree } from "@/lib/data/file-tree";
import regex from "@/lib/data/regex";

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
] as const;

export default function Home() {
  const [command, setCommand] = useState<string>("");
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false);

  const form = useForm<z.infer<typeof NextStarterFormSchema>>({
    resolver: zodResolver(NextStarterFormSchema),
    defaultValues: {
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
    },
  });

  useEffect(() => {
    const formValues = form.getValues();

    setCommand(CreateCommand(formValues));

    form.watch((value) => {
      const appNameValue = formValues.name;
      const importAliasValue = formValues.importAlias;

      appNameValue.match(regex.name)
        ? form.clearErrors("name")
        : form.setError("name", { message: "Invalid app name. Must be a valid npm package name." });

      importAliasValue.match(regex.importAlias)
        ? form.clearErrors("importAlias")
        : form.setError("importAlias", {
            message: "Invalid import alias. Must be a valid import alias.",
          });

      setCommand(CreateCommand(value as any));
    });
  }, [form]);

  const onSubmit = (values: z.infer<typeof NextStarterFormSchema>) =>
    setCommand(CreateCommand(values));

  return (
    <div className="w-full flex py-6 sm:py-12 px-6">
      <div className="w-full">
        <div className="max-w-2xl mx-auto">
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
                <FormLabel>Features</FormLabel>
                {Items.map(({ name, label, description }, x) => (
                  <CheckboxFormField
                    key={x}
                    name={name}
                    description={description}
                    label={label}
                    form={form}
                  />
                ))}
                <FormField
                  control={form.control}
                  name="importAlias"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Import alias</FormLabel>
                      <FormControl aria-autocomplete="none" className="w-full">
                        <div className="flex w-full items-center gap-2">
                          <Input aria-autocomplete="none" type="text" {...field} />
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size={"icon"}
                                type="button"
                                variant={"outline"}
                                onClick={() => form.setValue("importAlias", "@/*")}
                              >
                                <RotateCcw className="size-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Reset</TooltipContent>
                          </Tooltip>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  <CheckboxFormField
                    name="shadcnUi"
                    description={"Implementing Next Themes"}
                    label={"Add Shadcn/UI"}
                    form={form}
                    disabled
                  />
                  <CheckboxFormField
                    name="skipInstall"
                    description={"Skip installing dependencies"}
                    label={"Skip install"}
                    form={form}
                  />
                </motion.div>
              </div>
              <div className="flex w-full items-center gap-2 min-h-28 relative">
                <Textarea disabled value={command} className="resize-none" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size={"icon"}
                      type="button"
                      variant={"outline"}
                      onClick={() => navigator.clipboard.writeText(command)}
                    >
                      <Copy className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy command</TooltipContent>
                </Tooltip>
              </div>
              <div className="w-full">
                <Button type="submit" className="w-full">
                  Generate
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-1/3">
        <Tree
          initialExpandedItems={Array.from({ length: 31 }, (_, i) => i.toString())}
          className="font-medium"
        >
          <NextFileTree
            name={form.getValues().name}
            lang={form.getValues().lang}
            app={form.getValues().app}
            srcDir={form.getValues().srcDir}
            tailwind={form.getValues().tailwind}
            eslint={form.getValues().eslint}
            cli={form.getValues().cli}
            shadcUi={form.getValues().shadcnUi}
          />
        </Tree>
      </div>
    </div>
  );
}
