import { SearchBar } from "@/components/ui/search-bar/search-bar";
import { StoreClosed } from "@/components/ui/stores/store-closed";
import { StoreOpened } from "@/components/ui/stores/store-opened";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SearchBar />

      <Image
        className="mt-0.5 dark:invert"
        src="/images/banner320.png"
        alt="Banner principal"
        width={390}
        height={130}
        priority
      />

      <div className="bg-background flex flex-col gap-4 px-4 pt-6 pb-3">
        <StoreOpened />

        <StoreClosed />
      </div>
    </div>
  );
}
