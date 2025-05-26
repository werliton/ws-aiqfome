import { getStoreById } from "@/lib/data";
import { Zus } from "@/lib/store/store";

export function useStoreInfo(storeId: string) {
  // busca do mock
  const data = getStoreById(storeId);

  // busca do Zustand Store
  const setStoreId = Zus.useSetStoreId();
  setStoreId(storeId);

  return data;
}
