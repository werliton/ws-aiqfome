import { ScrollArea } from "@/components/ui/scroll-area";
import { StoreInfo } from "@/components/ui/stores/detail/store-info";
import { StoreMenu } from "@/components/ui/stores/detail/store-menu";

export default function StoreDetail() {
  return (
    <div className="flex flex-col">
      <StoreInfo />

      <ScrollArea className="h-[calc(100%-260px)]">
        <StoreMenu />
      </ScrollArea>
    </div>
  );
}
