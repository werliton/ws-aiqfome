import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AddProduct } from "@/components/ui/molecules/add-product";
import { PriceBase } from "@/components/ui/price";
import {
  TextExtraLarge,
  TextMedium,
  TextSecondary,
} from "@/components/ui/title";
import { useCart } from "@/hooks/useCart";
import { currencyFormat } from "@/lib/utils";
import { Product, Store } from "@/types";
import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  product: Product;
  store: Store;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  store,
}) => {
  const { description, image, price, title } = product;

  const {
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddProduct,
    total,
    quantity,
  } = useCart(product, store);

  return (
    <div className="flex flex-col items-start justify-start gap-4 self-stretch">
      <div className="flex flex-col items-center justify-start gap-3 self-stretch overflow-hidden bg-white">
        <Image
          src={image}
          width={390}
          height={100}
          alt="Picture of the product"
          priority
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-1.5 self-stretch px-4">
        <TextExtraLarge>{title}</TextExtraLarge>

        <div className="inline-flex items-center justify-start gap-2">
          <div className="justify-start text-sm font-extrabold text-neutral-500">
            a partir de
          </div>

          <Label asChild className="text-lg font-extrabold">
            <PriceBase>{currencyFormat(price)}</PriceBase>
          </Label>
        </div>
        <TextSecondary>{description}</TextSecondary>
      </div>
      <div className="inline-flex items-center justify-between self-stretch px-4 py-2">
        <div className="inline-flex flex-col items-start justify-start gap-1.5">
          <TextMedium>quantos?</TextMedium>

          <div className="inline-flex items-start justify-start gap-1">
            <div className="justify-center text-center text-sm leading-tight font-semibold text-neutral-500">
              total
            </div>

            <Label
              asChild
              className="text-sm leading-tight font-bold text-neutral-700"
            >
              <PriceBase>{total}</PriceBase>
            </Label>
          </div>
        </div>
        {quantity > 0 ? (
          <AddProduct
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            quantity={quantity}
          />
        ) : (
          <Button
            className="bg-neutral-500 px-6 py-2.5 text-sm leading-tight font-bold text-white"
            onClick={handleAddProduct}
          >
            Adicionar
          </Button>
        )}
      </div>
    </div>
  );
};
