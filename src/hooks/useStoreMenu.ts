import { getAllCategoriesByStoreId } from "@/lib/data";
import { Zus } from "@/lib/store/store";

export function useStoreMenu() {
    const storeId = Zus.useGetStoreId();

    const data = getAllCategoriesByStoreId(storeId);
    return data
}