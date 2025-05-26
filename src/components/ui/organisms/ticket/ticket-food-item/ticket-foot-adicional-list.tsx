import { PricePlus } from "@/components/ui/price";
import { RNode } from "@/components/ui/subtitle";
import { ReactNode } from "react";

export const TicketFootAditional = ({ children }: RNode) => {
  return (
    <div
      data-accordion="no accordion"
      data-price="false"
      data-style="1 item"
      className="flex flex-col items-start justify-start gap-1.5 self-stretch"
    >
      {children}
    </div>
  );
};

const TicketFootAditionalTitle = ({ children }: RNode) => (
  <div className="inline-flex items-start justify-start gap-1">
    <div className="justify-start text-xs font-bold text-neutral-500">•</div>
    <div className="justify-start text-xs font-bold text-neutral-500">
      {children}
    </div>
  </div>
);

interface ItemProps {
  children: ReactNode;

  aditionalPrice?: string;
}
const TicketFootAditionalItem = ({ children, aditionalPrice }: ItemProps) => (
  <div className="ml-2 inline-flex w-80 items-start justify-start gap-2">
    <div className="flex items-center justify-start gap-1">
      <div className="justify-start text-xs font-semibold text-neutral-500">
        {children}
      </div>
    </div>
    {/* CONDITIONAL */}
    {aditionalPrice && <PricePlus>{aditionalPrice}</PricePlus>}
  </div>
);

TicketFootAditional.Title = TicketFootAditionalTitle;
TicketFootAditional.Item = TicketFootAditionalItem;
