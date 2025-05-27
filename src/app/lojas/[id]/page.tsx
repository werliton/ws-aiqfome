import { ScrollArea } from "@/components/ui/atoms/scroll-area";
import { StoreInfo } from "@/components/ui/stores/detail/store-info";
import { StoreMenu } from "@/components/ui/stores/detail/store-menu";

export default async function StoreDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col">
      <StoreInfo storeId={id} />

      <ScrollArea className="h-[calc(100%-260px)]">
        <StoreMenu />
      </ScrollArea>
    </div>
  );
}
