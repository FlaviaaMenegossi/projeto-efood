import carbonaraMesa from '../assets/images/carbonara-mesa.jpg'
import carbonara from '../assets/images/carbonara.jpg'
import cacioEPepe from '../assets/images/cacio-e-pepe.jpg'
import spaghettiGricia from '../assets/images/spaghetti-gricia.jpg'
import fettuccineAlfredo from '../assets/images/fettuccine-alfredo.jpg'
import tiramisu from '../assets/images/tiramisu.jpg'
import lasanha from '../assets/images/lasanha.jpg'
import lasanhaLegumes from '../assets/images/lasanha-legumes.jpg'
import ravioli from '../assets/images/ravioli.jpg'
import pappardelleCogumelos from '../assets/images/pappardelle-cogumelos.jpg'
import tortaFrutasVermelhas from '../assets/images/torta-frutas-vermelhas.jpg'
import farfallePesto from '../assets/images/farfalle-pesto.jpg'
import penneLegumes from '../assets/images/penne-legumes.jpg'
import spaghettiPrimavera from '../assets/images/spaghetti-primavera.jpg'
import fusilliPomodoro from '../assets/images/fusilli-pomodoro.jpg'
import saladaCaprese from '../assets/images/salada-caprese.jpg'
import spaghettiVongole from '../assets/images/spaghetti-vongole.jpg'
import spaghettiCamarao from '../assets/images/spaghetti-camarao.jpg'
import zuppaVongole from '../assets/images/zuppa-vongole.jpg'
import linguineLimao from '../assets/images/linguine-limao.jpg'
import tortaChocolate from '../assets/images/torta-chocolate.jpg'
import penneBolonhesa from '../assets/images/penne-bolonhesa.jpg'
import spaghettiBolognese from '../assets/images/spaghetti-bolognese.jpg'
import spaghettiArrabbiata from '../assets/images/spaghetti-arrabbiata.jpg'
import spaghettiPomodoroClassico from '../assets/images/spaghetti-pomodoro-classico.jpg'
import spaghettiPomodoro from '../assets/images/spaghetti-pomodoro.jpg'
import fettuccineMignon from '../assets/images/fettuccine-mignon.jpg'
import fettuccineFrango from '../assets/images/fettuccine-frango.jpg'
import penneQuattroFormaggi from '../assets/images/penne-quattro-formaggi.jpg'
import taglioliniTrufas from '../assets/images/tagliolini-trufas.jpg'
import lasanhaClassica from '../assets/images/lasanha-classica.jpg'
import lasanhaRustica from '../assets/images/lasanha-rustica.jpg'
import lasanhaTravessa from '../assets/images/lasanha-travessa.jpg'
import lasanhaForno from '../assets/images/lasanha-forno.jpg'
import tortelliniPomodoro from '../assets/images/tortellini-pomodoro.jpg'
import tortelloniSalvia from '../assets/images/tortelloni-salvia.jpg'
import cappellettiRagu from '../assets/images/cappelletti-ragu.jpg'
import pannaCotta from '../assets/images/panna-cotta.jpg'
import pannaCottaTaca from '../assets/images/panna-cotta-taca.jpg'
import tacaFrutasVermelhas from '../assets/images/taca-frutas-vermelhas.jpg'
import cannoli from '../assets/images/cannoli.jpg'
import gelato from '../assets/images/gelato.jpg'
import gelatoChocolate from '../assets/images/gelato-chocolate.jpg'

export type Prato = {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
  // preço "cheio" riscado, usado nos combos
  precoDe?: number
  // promoção "leve 2, pague 1", aplicada automaticamente no carrinho
  leve2pague1?: boolean
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
  tempoPreparo: string
  // posição do pino no mapa ilustrado, em porcentagem
  mapa: { x: number; y: number }
}

type PratoBase = Omit<Prato, 'id'>

// cada prato e cada foto aparecem em uma única trattoria
const montarCardapio = (restauranteId: number, itens: PratoBase[]): Prato[] =>
  itens.map((prato, indice) => ({ ...prato, id: restauranteId * 100 + indice + 1 }))

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    destaque: true,
    avaliacao: 4.9,
    descricao:
      'Os clássicos romanos em versão contemporânea: massas abertas à mão todas as manhãs, queijos curados e porções feitas para dividir.',
    capa: carbonaraMesa,
    cardapio: montarCardapio(1, [
      {
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'Spaghetti al dente envolvido em creme de gema, pecorino romano e guanciale crocante, finalizado com pimenta-do-reino moída na hora. A receita romana, sem creme de leite.',
        porcao: '1 a 2 pessoas',
        preco: 64.9,
        foto: carbonara
      },
      {
        nome: 'Cacio e Pepe',
        descricao:
          'Tonnarelli com pecorino romano e pimenta-do-reino tostada, emulsionados na água do cozimento até virar um creme sedoso. Só três ingredientes, muita técnica.',
        porcao: '1 pessoa',
        preco: 56.9,
        foto: cacioEPepe
      },
      {
        nome: 'Spaghetti alla Gricia',
        descricao:
          'A "mãe" da carbonara: guanciale dourado na própria gordura, pecorino e pimenta. Intenso, crocante e sem ovo.',
        porcao: '1 a 2 pessoas',
        preco: 59.9,
        foto: spaghettiGricia
      },
      {
        nome: 'Fettuccine Alfredo',
        descricao:
          'Fettuccine fresco feito na casa, emulsionado em manteiga e parmigiano reggiano 24 meses. Cremoso, delicado e finalizado com salsinha.',
        porcao: '1 a 2 pessoas',
        preco: 58.9,
        foto: fettuccineAlfredo
      },
      {
        nome: 'Tortellini al Pomodoro',
        descricao:
          'Tortellini recheados com carne e mortadela, servidos no molho de tomate fresco com manjericão e parmesão ralado na hora.',
        porcao: '1 a 2 pessoas',
        preco: 62.9,
        foto: tortelliniPomodoro
      },
      {
        nome: 'Tiramisù della Casa',
        descricao:
          'Biscoitos savoiardi embebidos em café espresso, creme de mascarpone e cacau em pó. A sobremesa para fechar a refeição.',
        porcao: '1 pessoa',
        preco: 29.9,
        foto: tiramisu
      },
      {
        nome: 'Panna Cotta de Morango',
        descricao:
          'Creme cozido de baunilha, delicado e firme, com morangos frescos e folhas de hortelã.',
        porcao: '1 pessoa',
        preco: 24.9,
        foto: pannaCotta
      }
    ]),
    bairro: 'Vila Madalena',
    distancia: 1.2,
    tempoEntrega: '30–40 min',
    tempoPreparo: '20–25 min',
    mapa: { x: 36, y: 30 }
  },
  {
    id: 2,
    nome: 'Nonna Rosa',
    tipo: 'Massas frescas',
    destaque: false,
    avaliacao: 4.8,
    descricao:
      'Lasanhas e massas recheadas no capricho. Receitas de família passadas por três gerações, direto do forno para sua casa.',
    capa: lasanha,
    cardapio: montarCardapio(2, [
      {
        nome: 'Lasanha alla Bolognese',
        descricao:
          'Camadas de massa fresca, ragù de carne cozido por 6 horas, bechamel e mozzarella gratinada, servida com molho de tomate e presunto cru crocante.',
        porcao: '2 a 3 pessoas',
        preco: 72.9,
        foto: lasanha,
        leve2pague1: true
      },
      {
        nome: 'Lasanha de Legumes',
        descricao:
          'Abobrinha, berinjela e espinafre em camadas com ricota temperada e molho de tomate, gratinada com parmesão e manjericão.',
        porcao: '2 a 3 pessoas',
        preco: 64.9,
        foto: lasanhaLegumes
      },
      {
        nome: 'Lasanha da Nonna na Travessa',
        descricao:
          'A travessa inteira direto do forno: bolonhesa, presunto, mussarela e bechamel em seis camadas. Feita para a mesa de domingo.',
        porcao: '4 a 5 pessoas',
        preco: 139.9,
        foto: lasanhaTravessa
      },
      {
        nome: 'Cappelletti ao Ragù',
        descricao:
          'Cappelletti de massa fresca recheados com carne, no ragù da casa com creme de ricota e azeitonas.',
        porcao: '1 a 2 pessoas',
        preco: 59.9,
        foto: cappellettiRagu
      },
      {
        nome: 'Ravioli de Ricota e Limão',
        descricao:
          'Massa fresca recheada com ricota de búfala e raspas de limão siciliano, na manteiga de sálvia com lascas de grana padano.',
        porcao: '1 pessoa',
        preco: 61.9,
        foto: ravioli
      },
      {
        nome: 'Pappardelle ai Funghi',
        descricao:
          'Fitas largas de massa fresca com cogumelos salteados, espinafre, manteiga e parmesão. Rústico e perfumado.',
        porcao: '1 a 2 pessoas',
        preco: 63.9,
        foto: pappardelleCogumelos
      },
      {
        nome: 'Torta da Nonna com Frutas Vermelhas',
        descricao:
          'Pão de ló macio, creme de baunilha e framboesas frescas por cima. A sobremesa de domingo da família.',
        porcao: '1 pessoa',
        preco: 27.9,
        foto: tortaFrutasVermelhas
      },
      {
        nome: 'Cannoli Sicilianos',
        descricao:
          'Casquinhas crocantes recheadas com creme de ricota e gotas de chocolate. Porção com 4 unidades.',
        porcao: '2 pessoas',
        preco: 32.9,
        foto: cannoli
      }
    ]),
    bairro: 'Pinheiros',
    distancia: 0.8,
    tempoEntrega: '25–35 min',
    tempoPreparo: '15–20 min',
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
    cardapio: montarCardapio(3, [
      {
        nome: 'Farfalle ao Pesto',
        descricao:
          'Farfalle com pesto genovês de manjericão fresco, pinoli e parmesão, com tomate-cereja e folhas da horta.',
        porcao: '1 a 2 pessoas',
        preco: 49.9,
        foto: farfallePesto
      },
      {
        nome: 'Penne de Legumes Assados',
        descricao:
          'Penne com pimentões, berinjela e cebola roxa assados no forno, azeite de ervas e um toque de pimenta calabresa.',
        porcao: '1 a 2 pessoas',
        preco: 47.9,
        foto: penneLegumes
      },
      {
        nome: 'Tortelloni de Abóbora',
        descricao:
          'Tortelloni recheados com abóbora assada e amaretti, na manteiga de sálvia com parmesão.',
        porcao: '1 a 2 pessoas',
        preco: 58.9,
        foto: tortelloniSalvia
      },
      {
        nome: 'Spaghetti Primavera',
        descricao:
          'Spaghetti com espinafre, tomate-cereja, alho e lascas generosas de parmesão. Fresco e leve como a estação.',
        porcao: '1 a 2 pessoas',
        preco: 48.9,
        foto: spaghettiPrimavera
      },
      {
        nome: 'Fusilli ao Pomodoro',
        descricao:
          'Fusilli integral com molho de tomates assados, manjericão e azeite extravirgem. Simples e reconfortante.',
        porcao: '1 a 2 pessoas',
        preco: 44.9,
        foto: fusilliPomodoro
      },
      {
        nome: 'Salada Caprese',
        descricao:
          'Tomates maduros, mozzarella de búfala, manjericão e croutons de pão italiano, com redução de balsâmico.',
        porcao: '1 a 2 pessoas',
        preco: 38.9,
        foto: saladaCaprese
      },
      {
        nome: 'Taça de Frutas Vermelhas',
        descricao:
          'Creme de baunilha com geleia caseira de frutas vermelhas, servido em taça. Leve e refrescante.',
        porcao: '1 pessoa',
        preco: 22.9,
        foto: tacaFrutasVermelhas
      }
    ]),
    bairro: 'Jardins',
    distancia: 2.4,
    tempoEntrega: '35–45 min',
    tempoPreparo: '15–20 min',
    mapa: { x: 74, y: 72 }
  },
  {
    id: 4,
    nome: 'Mare & Pasta',
    tipo: 'Frutos do mar',
    destaque: false,
    avaliacao: 4.8,
    descricao:
      'Spaghetti com camarões grelhados, vôngoles frescos e caldos do mar. O litoral italiano em pratos generosos.',
    capa: spaghettiCamarao,
    cardapio: montarCardapio(4, [
      {
        nome: 'Combo Mare',
        descricao:
          'Spaghetti alle vongole + fatia de torta de chocolate. O jantar completo, com preço especial de combo.',
        porcao: '1 a 2 pessoas',
        preco: 79.9,
        precoDe: 108.8,
        foto: spaghettiVongole
      },
      {
        nome: 'Spaghetti ao Camarão',
        descricao:
          'Camarões grelhados no alho e azeite, tomate-cereja e cebolinha, envolvidos em spaghetti al dente. Generoso e perfumado.',
        porcao: '1 a 2 pessoas',
        preco: 82.9,
        foto: spaghettiCamarao
      },
      {
        nome: 'Zuppa di Vongole',
        descricao:
          'Vôngoles frescos em caldo cremoso de vinho branco, alho e salsinha, com tomate picado e torradas de pão italiano.',
        porcao: '1 pessoa',
        preco: 68.9,
        foto: zuppaVongole
      },
      {
        nome: 'Linguine al Limone',
        descricao:
          'Linguine com manteiga, raspas de limão siciliano, aspargos e ervas frescas. Cítrico, leve e com cheiro de mar.',
        porcao: '1 a 2 pessoas',
        preco: 66.9,
        foto: linguineLimao
      },
      {
        nome: 'Lasanha ao Molho de Camarão',
        descricao:
          'Camadas de massa fresca com camarões, molho de tomate levemente picante e mussarela gratinada.',
        porcao: '1 a 2 pessoas',
        preco: 84.9,
        foto: lasanhaRustica
      },
      {
        nome: 'Torta de Chocolate',
        descricao:
          'Camadas de bolo de chocolate meio amargo e ganache aerada, finalizada com raspas de chocolate.',
        porcao: '1 pessoa',
        preco: 29.9,
        foto: tortaChocolate
      },
      {
        nome: 'Gelato de Morango',
        descricao:
          'Gelato artesanal de morango na casquinha crocante. Cremoso e com pedaços da fruta.',
        porcao: '1 pessoa',
        preco: 18.9,
        foto: gelato
      }
    ]),
    bairro: 'Moema',
    distancia: 4.1,
    tempoEntrega: '40–50 min',
    tempoPreparo: '25–30 min',
    mapa: { x: 84, y: 20 }
  },
  {
    id: 5,
    nome: 'Cantina Bellini',
    tipo: 'Italiana',
    destaque: false,
    avaliacao: 4.6,
    descricao:
      'Cantina de bairro com molhos de tomate encorpados, ragù de panela e aquele queijo ralado na hora. Comida farta, honesta e sempre quentinha.',
    capa: penneBolonhesa,
    cardapio: montarCardapio(5, [
      {
        nome: 'Penne ao Ragù',
        descricao:
          'Penne grano duro com ragù de carne cozido lentamente, finalizado com parmesão ralado na hora e pimenta-do-reino.',
        porcao: '1 a 2 pessoas',
        preco: 54.9,
        foto: penneBolonhesa
      },
      {
        nome: 'Spaghetti à Bolonhesa',
        descricao:
          'O clássico da cantina: spaghetti com molho de carne moída, tomate e vinho tinto, servido bem quente.',
        porcao: '1 a 2 pessoas',
        preco: 52.9,
        foto: spaghettiBolognese
      },
      {
        nome: "Spaghetti all'Arrabbiata",
        descricao:
          'Molho de tomate apimentado com alho e pimenta calabresa. Para quem gosta de massa com personalidade.',
        porcao: '1 a 2 pessoas',
        preco: 48.9,
        foto: spaghettiArrabbiata
      },
      {
        nome: 'Spaghetti al Pomodoro',
        descricao:
          'Molho de tomates italianos cozido lentamente com alho, azeite extravirgem e manjericão fresco. Simples e perfumado.',
        porcao: '1 a 2 pessoas',
        preco: 46.9,
        foto: spaghettiPomodoroClassico
      },
      {
        nome: 'Spaghetti ai Pomodorini',
        descricao:
          'Tomates-cereja confitados no azeite, manjericão e parmesão. Doce, leve e colorido.',
        porcao: '1 a 2 pessoas',
        preco: 49.9,
        foto: spaghettiPomodoro
      },
      {
        nome: 'Lasanha da Cantina',
        descricao:
          'Fatia generosa de lasanha à bolonhesa com bastante molho, parmesão gratinado e manjericão.',
        porcao: '1 a 2 pessoas',
        preco: 58.9,
        foto: lasanhaClassica
      },
      {
        nome: 'Lasanha Quatro Queijos',
        descricao:
          'Mussarela, provolone, gorgonzola e parmesão entre camadas de massa fresca, gratinada no forno até dourar.',
        porcao: '2 a 3 pessoas',
        preco: 69.9,
        foto: lasanhaForno
      },
      {
        nome: 'Panna Cotta com Calda de Frutas',
        descricao:
          'Panna cotta de baunilha com calda de frutas vermelhas, servida no copo.',
        porcao: '1 pessoa',
        preco: 21.9,
        foto: pannaCottaTaca
      }
    ]),
    bairro: 'Bela Vista',
    distancia: 1.9,
    tempoEntrega: '30–40 min',
    tempoPreparo: '20–25 min',
    mapa: { x: 22, y: 66 }
  },
  {
    id: 6,
    nome: 'Forchetta Bistrô',
    tipo: 'Bistrô',
    destaque: false,
    avaliacao: 4.7,
    descricao:
      'Fettuccine com mignon, trufas e molhos autorais. Um bistrô que mistura técnica francesa e alma italiana em cada garfada.',
    capa: fettuccineMignon,
    cardapio: montarCardapio(6, [
      {
        nome: 'Fettuccine ao Mignon',
        descricao:
          'Cubos de filé-mignon selados, cogumelos e espinafre em molho cremoso de vinho branco, sobre fettuccine fresco.',
        porcao: '1 a 2 pessoas',
        preco: 79.9,
        foto: fettuccineMignon
      },
      {
        nome: 'Fettuccine ao Frango',
        descricao:
          'Fettuccine com tiras de frango grelhado, molho de queijos e toque de noz-moscada. Um clássico reconfortante.',
        porcao: '1 a 2 pessoas',
        preco: 56.9,
        foto: fettuccineFrango
      },
      {
        nome: 'Penne Quattro Formaggi',
        descricao:
          'Penne no molho de gorgonzola, parmesão, mozzarella e provolone, com pimenta-do-reino e ervas.',
        porcao: '1 a 2 pessoas',
        preco: 62.9,
        foto: penneQuattroFormaggi
      },
      {
        nome: 'Tagliolini al Tartufo',
        descricao:
          'Tagliolini fresco na manteiga trufada com parmesão 24 meses e presunto cru crocante. O prato assinatura da casa.',
        porcao: '1 pessoa',
        preco: 89.9,
        foto: taglioliniTrufas
      },
      {
        nome: 'Gelato de Chocolate Belga',
        descricao:
          'Gelato intenso de chocolate 70% cacau na casquinha, com raspas de chocolate.',
        porcao: '1 pessoa',
        preco: 19.9,
        foto: gelatoChocolate
      }
    ]),
    bairro: 'Itaim Bibi',
    distancia: 3.3,
    tempoEntrega: '35–45 min',
    tempoPreparo: '20–25 min',
    mapa: { x: 14, y: 22 }
  }
]

export const formataPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
