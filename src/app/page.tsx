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

      <Image
        className="mt-[1px] dark:invert"
        src="/images/banner320.png"
        alt="Banner principal"
        width={390}
        height={130}
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
