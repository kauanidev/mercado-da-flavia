import { Input } from "../input";
import { SelectDropdown } from "../select";

const quantityOptions = [
  {
    label: "Un.",
    value: "UNIDADE",
  },
  {
    label: "L",
    value: "LITRO",
  },
  {
    label: "g",
    value: "GRAMAS",
  },
];

type QuantityInputProps = {
  quantity: number;
  setQuantity: (value: number) => void;
  quantityType: string;
  setQuantityType: (value: string) => void;
};

export const QuantityInput = ({
  quantity,
  setQuantity,
  quantityType,
  setQuantityType,
}: QuantityInputProps) => {
  return (
    <div>
      <label className="text-xs text-gray-200 mb-2 block">Quantidade</label>
      <div className="w-full grid grid-cols-[1fr,72px]">
        <Input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="rounded-r-none border-r-none"
        />
        <SelectDropdown
          options={quantityOptions}
          className="w-full rounded-l-none"
          value={quantityType}
          setValue={setQuantityType}
        />
      </div>
    </div>
  );
};
