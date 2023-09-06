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
import { Input } from "../input";
import { SelectDropdown } from "../select";
import { QuantityInput } from "../quantity-input";
import { useState } from "react";
import { IListItem } from "../list-item";

const categories = [
  {
    label: "Padaria",
    value: "PADARIA",
    icon: <Croissant className="text-apoio-yellow" />,
  },
  {
    label: "Frios",
    value: "FRIOS",
    icon: <Sandwich className="text-apoio-blue" />,
  },
  {
    label: "Bebidas",
    value: "BEBIDAS",
    icon: <Milk className="text-white" />,
  },
  {
    label: "Carnes",
    value: "CARNES",
    icon: <Beef className="text-apoio-pink" />,
  },
  {
    label: "Frutas",
    value: "FRUTAS",
    icon: <Apple className="text-apoio-green" />,
  },
  {
    label: "Legumes",
    value: "LEGUMES",
    icon: <Carrot className="text-apoio-orange" />,
  },
  {
    label: "Básicos",
    value: "BASICOS",
    icon: <Slack className="text-apoio-red" />,
  },
  {
    label: "Guloseimas",
    value: "GULOSEIMAS",
    icon: <Cookie className="text-apoio-brown" />,
  },
  {
    label: "Limpeza",
    value: "LIMPEZA",
    icon: <Hand className="text-apoio-purple" />,
  },
  {
    label: "Higiene",
    value: "HIGIENE",
    icon: <Droplet className="text-apoio-cyan" />,
  },
];

type HeaderProps = {
  handleAddItem: (item: IListItem) => void;
};

const Header = ({ handleAddItem }: HeaderProps) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [quantityType, setQuantityType] = useState("UNIDADE");
  const [category, setCategory] = useState<string | undefined>(undefined);

  const onAddItem = () => {
    if (!name || !quantity || !quantityType || !category) {
      alert("Preencha todos os campos!");
      return;
    }

    handleAddItem({
      category,
      completed: false,
      name,
      quantity,
      quantityType,
    });

    setName("");
    setQuantity(1);
  };

  return (
    <header className="w-full sm:h-[185px] bg-[url(/header-bg.png)] bg-no-repeat bg-cover bg-center flex items-end justify-center pt-4 sm:pt-0">
      <div className="w-full max-w-[720px] px-4 sm:-mb-5">
        <h1 className="font-bold text-2xl text-gray-100 mb-8">
          Mercado da Flávia
        </h1>
        <div className="grid grid-cols-[1fr] sm:grid-cols-[2fr,1fr,1fr,40px] gap-3">
          <Input
            label="Item"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <QuantityInput
            quantity={quantity}
            setQuantity={setQuantity}
            quantityType={quantityType}
            setQuantityType={setQuantityType}
          />
          <SelectDropdown
            options={categories}
            label="Categoria"
            className="w-full"
            value={category}
            setValue={setCategory}
          />
          <button
            onClick={onAddItem}
            className="w-full h-10 rounded-full flex items-center justify-center bg-purple mt-auto"
          >
            <Plus className="w-6 h-6 text-gray-100" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
