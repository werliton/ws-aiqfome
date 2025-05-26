import { PriceBase } from "../../../price";
import { RNode } from "@/components/ui/atoms/subtitle";

export const TicketFoodItem = ({ children }: RNode) => {
  return (
    <div className="flex flex-col items-center justify-start gap-1.5 self-stretch p-4">
      {children}
    </div>
  );
};

const TicketFoodItemHeader = ({ children }: RNode) => (
  <div
    data-pic="off"
    data-promo="off"
    className="inline-flex items-center justify-start gap-3 self-stretch"
  >
    {children}
  </div>
);

const TicketFoodItemTitle = ({ children }: RNode) => (
  <div className="flex flex-1 items-center justify-start gap-1">
    <div className="flex-1 justify-start text-sm leading-tight font-bold text-neutral-800">
      {children}
    </div>
  </div>
);

const TicketFoodItemPrice = ({ children }: RNode) => (
  <PriceBase>{children}</PriceBase>
);

TicketFoodItem.Header = TicketFoodItemHeader;
TicketFoodItem.Title = TicketFoodItemTitle;
TicketFoodItem.Price = TicketFoodItemPrice;
