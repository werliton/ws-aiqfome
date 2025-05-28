import { Store } from "@/types";
import Image from "next/image";
import { TextExtraLarge } from "../../../atoms/title";
import { Heart, Share } from "../../../atoms/icons";
import { ChevronRight } from "lucide-react";

interface TitleProps {
  store: Store;
}

export const InfoTitle: React.FC<TitleProps> = ({ store }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <Image
        className="dark:invert"
        src={store.image}
        alt="mat"
        width={36}
        height={36}
        priority
      />
      <TextExtraLarge>{store.name}</TextExtraLarge>
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
