import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { DeliveryIcon, DotMini, StarIcon, Heart, Share } from "../../icons";

const Title = () => (
  <div className="flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <Image
        className="dark:invert"
        src="/images/stores/mat.png"
        alt="mat"
        width={36}
        height={36}
        priority
      />
      <h1 className="text-foreground text-xl leading-normal font-extrabold">
        Nome da loja
      </h1>
    </div>
    {/* subtitle */}
    <div className="flex w-full items-center justify-between">
      {/* right icons */}
      <div className="flex items-start gap-3">
        <Share className="text-primary" />

        <Heart className="text-primary" />
      </div>
      {/* buttons */}
      <div className="flex h-6 items-center gap-2">
        <span className="text-accent text-center text-xs font-bold">
          Mais infos
        </span>
        <ChevronRight className="text-accent" height={8} width={8} />
      </div>
    </div>
  </div>
);

const InfoRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1.5">{children}</div>
);

const Info = () => {
  return (
    <div className="flex w-auto flex-col items-start gap-1">
      <InfoRow>
        <div className="flex items-center gap-1">
          <DeliveryIcon className="text-primary" />
          <span className="text-primary justify-start text-sm leading-tight font-bold whitespace-nowrap">
            R$ 4,99
          </span>

          <ChevronRight width={8} height={8} className="shrink-0" />
        </div>

        <DotMini className="text-icons shrink-0" height={5} width={6} />

        <div className="flex h-6 flex-col items-start justify-center gap-2">
          <div className="flex items-center justify-center gap-1 py-1">
            <div className="text-secondary-foreground justify-center text-center text-xs font-bold whitespace-nowrap">
              hoje, 30-40 min
            </div>
          </div>
        </div>

        <DotMini className="text-icons shrink-0" height={5} width={6} />

        <div className="text-secondary-foreground justify-start text-center text-xs font-bold">
          5.2km
        </div>
      </InfoRow>
      {/* alert */}
      <div className="inline-flex items-center justify-start gap-1 rounded bg-teal-50 px-1 py-1.5">
        <div className="flex items-center justify-start gap-1 self-stretch px-1">
          <div className="text-delivery justify-center text-xs font-bold">
            entrega grátis acima de R$ 35,00
          </div>
        </div>
      </div>
      {/* review + timer */}
      <div className="inline-flex items-center justify-start gap-1.5">
        <div className="flex items-center justify-start gap-1">
          <StarIcon />

          <div className="inline-flex h-6 flex-col items-start justify-center gap-2">
            <div className="inline-flex items-center justify-center gap-1 px-0.5 py-1">
              <div className="text-secondary-foreground justify-center text-center text-xs font-bold">
                4.5 de 5
              </div>
              <ChevronRight width={8} height={8} className="shrink-0" />
            </div>
          </div>
        </div>

        <DotMini className="text-icons shrink-0" height={5} width={6} />

        <div className="flex items-center justify-start gap-0.5">
          <div className="text-success justify-start text-center text-xs font-bold">
            fecha às 20:00
          </div>
        </div>
      </div>
      {/* order price minimun */}
      <div className="inline-flex items-center justify-start gap-1.5">
        <div className="flex items-center justify-center gap-0.5 rounded-lg opacity-95">
          <div className="text-secondary-foreground justify-center text-center text-xs font-bold">
            pedido mínimo: R$ 15,00
          </div>
        </div>
      </div>
    </div>
  );
};

export const StoreInfo = () => {
  return (
    <div className="flex flex-col gap-1.5 px-4 py-6">
      <Title />

      {/* delivery info */}
      <Info />
      {/* category list */}
    </div>
  );
};
