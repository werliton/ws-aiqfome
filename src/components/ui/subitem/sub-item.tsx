import { CurrencyIcon } from "../icons";
import { PriceBase, PriceDiscounted, PriceOriginal } from "../price";
import { Subtitle, SubtitleItem } from "../subtitle";

const Promotion = () => (
  <div className="inline-flex flex-col items-end justify-start gap-0.5 self-stretch">
    <div className="inline-flex items-center justify-start gap-1">
      <PriceOriginal />
    </div>
    <div className="inline-flex items-center justify-start gap-0.5">
      <CurrencyIcon />
      <PriceDiscounted />
    </div>
  </div>
);

const NoPromotion = () => (
  <div className="inline-flex flex-col items-end justify-start gap-0.5 self-stretch">
    <div className="inline-flex items-center justify-start gap-0.5">
      <PriceBase />
    </div>
  </div>
);

export const SubItem = ({ isPromotion = true }: { isPromotion?: boolean }) => {
  return (
    <div className="flex flex-1 items-center justify-between gap-4">
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-0.5">
        <div className="inline-flex items-center justify-start gap-1">
          <Subtitle />
        </div>
        <SubtitleItem />
      </div>
      {isPromotion ? <Promotion /> : <NoPromotion />}
    </div>
  );
};
