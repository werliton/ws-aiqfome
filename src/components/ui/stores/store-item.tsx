import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../card";
import Image from "next/image";
import { Store } from "@/types";
import { cn, currencyFormat } from "@/lib/utils";

interface StoreItemProps {
  item: Store;
}

const Delivery = ({ deliveryValue }: { deliveryValue: number }) => {
  const deliveryIsFree = deliveryValue === 0;

  const pathDelivery = deliveryIsFree
    ? "/icons/delivery.svg"
    : "/icons/delivery-moto.svg";
  const textDelivery = deliveryIsFree
    ? "grátis"
    : currencyFormat(deliveryValue);

  return (
    <span
      className={cn(
        "flex items-center gap-1 text-sm font-bold",
        deliveryIsFree ? "text-delivery" : "text-primary",
      )}
    >
      <Image
        className="dark:invert"
        src={pathDelivery}
        alt="delivery"
        width={24}
        height={24}
        priority
      />
      {textDelivery}{" "}
    </span>
  );
};

export const StoreItem = ({ item }: StoreItemProps) => {
  const { image, name, delivery, review, open, hasPromotion } = item;

  return (
    <Card className="h-[72px] border-0 py-0 shadow">
      <CardHeader className="m-0 flex items-center justify-start p-0">
        <Image
          className={cn("dark:invert", open ? "" : "opacity-40")}
          src={image}
          alt="Banner principal"
          width={72}
          height={72}
          priority
        />
        <div className="mx-3 flex flex-col gap-1">
          <CardTitle className="text-muted-foreground text-base font-bold">
            {name}
          </CardTitle>
          <CardDescription className="flex gap-2">
            <Delivery deliveryValue={delivery} />
            {hasPromotion && (
              <p className="text-icons h-4 text-xs leading-normal font-bold">
                .
              </p>
            )}
            <span className="text-secondary-foreground flex items-center gap-1 text-sm font-bold">
              <Image
                className="dark:invert"
                src="/icons/star.svg"
                alt="star"
                width={24}
                height={24}
                priority
              />
              {review}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};
