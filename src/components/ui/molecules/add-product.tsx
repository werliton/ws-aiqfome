import { Plus, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../button";

interface AddProductProps {
  handleAddQuantity(): void;
  handleRemoveQuantity(): void;
  quantity: number;
}

export const AddProduct = ({
  handleAddQuantity,
  handleRemoveQuantity,
  quantity,
}: AddProductProps) => {
  return (
    <div className="inline-flex items-center justify-center gap-1">
      <div className="flex items-center justify-start p-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border hover:bg-transparent"
          onClick={handleRemoveQuantity}
        >
          <Trash2 height={32} width={32} className="text-accent" />
        </Button>
      </div>
      <div className="inline-flex h-7 w-8 flex-col items-center justify-center gap-2">
        <div className="justify-start text-center font-['Nunito'] text-base font-bold text-neutral-700">
          {quantity}
        </div>
      </div>
      <div className="flex items-center justify-center p-0.5">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border hover:bg-transparent"
          onClick={handleAddQuantity}
        >
          <Plus height={32} width={32} className="text-accent" />
        </Button>
      </div>
    </div>
  );
};
