import products from '@/mocks/products.json';
import { Store } from '@/types';

let parsedProducts: any = null; // Cachear no build

export function getProductsData() {
    if (!parsedProducts) {
        console.time('JSON_Parse');
        parsedProducts = products; // Já está parseado, pois é importado.
        console.timeEnd('JSON_Parse');
    }
    return parsedProducts as Store[]
}