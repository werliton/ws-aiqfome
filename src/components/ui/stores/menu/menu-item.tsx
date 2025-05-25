"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../collapsible";
import { useState } from "react";
import { CurrencyIcon } from "../../icons";
import { SubItem } from "../../subitem/sub-item";

export const MenuItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <div className="flex justify-between px-4 py-3">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <p className="text-foreground items-center justify-center text-base font-bold">
                Niguiris
              </p>

              <CurrencyIcon />
            </div>
            <p className="text-secondary-foreground text-xs font-semibold">
              um prato super refrescante de peixe fatiado e marinado com limão
            </p>
          </div>
          <button>
            {open ? (
              <ChevronUp className="text-secondary-foreground" />
            ) : (
              <ChevronDown className="text-secondary-foreground" />
            )}
          </button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex px-4 pt-1 pb-3">
        <SubItem isPromotion={false} />
      </CollapsibleContent>
    </Collapsible>
  );
};
