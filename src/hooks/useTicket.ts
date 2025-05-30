import { ZusTicket } from "@/lib/store/ticket.store";
import { currencyFormat } from "@/lib/utils";

export const useTicket = () => {
    
   const items = ZusTicket.useGetAllItems()
   const image = ZusTicket.useGetShopImage()
   const name = ZusTicket.useGetShopName()
    
   return {
    items: items.map(item => ({
        ...item,
        total: currencyFormat(item.total)
    })),
    total: currencyFormat(items.reduce((sum, item) => {
        return sum + item.total
    },0)),
    shop: {
        name, image
    }
   }
}
