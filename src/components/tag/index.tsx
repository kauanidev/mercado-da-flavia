import { useMemo } from "react";
import {
  Croissant,
  Sandwich,
  Milk,
  Beef,
  Apple,
  Carrot,
  Slack,
  Cookie,
  Hand,
  Droplet,
  Plus,
} from "lucide-react";
import clsx from "clsx";

type TagProps = {
  value: string;
};

export const Tag = ({ value }: TagProps) => {
  const tagDetails = useMemo(() => {
    switch (value) {
      case "PADARIA":
        return {
          icon: <Croissant />,
          className: "text-apoio-yellow bg-apoio-yellow-dark",
        };
      case "FRIOS":
        return {
          icon: <Sandwich />,
          className: "text-apoio-blue bg-apoio-blue-dark",
        };
      case "BEBIDAS":
        return {
          icon: <Milk />,
          className: "text-white bg-apoio-white-dark",
        };
      case "CARNES":
        return {
          icon: <Beef />,
          className: "text-apoio-pink bg-apoio-pink-dark",
        };
      case "FRUTAS":
        return {
          icon: <Apple />,
          className: "text-apoio-green bg-apoio-green-dark",
        };
      case "LEGUMES":
        return {
          icon: <Carrot />,
          className: "text-apoio-orange bg-apoio-orange-dark",
        };
      case "BASICOS":
        return {
          icon: <Slack />,
          className: "text-apoio-red bg-apoio-red-dark",
        };
      case "GULOSEIMAS":
        return {
          icon: <Cookie />,
          className: "text-apoio-brown bg-apoio-brown-dark",
        };
      case "LIMPEZA":
        return {
          icon: <Hand />,
          className: "text-apoio-purple bg-apoio-purple-dark",
        };
      case "HIGIENE":
        return {
          icon: <Droplet />,
          className: "text-apoio-cyan bg-apoio-cyan-dark",
        };
      default:
        return {
          icon: null,
          className: "",
        };
    }
  }, [value]);

  return (
    <span
      className={clsx(
        "py-2 px-4 rounded-full flex items-center justify-center text-xs font-semibold gap-2 [&_svg]:w-4 [&_svg]:h-4",
        tagDetails.className
      )}
    >
      {tagDetails.icon}
      {value.toLowerCase()}
    </span>
  );
};
