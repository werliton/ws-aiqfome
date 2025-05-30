import { CurrencyIcon } from "@/components/ui/atoms/icons";
import { Label } from "@/components/ui/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/atoms/radio-group";
import { RNode } from "@/components/ui/atoms/subtitle";
import { ReactNode } from "react";

export const CategoryRadio = ({ children }: RNode) => {
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
const CategoryRadioHeader = ({ children, subtitle }: HeaderProps) => (
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

const CategoryRadioList = ({ children }: RNode) => (
  <div className="flex flex-col items-start justify-start gap-3">
    <RadioGroup>{children}</RadioGroup>
  </div>
);
interface ListItemProps {
  children: ReactNode;
  priceBase: string;
}

const CategoryRadioListItem = ({ children, priceBase }: ListItemProps) => (
  <div className="inline-flex w-80 items-center justify-start gap-4 py-1">
    <RadioGroupItem value={priceBase} id={priceBase} />
    <Label htmlFor={priceBase} className="flex flex-1 justify-between">
      <div className="flex flex-1 items-center justify-start gap-1">
        <div className="flex flex-1 items-center justify-start gap-1">
          <div className="flex-1 justify-center text-sm leading-tight font-normal text-neutral-500">
            {children}
          </div>
        </div>
      </div>

      <div className="justify-start text-sm leading-tight font-bold text-purple-800">
        R$ {priceBase}
      </div>
    </Label>
  </div>
);

const CategoryRadioListItemNoPrice = ({ value }: { value: string }) => (
  <div className="inline-flex w-80 items-center justify-start gap-4 py-1">
    <RadioGroupItem value={value} id={value} />
    <Label htmlFor={value}>
      <div className="flex flex-1 items-center justify-start gap-1">
        <div className="flex flex-1 items-center justify-start gap-1">
          <div className="flex-1 justify-center text-sm leading-tight font-normal text-neutral-500">
            {value}
          </div>
        </div>
      </div>
    </Label>
  </div>
);

interface PromotionListItemProps extends ListItemProps {
  priceDiscounted: string;
}

const CategoryRadioPromotionListItem = ({
  children,
  priceBase,
  priceDiscounted,
}: PromotionListItemProps) => (
  <div className="inline-flex w-80 items-center justify-start gap-4 py-1">
    <RadioGroupItem value={priceBase} id="r1" />
    <Label htmlFor="r1">
      <div className="flex flex-1 items-center justify-start gap-1">
        <div data-status="off" className="relative h-6 w-6 overflow-hidden">
          <CurrencyIcon />
        </div>

        <div className="flex flex-1 items-center justify-start gap-1">
          <div className="flex-1 justify-center text-sm leading-tight font-normal text-neutral-500">
            {children}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-1">
        <div className="justify-start text-xs font-bold text-neutral-500">
          de R$ {priceBase} por
        </div>
        <div className="justify-start text-sm leading-tight font-bold text-green-700">
          R$ {priceDiscounted}
        </div>
      </div>
    </Label>
  </div>
);

CategoryRadio.Header = CategoryRadioHeader;
CategoryRadio.List = CategoryRadioList;
CategoryRadio.ListItem = CategoryRadioListItem;
CategoryRadio.ListItemNoPrice = CategoryRadioListItemNoPrice;
CategoryRadio.PromotionListItem = CategoryRadioPromotionListItem;
