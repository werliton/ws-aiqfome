import { Category } from '@/types'
import { create } from 'zustand'
/**
 * 1- guardar o id da loja selecionada
 */

interface State {
    storeId: string
    category: Category | null
    setStoreId: (storeId: string) => void
    setCategory: (category: Category) => void
}

const useStore = create<State>()(set => ({
    storeId: '',
    category: null,
    setStoreId: (storeId: string) => set({
        storeId
    }),
    setCategory: (category: Category) => set({
        category
    })
}))

// Selectors

const useSetStoreId = () => useStore(state => state.setStoreId)
const getStoreId = () => useStore(state => state.storeId)

const useSetCategory = () => useStore(state => state.setCategory)
const getCategory = () => useStore(state => state.category)

const getAll = () => useStore(state => state)


export const Zus = {
    useSetStoreId,
    useSetCategory,
    getStoreId,
    getCategory,
    getAll
}