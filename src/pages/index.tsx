import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header"), {
  ssr: false,
});
const ItemsList = dynamic(() => import("@/components/items-list"), {
  ssr: false,
});
import { IListItem } from "@/components/list-item";
import { useState } from "react";
import Head from "next/head";

const STORAGE_KEY = "mercado-da-flavia:items";

export default function Home() {
  const [items, setItems] = useState<IListItem[]>(() => {
    if (typeof window === "undefined") return [];
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return [];
  });

  const handleAddItem = (item: IListItem) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const handleToggleIsCompleted = (name: string) => {
    const updatedItems = items.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (name: string) => {
    const updatedItems = items.filter((item) => {
      return item.name !== name;
    });

    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  };

  return (
    <main className="bg-gray-600 min-h-screen">
      <Header handleAddItem={handleAddItem} />
      <ItemsList
        items={items}
        handleToggleIsCompleted={handleToggleIsCompleted}
        handleDeleteItem={handleDeleteItem}
      />

      <Head>
        <title>Mercado da Flávia</title>
      </Head>
    </main>
  );
}
