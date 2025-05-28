export const dynamic = "force-static";

import { Card, CardHeader, CardTitle, CardDescription } from "../../atoms/card";
import Image from "next/image";
import { Store } from "@/types";
import { cn, currencyFormat, getStoreRoute } from "@/lib/utils";
import { Dot } from "lucide-react";
import { DeliveryIcon, DeliveryMotoIcon, StarIcon } from "../../atoms/icons";
import Link from "next/link";

interface StoreItemProps {
  item: Store;
}

const Delivery = ({ deliveryValue }: { deliveryValue: number }) => {
  const deliveryIsFree = deliveryValue === 0;

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
      {deliveryIsFree ? <DeliveryIcon /> : <DeliveryMotoIcon />}
      {textDelivery}{" "}
    </span>
  );
};

export const StoreItem = ({ item }: StoreItemProps) => {
  const { image, name, delivery, review, open, hasPromotion, slug, id } = item;
  const route = getStoreRoute(id);

  return (
    <Card
      className={cn(
        "h-[72px] border-0 py-0 shadow",
        !open ? "cursor-not-allowed" : "hover:border",
      )}
    >
      <CardHeader className="m-0 flex items-center justify-start p-0">
        <Image
          className={cn("dark:invert", open ? "" : "opacity-40")}
          src={image}
          alt={slug}
          width={72}
          height={72}
          priority
        />
        <div className="mx-3 flex flex-col gap-1">
          <CardTitle className="text-muted-foreground text-base font-bold">
            {open ? <Link href={route}>{name}</Link> : name}
          </CardTitle>
          <CardDescription className="flex gap-2">
            <Delivery deliveryValue={delivery} />
            {hasPromotion && (
              <p className="text-icons h-4 text-xs leading-normal font-bold">
                <Dot />
              </p>
            )}
            <span className="text-secondary-foreground flex items-center gap-1 text-sm font-bold">
              <StarIcon />
              {review}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};
