import React from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "./ui/form";
import { Checkbox } from "./ui/checkbox";
import { UseControllerProps, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { NextStarterFormSchema } from "@/lib/data/form";
import { CheckedState } from "@radix-ui/react-checkbox";

interface CheckboxFormFieldProps {
  name: UseControllerProps<z.infer<typeof NextStarterFormSchema>>["name"];
  label: string;
  description: string;
  form: UseFormReturn<z.infer<typeof NextStarterFormSchema>>;
  disabled?: boolean;
}

const CheckboxFormField = ({
  name,
  label,
  description,
  form,
  disabled = false,
}: CheckboxFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
          <FormControl>
            <Checkbox
              checked={field.value as CheckedState}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CheckboxFormField;
