import { ZusTicket } from "@/lib/store/ticket.store";
import { currencyFormat } from "@/lib/utils";

export const useTicket = () => {
    
   const items = ZusTicket.getAllItems()
    
   return {
    items: items.map(item => ({
        ...item,
        total: currencyFormat(item.total)
    })),
    total: items.reduce((sum, item) => {
        return sum + item.total
    },0)
   }
}
