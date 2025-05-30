"use client";
import { MenuSubItem } from "./menu-subitem";
import { useProducts } from "@/hooks/useProducts";

interface MenuSubitemListProps {
  productIds: string[];
}

export const MenuSubitemList: React.FC<MenuSubitemListProps> = ({
  productIds,
}) => {
  const { products } = useProducts(productIds);

  return (
    <>
      {products.map((product) => (
        <MenuSubItem key={product.id} product={product} />
      ))}
    </>
  );
};
