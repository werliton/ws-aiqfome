"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../collapsible";
import { CurrencyIcon } from "../../icons";
import { Category } from "@/types";
import { MenuSubitemList } from "./menu-subitem-list";
import { useMenuItem } from "@/hooks/useMenuItem";

interface MenuItemProps {
  category: Category;
}

export const MenuItem: React.FC<MenuItemProps> = ({ category }) => {
  const { open, setOpen } = useMenuItem(category);

  const { name, description, productIds } = category;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <div className="flex justify-between px-4 py-3">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <p className="text-foreground items-center justify-center text-base font-bold">
                {name}
              </p>

              <CurrencyIcon />
            </div>
            <p className="text-secondary-foreground text-xs font-semibold">
              {description}
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
      <CollapsibleContent className="ml-2 flex flex-col gap-6 px-4 pt-1 pb-3">
        <MenuSubitemList productIds={productIds} />
      </CollapsibleContent>
    </Collapsible>
  );
};
