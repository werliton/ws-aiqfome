import { Zus } from "@/lib/store/store";
import { currencyFormat, getProductDetailRoute } from "@/lib/utils";
import { Product } from "@/types";

export function useMenuSubItem(product:Product) {
    const { category, storeId } = Zus.getAll();
    
    const { title, description, price, priceDiscounted, id } = product;
    
    const formattedPrice = currencyFormat(price);
    const formattedPriceDiscounted = priceDiscounted
    ? currencyFormat(priceDiscounted)
    : "";

    const goToProductDetail = getProductDetailRoute(id, storeId, category?.id)

    return {
        title, 
        description,
        priceDiscounted,
        formattedPrice,
        formattedPriceDiscounted,
        goToProductDetail
    }
}