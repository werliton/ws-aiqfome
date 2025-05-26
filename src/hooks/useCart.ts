import { ZusTicket } from "@/lib/store/ticket.store";
import { currencyFormat } from "@/lib/utils";
import { Product, Store } from "@/types";

export const useCart = (product: Product, store: Store) => {
    
   const setTicket = ZusTicket.useSetTicket()
   const incrementQuantity = ZusTicket.useIncrementQuantity()
   const decrementQuantity = ZusTicket.useDecrementQuantity()
   const { quantity, total } = ZusTicket.getItemInTicket(product.id)

   function handleAddProduct() {
      setTicket(product, store)
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
