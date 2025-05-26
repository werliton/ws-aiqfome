"use client";
import { Product } from "@/types";
import { CurrencyIcon } from "../../atoms/icons";
import { Subtitle, SubtitleItem } from "../../atoms/subtitle";
import Link from "next/link";
import { useMenuSubItem } from "@/hooks/useMenuSubItem";
import { PriceOriginal, PriceDiscounted, PriceBase } from "../../atoms/price";

// = Extract<Product, 'price' | 'priceDiscounted' >
interface PromotionProps {
  price: string;
  priceDiscounted?: string;
}

const Promotion: React.FC<PromotionProps> = ({ price, priceDiscounted }) => (
  <div className="inline-flex flex-col items-end justify-start gap-0.5 self-stretch">
    <div className="inline-flex items-center justify-start gap-1">
      <PriceOriginal>{price}</PriceOriginal>
    </div>
    <div className="inline-flex items-center justify-start gap-0.5">
      <CurrencyIcon />
      <PriceDiscounted>{priceDiscounted}</PriceDiscounted>
    </div>
  </div>
);

const NoPromotion: React.FC<Omit<PromotionProps, "priceDiscounted">> = ({
  price,
}) => (
  <div className="inline-flex flex-col items-end justify-start gap-0.5 self-stretch">
    <div className="inline-flex items-center justify-start gap-0.5">
      <PriceBase>{price}</PriceBase>
    </div>
  </div>
);

interface MenuSubItemProps {
  product: Product;
}

export const MenuSubItem: React.FC<MenuSubItemProps> = ({ product }) => {
  const {
    title,
    description,
    formattedPrice,
    formattedPriceDiscounted,
    goToProductDetail,
    priceDiscounted,
  } = useMenuSubItem(product);

  return (
    <div className="flex flex-1 items-center justify-between gap-4">
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-0.5">
        <div className="inline-flex items-center justify-start gap-1">
          <Link href={goToProductDetail}>
            <Subtitle>{title}</Subtitle>
          </Link>
        </div>
        <SubtitleItem>{description}</SubtitleItem>
      </div>
      {priceDiscounted ? (
        <Promotion
          price={formattedPrice}
          priceDiscounted={formattedPriceDiscounted}
        />
      ) : (
        <NoPromotion price={formattedPrice} />
      )}
    </div>
  );
};
