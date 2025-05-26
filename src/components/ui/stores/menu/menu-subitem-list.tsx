"use client";
import { getProductById } from "@/lib/data";
import { MenuSubItem } from "./menu-subitem";
import { Product } from "@/types";
import { Zus } from "@/lib/store/store";

interface MenuSubitemListProps {
  productIds: string[];
}

export const MenuSubitemList: React.FC<MenuSubitemListProps> = ({
  productIds,
}) => {
  const products: Product[] = [];

  const storeId = Zus.getStoreId();

  productIds.forEach((productId) => {
    try {
      const data = getProductById(storeId, productId);

      if (data) products.push(data);
    } catch (error) {
      new Error("Erro ao buscar produto por slug");
    }
  });

  return (
    <>
      {products.map((product) => (
        <MenuSubItem key={product.id} product={product} />
      ))}
    </>
  );
};
