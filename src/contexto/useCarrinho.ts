import { createContext, useContext } from 'react'
import type { Prato } from '../data/restaurantes'

export type ItemCarrinho = {
  prato: Prato
  restaurante: string
  quantidade: number
}

export type CarrinhoContexto = {
  itens: ItemCarrinho[]
  quantidadeTotal: number
  valorTotal: number
  taxaEntrega: number
  aberto: boolean
  abrir: () => void
  fechar: () => void
  adicionar: (prato: Prato, restaurante: string) => void
  alterarQuantidade: (pratoId: number, quantidade: number) => void
  remover: (pratoId: number) => void
  limpar: () => void
}

export const FRETE_GRATIS_A_PARTIR = 80
export const TAXA_ENTREGA = 9.9

export const Contexto = createContext<CarrinhoContexto | null>(null)

export const useCarrinho = () => {
  const contexto = useContext(Contexto)
  if (!contexto) throw new Error('useCarrinho precisa estar dentro de <CarrinhoProvider>')
  return contexto
}
