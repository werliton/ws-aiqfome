/**
 * Obs: Poderia criar um arquivo para cada tipo, mas por conveniência deixei em um
 * unico arquivo
 */
type Product = {
    id: string
    title: string
    description: string
    price: number // price base
    image: string
    slug: string

    icon?: string
    priceDiscounted?: number
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