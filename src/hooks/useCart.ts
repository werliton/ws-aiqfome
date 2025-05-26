import { currencyFormat } from "@/lib/utils";
import { useCallback, useState } from "react";

export const useCart = (price: number) => {
    const [quantity, setQuantity] = useState(0);
 
   const handleAddQuantity = useCallback(() => {
     setQuantity((prev) => prev + 1);
   }, []);
 
   const handleRemoveQuantity = useCallback(() => {
     setQuantity((prev) => prev - 1);
   }, []);
 
   const total = price * quantity

   return {
    handleAddQuantity,
    handleRemoveQuantity,
    total: currencyFormat(total),
    quantity
   }
}
