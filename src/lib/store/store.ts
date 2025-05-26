import { Category } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
/**
 * 1- guardar o id da loja selecionada
 */

interface State {
    storeId: string
    category: Category | null
    setStoreId: (storeId: string) => void
    setCategory: (category: Category) => void
}

const useStore = create<State>()(
    persist(
        (set) => ({
            storeId: '',
            category: null,
            setStoreId: (storeId: string) => set({
                storeId
            }),
            setCategory: (category: Category) => set({
                category
            })
        }),
    {
        name: 'store-storage'
    })
)

// Selectors

const useSetStoreId = () => useStore(state => state.setStoreId)
const useGetStoreId = () => useStore(state => state.storeId)
const useSetCategory = () => useStore(state => state.setCategory)
const useGetCategory = () => useStore(state => state.category)
const useGetAll = () => useStore(state => state)


export const Zus = {
    useSetStoreId,
    useSetCategory,
    useGetStoreId,
    useGetCategory,
    useGetAll
}