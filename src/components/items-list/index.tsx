import { useMemo } from "react";
import { IListItem, ListItem } from "../list-item";

type ItemsListProps = {
  items: IListItem[];
  handleToggleIsCompleted: (name: string) => void;
  handleDeleteItem: (name: string) => void;
};

const ItemsList = ({
  items,
  handleToggleIsCompleted,
  handleDeleteItem,
}: ItemsListProps) => {
  const sortedItems = useMemo(() => {
    const categoryOrder = [
      "BASICOS",
      "GULOSEIMAS",
      "HIGIENE",
      "LIMPEZA",
      "FRUTAS",
      "LEGUMES",
      "CARNES",
      "FRIOS",
      "PADARIA",
    ];

    return items.sort((a, b) => {
      const aOrder = categoryOrder.findIndex((x) => x === a.category);
      const bOrder = categoryOrder.findIndex((x) => x === b.category);

      return aOrder - bOrder;
    });
  }, [items]);

  return (
    <section className="w-full max-w-[720px] px-4 mx-auto flex flex-col gap-3 mt-14 pb-20">
      {sortedItems.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          onToggleIsCompleted={() => handleToggleIsCompleted(item.name)}
          onDelete={() => handleDeleteItem(item.name)}
        />
      ))}
    </section>
  );
};

export default ItemsList;
