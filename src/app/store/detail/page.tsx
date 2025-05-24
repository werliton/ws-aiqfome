import { ScrollArea } from "@/components/ui/scroll-area";
import { StoreInfo } from "@/components/ui/stores/detail/store-info";

export default function StoreDetail() {
  return (
    <div className="flex flex-col">
      <StoreInfo />

      <ScrollArea className="h-[calc(100%-260px)]"></ScrollArea>
    </div>
  );
}
