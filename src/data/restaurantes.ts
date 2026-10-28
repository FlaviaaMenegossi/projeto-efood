import carbonaraMesa from '../assets/images/carbonara-mesa.jpg'
import lasanha from '../assets/images/lasanha.jpg'
import farfallePesto from '../assets/images/farfalle-pesto.jpg'
import spaghettiCamarao from '../assets/images/spaghetti-camarao.jpg'
import penneBolonhesa from '../assets/images/penne-bolonhesa.jpg'
import fettuccineMignon from '../assets/images/fettuccine-mignon.jpg'
import carbonara from '../assets/images/carbonara.jpg'
import spaghettiPomodoro from '../assets/images/spaghetti-pomodoro.jpg'
import fettuccineAlfredo from '../assets/images/fettuccine-alfredo.jpg'
import ravioli from '../assets/images/ravioli.jpg'
import spaghettiVongole from '../assets/images/spaghetti-vongole.jpg'
import fettuccineFrango from '../assets/images/fettuccine-frango.jpg'
import tiramisu from '../assets/images/tiramisu.jpg'

export type Prato = {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
}

export type Restaurante = {
  id: number
  nome: string
  tipo: string
  destaque: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
  bairro: string
  distancia: number
  tempoEntrega: string
  freteGratis: boolean
  horarios: string[]
  // posição do pino no mapa ilustrado, em porcentagem
  mapa: { x: number; y: number }
}

const cardapio: Prato[] = [
  {
    id: 1,
    nome: 'Spaghetti alla Carbonara',
    descricao:
      'Spaghetti al dente envolvido em creme de gema, pecorino romano e guanciale crocante, finalizado com pimenta-do-reino moída na hora. A receita romana, sem creme de leite.',
    porcao: '1 a 2 pessoas',
    preco: 64.9,
    foto: carbonara
  },
  {
    id: 2,
    nome: 'Spaghetti al Pomodoro',
    descricao:
      'Molho de tomates italianos cozido lentamente com alho, azeite extravirgem e manjericão fresco. Simples, perfumado e servido com parmesão ralado.',
    porcao: '1 a 2 pessoas',
    preco: 52.9,
    foto: spaghettiPomodoro
  },
  {
    id: 3,
    nome: 'Fettuccine Alfredo',
    descricao:
      'Fettuccine fresco feito na casa, emulsionado em manteiga e parmigiano reggiano 24 meses. Cremoso, delicado e finalizado com salsinha.',
    porcao: '1 a 2 pessoas',
    preco: 58.9,
    foto: fettuccineAlfredo
  },
  {
    id: 4,
    nome: 'Ravioli de Ricota e Limão',
    descricao:
      'Massa fresca recheada com ricota de búfala e raspas de limão siciliano, na manteiga de sálvia com lascas de grana padano.',
    porcao: '1 pessoa',
    preco: 61.9,
    foto: ravioli
  },
  {
    id: 5,
    nome: 'Spaghetti alle Vongole',
    descricao:
      'Vôngoles frescos salteados no vinho branco, alho, pimenta calabresa e tomate-cereja, com farofa de pão tostado e limão.',
    porcao: '1 a 2 pessoas',
    preco: 78.9,
    foto: spaghettiVongole
  },
  {
    id: 6,
    nome: 'Fettuccine ao Frango',
    descricao:
      'Fettuccine com tiras de frango grelhado, molho de queijos e toque de noz-moscada. Um clássico reconfortante para qualquer dia.',
    porcao: '1 a 2 pessoas',
    preco: 56.9,
    foto: fettuccineFrango
  },
  {
    id: 7,
    nome: 'Lasanha alla Bolognese',
    descricao:
      'Camadas de massa fresca, ragù de carne cozido por 6 horas, bechamel e mozzarella gratinada, servida com molho de tomate e presunto cru crocante.',
    porcao: '2 a 3 pessoas',
    preco: 72.9,
    foto: lasanha
  },
  {
    id: 8,
    nome: 'Tiramisù della Nonna',
    descricao:
      'Biscoitos savoiardi embebidos em café espresso, creme de mascarpone e cacau em pó. A sobremesa para fechar a refeição.',
    porcao: '1 pessoa',
    preco: 29.9,
    foto: tiramisu
  }
]

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    destaque: true,
    avaliacao: 4.9,
    descricao:
      'A cozinha da nonna em versão contemporânea: massas abertas à mão todas as manhãs, molhos de longo cozimento e porções feitas para dividir.',
    capa: carbonaraMesa,
    cardapio,
    bairro: 'Vila Madalena',
    distancia: 1.2,
    tempoEntrega: '20–30 min',
    freteGratis: true,
    horarios: ['19:00', '19:30', '20:30', '21:00'],
    mapa: { x: 36, y: 30 }
  },
  {
    id: 2,
    nome: 'Nonna Rosa',
    tipo: 'Massas frescas',
    destaque: false,
    avaliacao: 4.8,
    descricao:
      'Lasanhas, canelones e ravioli recheados no capricho. Receitas de família passadas por três gerações, direto do forno para sua casa.',
    capa: lasanha,
    cardapio,
    bairro: 'Pinheiros',
    distancia: 0.8,
    tempoEntrega: '15–25 min',
    freteGratis: true,
    horarios: ['12:00', '13:00', '19:30', '20:00'],
    mapa: { x: 60, y: 42 }
  },
  {
    id: 3,
    nome: 'Pastificio Verde',
    tipo: 'Vegetariana',
    destaque: false,
    avaliacao: 4.7,
    descricao:
      'Massas artesanais com ingredientes da horta: pesto de manjericão, legumes da estação e azeites selecionados. Leve, colorido e cheio de sabor.',
    capa: farfallePesto,
    cardapio,
    bairro: 'Jardins',
    distancia: 2.4,
    tempoEntrega: '30–40 min',
    freteGratis: false,
    horarios: ['12:30', '19:00', '21:30'],
    mapa: { x: 74, y: 72 }
  },
  {
    id: 4,
    nome: 'Mare & Pasta',
    tipo: 'Frutos do mar',
    destaque: false,
    avaliacao: 4.8,
    descricao:
      'Spaghetti com camarões grelhados, vôngoles e lulas frescas. O litoral italiano em pratos generosos, com o frescor que o mar pede.',
    capa: spaghettiCamarao,
    cardapio,
    bairro: 'Moema',
    distancia: 4.1,
    tempoEntrega: '40–50 min',
    freteGratis: false,
    horarios: ['20:00', '20:30', '22:00'],
    mapa: { x: 84, y: 20 }
  },
  {
    id: 5,
    nome: 'Cantina Bellini',
    tipo: 'Italiana',
    destaque: false,
    avaliacao: 4.6,
    descricao:
      'Cantina de bairro com penne ao ragù, molhos encorpados e aquele queijo ralado na hora. Comida farta, honesta e sempre quentinha.',
    capa: penneBolonhesa,
    cardapio,
    bairro: 'Bela Vista',
    distancia: 1.9,
    tempoEntrega: '25–35 min',
    freteGratis: true,
    horarios: ['11:30', '12:30', '19:00', '20:00'],
    mapa: { x: 22, y: 66 }
  },
  {
    id: 6,
    nome: 'Forchetta Bistrô',
    tipo: 'Bistrô',
    destaque: false,
    avaliacao: 4.7,
    descricao:
      'Fettuccine com mignon, cogumelos e molhos autorais. Um bistrô que mistura técnica francesa e alma italiana em cada garfada.',
    capa: fettuccineMignon,
    cardapio,
    bairro: 'Itaim Bibi',
    distancia: 3.3,
    tempoEntrega: '35–45 min',
    freteGratis: false,
    horarios: ['19:30', '21:00'],
    mapa: { x: 14, y: 22 }
  }
]

export const formataPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
