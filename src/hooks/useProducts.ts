import { getProductById } from "@/lib/data";
import { Zus } from "@/lib/store/store";
import { Product } from "@/types";

export function useProducts(productIds: string[]) {
    const products: Product[] = [];

    const storeId = Zus.getStoreId();

    productIds.forEach((productId) => {
        try {
        const data = getProductById(storeId, productId);

        if (data) products.push(data);

        } catch (error) {
            new Error("Erro ao buscar produto por slug");
        }
    });

    return {
        products
    }
}