import { Button } from "@/components/ui/atoms/button";
import { RNode } from "@/components/ui/atoms/subtitle";
import { Edit2, Minus, Plus } from "lucide-react";

export const TicketFoodItemButtons = ({ children }: RNode) => {
  return (
    <div
      data-promo-label="off"
      className="inline-flex items-center justify-end gap-6 self-stretch"
    >
      <div className="flex w-80 items-center justify-end gap-6">
        <div
          data-show-icon-left="true"
          data-show-icon-right="false"
          data-size="S"
          data-state="active"
          data-style="text"
          className="inline-flex h-7 flex-col items-start justify-center gap-2 rounded-lg bg-white"
        >
          <div className="inline-flex items-center justify-center gap-1 px-0.5 py-1">
            <Edit2 height={16} width={16} className="text-accent" />
            <div className="justify-center text-center text-sm leading-tight font-bold text-teal-600">
              editar
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

interface ControlsProps {
  handleIncrement(): void;
  handleDecrement(): void;
  quantity: number;
}

const TicketFoodItemButtonsControls = ({
  handleDecrement,
  handleIncrement,
  quantity,
}: ControlsProps) => (
  <div
    data-status="default"
    data-text-size="14pt"
    className="flex items-center justify-center gap-1 rounded-lg"
  >
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7 rounded-full border hover:bg-transparent"
      onChange={handleDecrement}
    >
      <Minus height={24} width={24} className="text-accent" />
    </Button>
    <div className="inline-flex h-7 w-7 flex-col items-center justify-center gap-2">
      <div className="justify-start text-center text-sm leading-tight font-bold text-neutral-700">
        {quantity}
      </div>
    </div>
    <div className="flex items-center justify-end py-0.5 pl-1">
      <Button
        onChange={handleIncrement}
        variant="outline"
        size="icon"
        className="h-7 w-7 rounded-full border hover:bg-transparent"
      >
        <Plus height={24} width={24} className="text-accent" />
      </Button>
    </div>
  </div>
);

TicketFoodItemButtons.Controls = TicketFoodItemButtonsControls;
