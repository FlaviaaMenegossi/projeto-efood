import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Prato } from '../data/restaurantes'
import {
  Contexto,
  FRETE_GRATIS_A_PARTIR,
  TAXA_ENTREGA,
  type CarrinhoContexto,
  type ItemCarrinho
} from './useCarrinho'

const CHAVE = 'efood:carrinho'

const carregar = (): ItemCarrinho[] => {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [itens, setItens] = useState<ItemCarrinho[]>(carregar)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(itens))
    } catch {
      // sem armazenamento (ex.: janela anônima): o carrinho só vive nesta aba
    }
  }, [itens])

  const abrir = useCallback(() => setAberto(true), [])
  const fechar = useCallback(() => setAberto(false), [])
  const limpar = useCallback(() => setItens([]), [])

  const adicionar = useCallback((prato: Prato, restaurante: string) => {
    setItens((atuais) => {
      const existente = atuais.find((item) => item.prato.id === prato.id)
      if (existente) {
        return atuais.map((item) =>
          item.prato.id === prato.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      }
      return [...atuais, { prato, restaurante, quantidade: 1 }]
    })
  }, [])

  const remover = useCallback((pratoId: number) => {
    setItens((atuais) => atuais.filter((item) => item.prato.id !== pratoId))
  }, [])

  const alterarQuantidade = useCallback(
    (pratoId: number, quantidade: number) => {
      if (quantidade < 1) return remover(pratoId)
      setItens((atuais) =>
        atuais.map((item) => (item.prato.id === pratoId ? { ...item, quantidade } : item))
      )
    },
    [remover]
  )

  const valor = useMemo<CarrinhoContexto>(() => {
    const valorTotal = itens.reduce((soma, item) => soma + item.prato.preco * item.quantidade, 0)

    return {
      itens,
      quantidadeTotal: itens.reduce((soma, item) => soma + item.quantidade, 0),
      valorTotal,
      taxaEntrega: itens.length === 0 || valorTotal >= FRETE_GRATIS_A_PARTIR ? 0 : TAXA_ENTREGA,
      aberto,
      abrir,
      fechar,
      adicionar,
      alterarQuantidade,
      remover,
      limpar
    }
  }, [itens, aberto, abrir, fechar, adicionar, alterarQuantidade, remover, limpar])

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export default CarrinhoProvider
