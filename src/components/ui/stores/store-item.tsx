import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../card";
import Image from "next/image";
import { Store } from "@/types";
import { cn, currencyFormat } from "@/lib/utils";

interface StoreItemProps {
  item: Store;
}

export const StoreItem = ({ item }: StoreItemProps) => {
  const { image, name, delivery, review, open } = item;
  const formattedDelivery = currencyFormat(delivery);
  return (
    <Card className="h-[72px] py-0">
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
            <span className="text-primary flex items-center gap-1 text-sm font-bold">
              <Image
                className="dark:invert"
                src="/icons/delivery.svg"
                alt="delivery"
                width={24}
                height={24}
                priority
              />
              {formattedDelivery}{" "}
            </span>
            {/* opcional */}
            <p className="text-icons text-xs font-bold">.</p>
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
