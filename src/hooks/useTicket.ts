import { ZusTicket } from "@/lib/store/ticket.store";
import { currencyFormat } from "@/lib/utils";
import { Store } from "@/types";

export const useTicket = () => {
    
   const items = ZusTicket.getAllItems()
   const { image, name } = ZusTicket.getShop() as Store
    
   return {
    items: items.map(item => ({
        ...item,
        total: currencyFormat(item.total)
    })),
    total: items.reduce((sum, item) => {
        return sum + item.total
    },0),
    shop: {
        name, image
    }
   }
}
