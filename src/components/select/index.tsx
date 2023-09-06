import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type SelectDropdownProps = {
  options: {
    label: string;
    value: string;
    icon?: ReactNode;
  }[];
  className?: string;
  label?: string;
  value?: string;
  setValue: (value: string) => void;
};

export const SelectDropdown = ({
  options,
  className,
  label,
  value,
  setValue,
}: SelectDropdownProps) => {
  return (
    <div>
      {label && (
        <label className="text-xs text-gray-200 mb-2 block">{label}</label>
      )}
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger
          className={clsx(
            "bg-gray-400 h-10 border border-gray-300 rounded-md flex items-center justify-between focus:outline-none text-gray-100 text-sm px-3 focus:border-purple-light transition-colors",
            className
          )}
        >
          <Select.Value placeholder="Selecione" />
          <Select.Icon>
            <ChevronDown className="w-4 h-4 text-gray-200" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={3}
            className="bg-gray-400 border-gray-400 w-[var(--radix-select-trigger-width)] rounded-md overflow-hidden"
          >
            <Select.Viewport>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="h-10 text-sm text-gray-100 px-3 [&_svg]:w-4 [&_svg]:h-4 flex items-center justify-between outline-none cursor-pointer [&+&]:border-t [&+&]:border-t-gray-300 hover:bg-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {option?.icon && option.icon}
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </div>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
