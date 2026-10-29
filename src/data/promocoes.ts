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
  // quando existe, o card vira um botão que aplica o cupom no carrinho
  cupom?: string
}

export const promocoes: Promocao[] = [
  {
    id: 1,
    tema: 'tomate',
    selo: 'Primeira compra',
    destaque: '30%',
    titulo: 'OFF em qualquer massa da casa',
    descricao: 'Toque no cupom para aplicar no carrinho e prove a carbonara mais pedida da semana.',
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
    selo: 'Promoção da semana',
    destaque: 'Leve 2',
    titulo: 'pague só 1 lasanha',
    descricao: 'Lasanha alla bolognese da Nonna Rosa, com ragù de 6 horas. O desconto entra sozinho no carrinho.',
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
    selo: 'Combo Mare',
    destaque: 'R$ 79',
    titulo: 'massa + sobremesa',
    descricao: 'Spaghetti alle vongole com torta de chocolate, no Mare & Pasta. O jantar completo com preço de combo.',
    imagem: vongole,
    adesivo: { topo: 'combo', valor: '-27%' },
    chamada: 'Pedir o combo',
    link: '/perfil/4',
    precoDe: 108.8,
    precoPor: 79.9
  }
]

export const ofertas: Oferta[] = [
  {
    id: 4,
    valor: '30% OFF',
    titulo: 'no 1º pedido',
    descricao: 'Toque para aplicar o cupom MASSA30',
    cupom: 'MASSA30'
  },
  {
    id: 1,
    valor: 'Frete grátis',
    titulo: 'acima de R$ 80',
    descricao: 'Em todas as trattorias parceiras'
  },
  {
    id: 2,
    valor: 'Entrega rápida',
    titulo: 'em cerca de 35 min',
    descricao: 'Quentinha na sua porta'
  },
  {
    id: 3,
    valor: 'Retire no local',
    titulo: 'sem taxa',
    descricao: 'Peça pelo site e busque na trattoria'
  }
]
