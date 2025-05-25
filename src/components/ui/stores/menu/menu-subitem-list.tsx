import { getProductsById } from "@/lib/data";
import { MenuSubItem } from "./menu-subitem";
import { Product } from "@/types";

interface MenuSubitemListProps {
  productIds: string[];
}

export const MenuSubitemList: React.FC<MenuSubitemListProps> = ({
  productIds,
}) => {
  const products: Product[] = [];

  productIds.forEach((item) => {
    const data = getProductsById("mat", item);

    products.push(...data);
  });

  return (
    <>
      {products.map((product) => (
        <MenuSubItem key={product.id} product={product} />
      ))}
    </>
  );
};
