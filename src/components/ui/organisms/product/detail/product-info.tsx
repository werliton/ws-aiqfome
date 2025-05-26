"use client";

import { getProductById, getStoreById } from "@/lib/data";
import { useMemo } from "react";
import { ProductDetails } from "./product-details";

interface ProductInfoProps {
  productId: string;
  storeId: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  productId,
  storeId,
}) => {
  const product = useMemo(
    () => getProductById(storeId, productId),
    [storeId, productId],
  );

  const store = useMemo(() => getStoreById(storeId), [storeId]);

  if (!product || !store) return null;

  return <ProductDetails product={product} store={store} />;
};
