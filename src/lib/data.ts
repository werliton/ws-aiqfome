import products from '@/mocks/products.json'
import { Store } from '@/types'

const data = products as Store[]

const storeProperties = (item: Store) => ({
        id: item.id, 
        slug: item.slug,
        name: item.name,
        image: item.image,
        delivery: item.delivery,
        review: item.review,
        open: item.open,
        hasPromotion: item.hasPromotion
    })

/**
 * Lista todas as lojas
 */
export function getAllStores(){

    const allStores = data.map(storeProperties)

    return allStores as Store[]
}

/**
 * Lista todas as lojas abertas
 */
export function getAllStoresOpened(){

    const opened = data
    .filter(item => item.open)
    .map(storeProperties)

    return opened as Store[]
}

/**
 * Lista todas as lojas fechadas
 */
export function getAllStoresClosed(){

    const closed = data
    .filter(item => !item.open)
    .map(storeProperties)

    return closed as Store[]
}

/**
 * Lista dados de uma loja especifica
 */
export function getStoreById(storeId: string){
    return data.filter(item => item.id === storeId).map(storeProperties)[0] as Store
}


/**
 * Lista todas as categorias de uma Loja especifica
 */
export function getAllCategoriesByStoreId(storeId: string){
    const foundStore = data.filter(item => item.id === storeId)
    
    if (foundStore.length === 0) return []

    return foundStore[0].categories
}

/**
 * Lista 
 */
export function getProductById(storeId: string, productId: string){
    

    const foundStore = data.filter(item => item.id === storeId)
    
    if (foundStore.length === 0) return null

    const foundProducts = foundStore[0].products.filter(product => product.id === productId)
    
    if (foundProducts.length === 0) return null

    return foundProducts[0]

}