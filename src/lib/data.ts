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
        open: item.open
    })

/**
 * 
 */
export function getAllStores(){

    const allStores = data.map(storeProperties)

    return allStores as Store[]
}

export function getAllStoresOpened(){

    const opened = data
    .filter(item => item.open)
    .map(storeProperties)

    return opened as Store[]
}


export function getAllStoresClosed(){

    const closed = data
    .filter(item => !item.open)
    .map(storeProperties)

    return closed as Store[]
}

/**
 * 
 */
export function getCategoryByStore(storeId: string){
    const foundStore = data.filter(item => item.id === storeId)
    
    if (foundStore.length === 0) return []

    return foundStore[0]
}

/**
 * 
 */
export function getProductsById(storeId: string, productId: string){
    const foundProducts = data.filter(item => item.id === storeId)
    
    if (foundProducts.length === 0) return []

    return foundProducts[0].products.filter(product => product.id === productId)
}