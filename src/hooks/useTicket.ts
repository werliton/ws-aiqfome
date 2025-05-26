import { ZusTicket } from "@/lib/store/ticket.store";
import { currencyFormat } from "@/lib/utils";
import { Product } from "@/types";

export const useTicket = (product: Product) => {
    
   const setTicket = ZusTicket.useSetTicket()
   const incrementQuantity = ZusTicket.useIncrementQuantity()
   const decrementQuantity = ZusTicket.useDecrementQuantity()
   const { quantity, total } = ZusTicket.getItemInTicket(product.id)


   function handleAddProduct() {
      setTicket(product)
   }

   function handleAddQuantity() {
      incrementQuantity(product)
   }

   function handleRemoveQuantity() {
      decrementQuantity(product)
   }

   return {
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddProduct,
    total: currencyFormat(total),
    quantity
   }
}
