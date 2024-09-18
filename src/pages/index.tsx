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
import { useEffect, useState } from "react";
import { cn, CreateCommand } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Items, NextStarterFormSchema } from "@/lib/data/form";
import CheckboxFormField from "@/components/checkbox-form-field";
import { Tree } from "@/components/magicui/file-tree";
import regex from "@/lib/data/regex";
import Dock from "@/components/dock";
import { useLocalStorage } from "usehooks-ts";
import { defaultSettings, Settings } from "@/lib/types/settings";
import { NextFileTree } from "@/components/next-file-tree";
import { CLIs } from "@/lib/types/cli";
import { toast } from "sonner";
import { ChevronRightIcon, Copy, RotateCcw } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import DropdownDiv from "@/components/dropdown-div";
import BlurFadeText from "@/components/magicui/blur-fade-text";

export default function Home() {
  const [command, setCommand] = useState<string>("");
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false);
  const [isAPIOnline, setisAPIOnline] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [settings, setSettings] = useLocalStorage<Omit<Settings, "name">>(
    "settings",
    defaultSettings,
  );

  const form = useForm<z.infer<typeof NextStarterFormSchema>>({
    resolver: zodResolver(NextStarterFormSchema),
    defaultValues: settings ?? defaultSettings,
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

      for (const key in value) {
        if (key == "name" || key == "importAlias") continue;
        setSettings((prev) => ({ ...prev, [key]: (value as any)[key] }));
      }

      setCommand(CreateCommand(value as any));
    });
  }, [form, setSettings]);

  useEffect(() => {
    const isAPIAvailable = async () => {
      return await fetch("https://next-starter-api.piarre.app/md5").then((res) => {
        switch (res.status) {
          case 200:
            break;
          case 204:
            break;
          case 404:
            setisAPIOnline(false);
            toast.error("API is currently not availabe", {
              description: "Only generated command is available.",
              action: {
                label: "Status",
                onClick: () => window.open("https://status.start.piarre.app", "_blank"),
              },
              duration: 3000,
              closeButton: true,
            });
            break;
          default:
            setisAPIOnline(false);
            break;
        }
      });
    };

    isAPIAvailable();
  }, []);

  const onSubmit = async (values: z.infer<typeof NextStarterFormSchema>) => {
    setCommand(CreateCommand(values));
    setIsLoading(true);
    await fetch("https://next-starter-api.piarre.app/generate", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(({ link }) => {
        setIsLoading(false);
        toast.success("Successfully generated!", {
          action: {
            label: "Open",
            onClick: () => window.open(link, "_blank"),
          },
          description: "Link available 5 minutes.",
        });
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Failed to generate.");
      });
    setIsLoading(false);
  };

  return (
    <div className="w-full flex py-6 sm:py-12 px-6 mb-10">
      <div className="w-full md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="grid justify-center items-center pb-4">
            <BlurFadeText text="Kepa's starter" className="text-4xl font-bold" />
            <BlurFadeText text="Beta" className="text-xl font-bold bg-primary" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <BlurFade delay={0.2}>
                      <FormLabel>App name</FormLabel>
                    </BlurFade>
                    <FormControl aria-autocomplete="none">
                      <BlurFade delay={0.3}>
                        <Input aria-autocomplete="none" type="text" {...field} />
                      </BlurFade>
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
                    <BlurFade delay={0.4}>
                      <FormLabel>Language</FormLabel>
                    </BlurFade>
                    <div className="flex gap-4 justify-evenly">
                      <BlurFade delay={0.5}>
                        <Button
                          type="button"
                          variant={form.getValues().lang == "js" ? "destructive" : "secondary"}
                          onClick={() => form.setValue("lang", "js")}
                          {...field}
                        >
                          JavaScript
                        </Button>
                      </BlurFade>
                      <BlurFade delay={0.6}>
                        <Button
                          type="button"
                          variant={form.getValues().lang == "ts" ? "destructive" : "secondary"}
                          onClick={() => form.setValue("lang", "ts")}
                          {...field}
                        >
                          TypeScript
                        </Button>
                      </BlurFade>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <BlurFade delay={0.7}>
                  <FormLabel>Features</FormLabel>
                </BlurFade>
                {Items.map(({ name, label, description }, x) => (
                  <BlurFade key={x} delay={0.7 + (x + 1) / 10}>
                    <CheckboxFormField
                      name={name}
                      description={description}
                      label={label}
                      form={form}
                    />
                  </BlurFade>
                ))}
                <BlurFade delay={1}>
                  <CheckboxFormField
                    name="tailwind"
                    label={"TailwindCSS"}
                    description={"Initialize with Tailwind CSS config. (Default)"}
                    form={form}
                    onChange={(e) => !e && form.setValue("shadcnUi", false)}
                  />
                </BlurFade>
                <FormField
                  control={form.control}
                  name="importAlias"
                  render={({ field }) => (
                    <FormItem>
                      <BlurFade delay={1.1}>
                        <FormLabel>Import alias</FormLabel>
                      </BlurFade>
                      <FormControl aria-autocomplete="none" className="w-full">
                        <BlurFade className="flex w-full items-center gap-2" delay={1.2}>
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
                        </BlurFade>
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
                    <BlurFade delay={1.3}>
                      <FormLabel>CLI</FormLabel>
                    </BlurFade>
                    <BlurFade delay={1.4}>
                      <FormDescription>Choose your package manager.</FormDescription>
                    </BlurFade>
                    <FormControl>
                      <div className="flex gap-4 justify-evenly">
                        {Object.values(CLIs).map((x, i) => (
                          <BlurFade key={i} delay={1.5 + (i + 1) / 10}>
                            <Button
                              type="button"
                              onClick={() => form.setValue("cli", x)}
                              variant={form.getValues().cli === x ? "destructive" : "secondary"}
                              data-state={form.getValues().cli === x ? "active" : "inactive"}
                              {...field}
                            >
                              {x}
                            </Button>
                          </BlurFade>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div>
                <BlurFade delay={1.9}>
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
                </BlurFade>
                <DropdownDiv bool={isAdvanced} className="text-xs sm:text-sm">
                  <CheckboxFormField
                    name="shadcnUi"
                    label={"Add Shadcn/UI"}
                    description={"Implementing Next Themes"}
                    form={form}
                    onChange={(e) => {
                      if (e) {
                        form.setValue("tailwind", true);
                        form.setValue("skipInstall", false);
                      }
                    }}
                  />
                  <CheckboxFormField
                    name="skipInstall"
                    label={"Skip install"}
                    description={"Skip installing dependencies"}
                    disabled={form.getValues("shadcnUi")}
                    form={form}
                  />
                </DropdownDiv>
              </div>
              <BlurFade delay={2}>
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
              </BlurFade>
              <BlurFade delay={2.1}>
                <Button
                  type="submit"
                  disabled={isLoading || !isAPIOnline}
                  className=" transition-all w-full flex mx-auto disabled:scale-90"
                >
                  Generate
                </Button>
              </BlurFade>
            </form>
          </Form>
        </div>
      </div>
      <BlurFade className="w-1/3 hidden md:block">
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
      </BlurFade>
      <Dock />
    </div>
  );
}
