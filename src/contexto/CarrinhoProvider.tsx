import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Prato } from '../data/restaurantes'
import {
  Contexto,
  CUPONS,
  FRETE_GRATIS_A_PARTIR,
  TAXA_ENTREGA,
  type CarrinhoContexto,
  type Cupom,
  type ItemCarrinho,
  type ModoEntrega
} from './useCarrinho'

const CHAVE = 'efood:carrinho'

type Salvo = { itens: ItemCarrinho[]; cupom: Cupom | null; modo: ModoEntrega }

const carregar = (): Salvo => {
  const vazio: Salvo = { itens: [], cupom: null, modo: 'entrega' }
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE) ?? 'null')
    // versões antigas salvavam só a lista de itens
    if (Array.isArray(salvo)) return { ...vazio, itens: salvo }
    return salvo ? { ...vazio, ...salvo } : vazio
  } catch {
    return vazio
  }
}

const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [inicial] = useState(carregar)
  const [itens, setItens] = useState<ItemCarrinho[]>(inicial.itens)
  const [cupom, setCupom] = useState<Cupom | null>(inicial.cupom)
  const [modo, setModo] = useState<ModoEntrega>(inicial.modo)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify({ itens, cupom, modo }))
    } catch {
      // sem armazenamento (ex.: janela anônima): o carrinho só vive nesta aba
    }
  }, [itens, cupom, modo])

  const abrir = useCallback(() => setAberto(true), [])
  const fechar = useCallback(() => setAberto(false), [])
  const removerCupom = useCallback(() => setCupom(null), [])

  const limpar = useCallback(() => {
    setItens([])
    setCupom(null)
  }, [])

  const aplicarCupom = useCallback((codigo: string) => {
    const encontrado = CUPONS[codigo.trim().toUpperCase()]
    if (encontrado) setCupom(encontrado)
    return !!encontrado
  }, [])

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
    const subtotal = itens.reduce((soma, item) => soma + item.prato.preco * item.quantidade, 0)
    // "leve 2, pague 1": a cada dois itens da promoção, um sai de graça
    const descontoPromocoes = itens.reduce(
      (soma, item) => soma + (item.prato.leve2pague1 ? Math.floor(item.quantidade / 2) * item.prato.preco : 0),
      0
    )
    const valorBase = subtotal - descontoPromocoes
    const descontoCupom = cupom ? Math.round(valorBase * cupom.percentual) / 100 : 0
    const taxaEntrega =
      itens.length === 0 || modo === 'retirada' || valorBase >= FRETE_GRATIS_A_PARTIR ? 0 : TAXA_ENTREGA

    return {
      itens,
      quantidadeTotal: itens.reduce((soma, item) => soma + item.quantidade, 0),
      subtotal,
      descontoPromocoes,
      descontoCupom,
      taxaEntrega,
      total: valorBase - descontoCupom + taxaEntrega,
      valorBase,
      modo,
      setModo,
      cupom,
      aplicarCupom,
      removerCupom,
      aberto,
      abrir,
      fechar,
      adicionar,
      alterarQuantidade,
      remover,
      limpar
    }
  }, [itens, cupom, modo, aberto, aplicarCupom, removerCupom, abrir, fechar, adicionar, alterarQuantidade, remover, limpar])

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export default CarrinhoProvider
