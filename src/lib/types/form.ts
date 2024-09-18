import { UseControllerProps } from "react-hook-form";
import { z } from "zod";
import { NextStarterFormSchema } from "../data/form";

export type Item = {
  name: UseControllerProps<z.infer<typeof NextStarterFormSchema>>["name"];
  label: string;
  description: string;
  require?: UseControllerProps<z.infer<typeof NextStarterFormSchema>>["name"][];
};
