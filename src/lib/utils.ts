import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ROUTES } from "./routes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function currencyFormat(value: number){
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function getStoreRoute(id: string){
  return `${ROUTES.stores}/${id}`;
}

export function getProductDetailRoute(id: string, storeId: string, categoryId?: string){
  return `${ROUTES.stores}/${storeId}/${categoryId}/${id}`;
}