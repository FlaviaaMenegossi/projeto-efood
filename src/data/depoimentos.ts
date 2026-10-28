export type Depoimento = {
  id: number
  nome: string
  bairro: string
  nota: number
  texto: string
  prato: string
  restaurante: string
}

export const resumoAvaliacoes = {
  media: 4.9,
  total: 12480,
  recomendam: 98
}

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: 'Mariana Lopes',
    bairro: 'Pinheiros',
    nota: 5,
    texto: 'A carbonara chegou cremosa e no ponto, como se tivesse acabado de sair da panela. Virou o pedido oficial de sexta aqui em casa.',
    prato: 'Spaghetti alla Carbonara',
    restaurante: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    nome: 'Rafael Tanaka',
    bairro: 'Vila Madalena',
    nota: 5,
    texto: 'Pedi a lasanha na terça da promoção e sobrou pro almoço do dia seguinte. Ragù com gosto de comida de vó.',
    prato: 'Lasanha alla Bolognese',
    restaurante: 'Nonna Rosa'
  },
  {
    id: 3,
    nome: 'Juliana Ferraz',
    bairro: 'Jardins',
    nota: 5,
    texto: 'Reservei mesa pelo site em dois cliques e quando cheguei já estava tudo pronto. Sem fila, sem estresse.',
    prato: 'Reserva para 4 pessoas',
    restaurante: 'Pastificio Verde'
  },
  {
    id: 4,
    nome: 'Bruno Carvalho',
    bairro: 'Moema',
    nota: 4,
    texto: 'O vongole é sensacional, bem servido e perfumado. Demorou uns minutinhos a mais, mas chegou quentinho.',
    prato: 'Spaghetti alle Vongole',
    restaurante: 'Mare & Pasta'
  },
  {
    id: 5,
    nome: 'Camila Rocha',
    bairro: 'Bela Vista',
    nota: 5,
    texto: 'Ganhei o tiramisù de presente no pedido e fiquei encantada. Massa fresca de verdade, dá pra sentir a diferença.',
    prato: 'Tiramisù della Nonna',
    restaurante: 'Cantina Bellini'
  },
  {
    id: 6,
    nome: 'Diego Martins',
    bairro: 'Itaim Bibi',
    nota: 5,
    texto: 'Usei o cupom da primeira compra e já fiz mais três pedidos. O fettuccine ao frango é outro nível.',
    prato: 'Fettuccine ao Frango',
    restaurante: 'Forchetta Bistrô'
  },
  {
    id: 7,
    nome: 'Patrícia Nunes',
    bairro: 'Pinheiros',
    nota: 5,
    texto: 'Embalagem caprichada, nada vazou e o molho veio separado pra não empapar. Detalhe que faz diferença.',
    prato: 'Ravioli de Ricota e Limão',
    restaurante: 'La Dolce Vita Trattoria'
  },
  {
    id: 8,
    nome: 'Lucas Andrade',
    bairro: 'Vila Madalena',
    nota: 5,
    texto: 'Fiz o combo massa + tiramisù pra um jantar a dois e pareceu restaurante de verdade. Recomendo demais!',
    prato: 'Combo Trattoria',
    restaurante: 'Mare & Pasta'
  }
]
