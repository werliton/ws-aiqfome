import { getProductById } from "@/lib/data";
import { Zus } from "@/lib/store/store";
import { Product } from "@/types";

export function useProducts(productIds: string[]) {
    const products: Product[] = [];

    const storeId = Zus.useGetStoreId();

    productIds.forEach((productId) => {
        const data = getProductById(storeId, productId);

        if (data) products.push(data);
    });

    return {
        products
    }
}