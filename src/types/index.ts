/**
 * Obs: Poderia criar um arquivo para cada tipo, mas por conveniência deixei em um
 * unico arquivo
 */
type Product = {
    id: string
    title: string
    description: string
    price: number
    image: string
    slug: string

    icon?: string
    priceInPromotion?: number
}

type Category = {
    id: string
    name:string
    description:string
    slug: string
    productIds: string[]//melhoria limitar o tipo a somente os ids tipos do produto
}

type Store = {
    id: string
    name:string
    image:string
    delivery: number
    review:number
    open: boolean
    slug: string
    products: Product[]
    categories: Category[]
    hasPromotion: boolean
}

export type {
    Product, Category, Store
}