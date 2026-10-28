import carbonara from '../assets/images/carbonara.jpg'
import lasanha from '../assets/images/lasanha.jpg'
import vongole from '../assets/images/spaghetti-vongole.jpg'

export type TemaPromocao = 'tomate' | 'manjericao' | 'tinta'

export type Promocao = {
  id: number
  tema: TemaPromocao
  selo: string
  destaque: string
  titulo: string
  descricao: string
  imagem: string
  adesivo: { topo: string; valor: string }
  chamada: string
  link: string
  cupom?: string
  contagem?: boolean
  precoDe?: number
  precoPor?: number
}

export type Oferta = {
  id: number
  valor: string
  titulo: string
  descricao: string
}

export const promocoes: Promocao[] = [
  {
    id: 1,
    tema: 'tomate',
    selo: 'Primeira compra',
    destaque: '30%',
    titulo: 'OFF em qualquer massa da casa',
    descricao: 'Use o cupom no seu primeiro pedido e prove a carbonara mais pedida da semana.',
    imagem: carbonara,
    adesivo: { topo: 'só', valor: 'HOJE' },
    chamada: 'Pedir agora',
    link: '/perfil/1',
    cupom: 'MASSA30',
    contagem: true
  },
  {
    id: 2,
    tema: 'manjericao',
    selo: 'Terça da Lasanha',
    destaque: 'Leve 2',
    titulo: 'pague só 1 lasanha',
    descricao: 'Lasanha alla bolognese com ragù de 6 horas. Toda terça, enquanto durar o forno.',
    imagem: lasanha,
    adesivo: { topo: 'economize', valor: '-50%' },
    chamada: 'Quero a minha',
    link: '/perfil/2',
    precoDe: 145.8,
    precoPor: 72.9
  },
  {
    id: 3,
    tema: 'tinta',
    selo: 'Combo Trattoria',
    destaque: 'R$ 79',
    titulo: 'massa + tiramisù',
    descricao: 'Spaghetti alle vongole com sobremesa da nonna. O jantar completo para dois.',
    imagem: vongole,
    adesivo: { topo: 'combo', valor: '-27%' },
    chamada: 'Montar combo',
    link: '/perfil/4',
    precoDe: 108.8,
    precoPor: 79.9
  }
]

export const ofertas: Oferta[] = [
  {
    id: 1,
    valor: 'Frete grátis',
    titulo: 'acima de R$ 80',
    descricao: 'Em todas as trattorias parceiras'
  },
  {
    id: 2,
    valor: 'Tiramisù',
    titulo: 'de presente',
    descricao: 'Em pedidos acima de R$ 120'
  },
  {
    id: 3,
    valor: '10% de volta',
    titulo: 'às sextas',
    descricao: 'Cashback para o próximo pedido'
  }
]
