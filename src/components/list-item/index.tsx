import { useMemo } from "react";
import { Tag } from "../tag";
import { Checkbox } from "../checkbox";
import { Trash2 } from "lucide-react";
import clsx from "clsx";

export type IListItem = {
  name: string;
  quantity: number;
  quantityType: string;
  category: string;
  completed: boolean;
};

type ListItemProps = {
  item: IListItem;
  onToggleIsCompleted: () => void;
  onDelete: () => void;
};

export const ListItem = ({
  item,
  onToggleIsCompleted,
  onDelete,
}: ListItemProps) => {
  const quantityType = useMemo(() => {
    return `${item.quantityType.toLowerCase()}${
      item.quantity === 1 ? "" : "s"
    }`;
  }, [item.quantity, item.quantityType]);

  const handleDelete = () => {
    const confirm = window.confirm(
      "Você tem certeza que deseja deletar este item?"
    );
    if (confirm) onDelete();
  };

  return (
    <div
      className={clsx(
        "h-[68px] w-full bg-gray-400 border border-gray-300 rounded-lg px-4 flex items-center justify-between transition-all",
        {
          "opacity-50": item.completed,
        }
      )}
    >
      <div className="flex-1 grid grid-cols-[1rem,1fr] items-center gap-5">
        <Checkbox setValue={onToggleIsCompleted} value={item.completed} />
        <div>
          <p
            className={clsx(
              "font-bold text-sm text-gray-100 truncate",
              item.completed && "!font-normal line-through"
            )}
          >
            {item.name}
          </p>
          <span className="text-xs text-gray-200">
            {item.quantity} {quantityType}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Tag value={item.category} />
        <button onClick={handleDelete}>
          <Trash2 className="w-4 h-4 text-gray-200" />
        </button>
      </div>
    </div>
  );
};
