import React from "react";
import { PriceBase, PricePlus } from "../../../price";
import { RNode } from "@/components/ui/subtitle";

export const TicketFoodItem = ({ children }: RNode) => {
  return (
    <div className="flex flex-col items-center justify-start gap-1.5 self-stretch p-4">
      {children}
    </div>
  );
};

TicketFoodItem.Header = ({ children }: RNode) => (
  <div
    data-pic="off"
    data-promo="off"
    className="inline-flex items-center justify-start gap-3 self-stretch"
  >
    {children}
  </div>
);

TicketFoodItem.Title = ({ children }: RNode) => (
  <div className="flex flex-1 items-center justify-start gap-1">
    <div className="flex-1 justify-start text-sm leading-tight font-bold text-neutral-800">
      {children}
    </div>
  </div>
);

TicketFoodItem.Price = ({ children }: RNode) => (
  <PriceBase>{children}</PriceBase>
);
