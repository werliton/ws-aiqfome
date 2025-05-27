// SSG
export const dynamic = "force-static";

import { ScrollArea } from "@/components/ui/atoms/scroll-area";
import { SearchBar } from "@/components/ui/search-bar/search-bar";
import { StoreClosed } from "@/components/ui/stores/store-closed";
import { StoreOpened } from "@/components/ui/stores/store-opened";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SearchBar />

      {/* Imagem mobile: visível só em telas pequenas */}
      <Image
        src="/images/banner-mobile.png"
        alt="Banner Mobile"
        width={390}
        height={130}
        className="block w-full md:hidden"
        priority
      />
      {/* Imagem desktop: visível só em telas médias pra cima */}
      <Image
        src="/images/banner-desktop.png"
        alt="Banner Desktop"
        width={1200}
        height={300}
        className="hidden md:block"
        priority
      />

      <ScrollArea className="h-[calc(100%-260px)]">
        <div className="bg-background flex flex-col gap-4 px-4 pt-6 pb-6">
          <StoreOpened />
          <label className="my-2"></label>
          <StoreClosed />
        </div>
      </ScrollArea>
    </div>
  );
}
