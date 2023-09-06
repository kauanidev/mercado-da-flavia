import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { Check } from "lucide-react";

type CheckboxProps = {
  value: boolean;
  setValue: (value: boolean) => void;
};

export const Checkbox = ({ value, setValue }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      checked={value}
      onCheckedChange={setValue}
      className={clsx(
        "w-4 h-4 rounded-sm border border-purple-light flex items-center justify-center",
        {
          "!border-feedback-success !bg-feedback-success": value,
        }
      )}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="w-2.5 text-gray-100" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
