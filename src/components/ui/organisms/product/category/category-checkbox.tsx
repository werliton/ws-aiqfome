import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PricePlus } from "@/components/ui/price";
import { RNode } from "@/components/ui/subtitle";
import { ReactNode } from "react";

export const CategoryCheckbox = ({ children }: RNode) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 self-stretch px-4">
      {children}
    </div>
  );
};

interface HeaderProps {
  children: ReactNode;
  subtitle: string;
}
const CategoryCheckboxHeader = ({ children, subtitle }: HeaderProps) => (
  <div className="inline-flex items-center justify-start gap-2 self-stretch">
    <div className="inline-flex flex-1 flex-col items-start justify-start gap-0.5">
      <div className="justify-start self-stretch text-base font-bold text-neutral-800">
        {children}
      </div>
      <div className="justify-start self-stretch text-xs font-bold text-neutral-500">
        {subtitle}
      </div>
    </div>
    <div
      data-show-icon-left="false"
      data-show-icon-right="false"
      data-style="large"
      data-type="info highlight"
      className="flex items-center justify-start gap-1 rounded bg-neutral-700 px-1 py-1.5"
    >
      <div className="flex items-center justify-start gap-1 self-stretch px-1">
        <div className="justify-center text-xs font-bold text-white">
          obrigatório
        </div>
      </div>
    </div>
  </div>
);

const CategoryCheckboxList = ({ children }: RNode) => (
  <div className="flex flex-col items-start justify-start gap-3">
    {children}
  </div>
);
interface ListItemProps {
  value: string;
}

const CategoryCheckboxListItem = ({ value }: ListItemProps) => (
  <div className="inline-flex w-80 items-center justify-start gap-4 py-1">
    <div
      data-position="left"
      data-state="false"
      className="flex flex-1 items-center justify-start gap-2"
    >
      <Checkbox value={value} id="r1" />
      <Label htmlFor="r1">
        <div className="justify-center text-sm leading-tight font-normal text-neutral-500">
          {value}
        </div>
      </Label>
    </div>
  </div>
);

interface ListItemWihtPriceProps extends ListItemProps {
  children: ReactNode;
}

const CategoryCheckboxListItemWihtPrice = ({
  children,
  value,
}: ListItemWihtPriceProps) => (
  <div className="inline-flex w-80 items-center justify-start gap-4 py-1">
    <div
      data-position="left"
      data-state="false"
      className="flex flex-1 items-center justify-start gap-2"
    >
      <Checkbox value={value} id={value} />
      <Label htmlFor={value} className="flex flex-1 justify-between">
        <div className="justify-center text-sm leading-tight font-normal text-neutral-500">
          {value}
        </div>
        <div className="justify-center text-sm leading-tight font-normal text-neutral-500">
          <PricePlus>{children}</PricePlus>
        </div>
      </Label>
    </div>
  </div>
);

CategoryCheckbox.ListItemWihtPrice = CategoryCheckboxListItemWihtPrice;
CategoryCheckbox.ListItem = CategoryCheckboxListItem;
CategoryCheckbox.List = CategoryCheckboxList;
CategoryCheckbox.Header = CategoryCheckboxHeader;
