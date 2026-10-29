import { createContext, useContext } from 'react'
import type { Prato } from '../data/restaurantes'

export type ItemCarrinho = {
  prato: Prato
  restaurante: string
  quantidade: number
}

export type ModoEntrega = 'entrega' | 'retirada'

export type Cupom = {
  codigo: string
  percentual: number
  descricao: string
}

export type CarrinhoContexto = {
  itens: ItemCarrinho[]
  quantidadeTotal: number
  subtotal: number
  descontoPromocoes: number
  descontoCupom: number
  taxaEntrega: number
  total: number
  // valor dos itens já com as promoções, usado para o frete grátis
  valorBase: number
  modo: ModoEntrega
  setModo: (modo: ModoEntrega) => void
  cupom: Cupom | null
  aplicarCupom: (codigo: string) => boolean
  removerCupom: () => void
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

export const CUPONS: Record<string, Cupom> = {
  MASSA30: { codigo: 'MASSA30', percentual: 30, descricao: '30% OFF na primeira compra' }
}

export const Contexto = createContext<CarrinhoContexto | null>(null)

export const useCarrinho = () => {
  const contexto = useContext(Contexto)
  if (!contexto) throw new Error('useCarrinho precisa estar dentro de <CarrinhoProvider>')
  return contexto
}
