import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function currencyFormat(value: number){
  return new Intl.NumberFormat('pb-BR', {
    style: 'currency', currency: 'BRL'
  }).format(value)
}