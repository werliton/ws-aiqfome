import { Product } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Item = {
    product: Product | null,
    quantity: number,
    total: number
}

type TickerState = {
    items: Item[]
    setTicket(product: Product): void
    incrementQuantity(product: Product): void
    decrementQuantity(product: Product): void
}

function _incrementQuantity(quantity: number){
    return quantity + 1
}

function _decrementQuantity(quantity: number){
    return quantity - 1
}

const STATE_RESET: Item = {
    product: null,
    quantity: 0,
    total: 0
}

export const useTicketStore = create<TickerState>()(
    persist((set) => ({
        items: [],
        setTicket: (product: Product) => set((state) => ({
            items: [...state.items, {
                product,
                quantity:1,
                total: product.price
            }]
        })),
        incrementQuantity: (product: Product) => set((state) => {
            const { id, price } = product
            return {
                items: state.items.map(item => {
                    if(item.product?.id === id){
                        return {
                            ...item,
                            quantity: _incrementQuantity(item.quantity),
                            total: (_incrementQuantity(item.quantity)) * price
                        }
                    }
                    return item
                })
            }
        }),
        decrementQuantity: (product: Product) => set((state) => {
            const { id, price } = product
            return {
                // TODO: REFACT TO USE REDUCE ou TER UMA FUNCTION TO REMOVE FROM TICKET
                items: state.items.map(item => {
                    if(item.product?.id === id){
                        if (item.quantity === 1) {
                            return STATE_RESET
                        }
                        return {
                            ...item,
                            quantity: _decrementQuantity(item.quantity),
                            total: (_decrementQuantity(item.quantity)) * price
                        }
                    }
                    return item
                }).filter(item => item.product !== null)
            }
        })
    }),
    {
        name: 'ticker-storage'
    }
))

const getItemInTicket = (productId: string) => useTicketStore(state => {
    const foundProduct = state.items
    .find(item => item.product?.id === productId)

    if(!foundProduct){
        return STATE_RESET
    }
    return foundProduct
})
const useIncrementQuantity = () => useTicketStore(state => state.incrementQuantity)
const useDecrementQuantity = () => useTicketStore(state => state.decrementQuantity)
const useSetTicket = () => useTicketStore(state => state.setTicket)


export const ZusTicket = {
    getItemInTicket,
    useIncrementQuantity,
    useDecrementQuantity,
    useSetTicket
}