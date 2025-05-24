import { StoreItem } from "./store-item";
import { Store } from "@/types";

interface StoresProps {
  data: Store[];
}

export const Stores = ({ data }: StoresProps) => (
  <>
    {data.map((item) => (
      <StoreItem key={item.id} item={item} />
    ))}
  </>
);
