import carbonara from '../assets/images/carbonara.jpg'
import ravioli from '../assets/images/ravioli.jpg'
import salao from '../assets/images/salao.jpg'
import tiramisu from '../assets/images/tiramisu.jpg'
import farfallePesto from '../assets/images/farfalle-pesto.jpg'
import spaghettiPomodoro from '../assets/images/spaghetti-pomodoro.jpg'

export type Categoria = 'Receitas' | 'Bastidores' | 'Dicas'

export type Post = {
  slug: string
  titulo: string
  resumo: string
  categoria: Categoria
  data: string
  leitura: number
  autor: string
  imagem: string
  conteudo: string[]
}

export const categorias: Categoria[] = ['Receitas', 'Bastidores', 'Dicas']

export const posts: Post[] = [
  {
    slug: 'carbonara-de-verdade-nao-leva-creme',
    titulo: 'Carbonara de verdade não leva creme de leite',
    resumo: 'Gema, pecorino, guanciale e pimenta: o segredo da cremosidade está na técnica, não na lata.',
    categoria: 'Receitas',
    data: '2026-10-14',
    leitura: 5,
    autor: 'Equipe efood',
    imagem: carbonara,
    conteudo: [
      'A carbonara é um dos pratos mais copiados — e mais mal-entendidos — da cozinha italiana. A versão romana tem só cinco ingredientes: massa, gema, pecorino romano, guanciale e pimenta-do-reino.',
      'O creme que envolve o spaghetti nasce da emulsão entre as gemas, o queijo e um pouco da água do cozimento. O truque é misturar fora do fogo, para a gema engrossar sem virar ovo mexido.',
      'O guanciale, a bochecha de porco curada, solta uma gordura perfumada que dá profundidade ao molho. Se não encontrar, a pancetta é a substituta mais próxima.',
      'Na La Dolce Vita Trattoria, a carbonara é montada na hora do pedido e sai em embalagem térmica para chegar cremosa na sua casa.'
    ]
  },
  {
    slug: 'um-dia-na-cozinha-da-nonna-rosa',
    titulo: 'Um dia na cozinha da Nonna Rosa',
    resumo: 'Acompanhamos a rotina de quem abre a massa às 6h da manhã para a lasanha chegar perfeita no jantar.',
    categoria: 'Bastidores',
    data: '2026-10-02',
    leitura: 7,
    autor: 'Equipe efood',
    imagem: salao,
    conteudo: [
      'Às seis da manhã, a cozinha da Nonna Rosa já cheira a farinha. A massa da lasanha é aberta à mão, em folhas finas, e descansa enquanto o ragù começa a apurar.',
      'O ragù fica seis horas no fogo baixo. É esse tempo que transforma carne, tomate e vinho em um molho encorpado, que gruda na colher.',
      'À tarde, as lasanhas são montadas em camadas e seguem para o forno só quando o pedido chega. Assim, ela sai gratinada e quente para a entrega.',
      'Três gerações passaram por aquela bancada. A receita mudou pouco — e é exatamente isso que os clientes pedem.'
    ]
  },
  {
    slug: 'como-reaquecer-massa-sem-perder-o-ponto',
    titulo: 'Como reaquecer massa sem perder o ponto',
    resumo: 'Sobrou macarrão? Com três truques simples ele volta ao prato como se tivesse acabado de sair da panela.',
    categoria: 'Dicas',
    data: '2026-09-20',
    leitura: 3,
    autor: 'Equipe efood',
    imagem: spaghettiPomodoro,
    conteudo: [
      'Micro-ondas é prático, mas resseca. O melhor caminho é a frigideira: aqueça em fogo médio com um fio de água ou caldo e tampe por dois minutos.',
      'Massas com molho de tomate aceitam bem um pouco de azeite no final. Já as cremosas, como alfredo e carbonara, pedem uma colher de leite ou água para soltar o molho.',
      'Lasanhas e massas gratinadas voltam melhor ao forno, cobertas com papel-alumínio nos primeiros dez minutos.'
    ]
  },
  {
    slug: 'ravioli-recheios-da-estacao',
    titulo: 'Ravioli: recheios que combinam com cada estação',
    resumo: 'Ricota e limão no verão, abóbora no outono: como as trattorias parceiras pensam o cardápio do ano.',
    categoria: 'Receitas',
    data: '2026-09-08',
    leitura: 4,
    autor: 'Equipe efood',
    imagem: ravioli,
    conteudo: [
      'O ravioli é uma tela em branco. A massa fresca recebe o recheio que a estação oferece — e muda de humor ao longo do ano.',
      'No calor, ricota de búfala com raspas de limão siciliano deixa o prato leve. No outono, abóbora assada com amaretti traz doçura e textura.',
      'O molho acompanha: manteiga de sálvia para os recheios delicados, ragù branco para os mais intensos.'
    ]
  },
  {
    slug: 'pesto-de-manjericao-em-5-minutos',
    titulo: 'Pesto de manjericão em 5 minutos',
    resumo: 'A receita do Pastificio Verde para um pesto vibrante, que não escurece e combina com qualquer massa curta.',
    categoria: 'Receitas',
    data: '2026-08-27',
    leitura: 4,
    autor: 'Equipe efood',
    imagem: farfallePesto,
    conteudo: [
      'Manjericão fresco, pinoli levemente tostados, parmesão, alho e um bom azeite: esses são os ingredientes do pesto clássico genovês.',
      'Para ele não escurecer, bata rápido e com o copo do liquidificador gelado. O calor das lâminas oxida as folhas.',
      'Misture à massa fora do fogo, com um pouco da água do cozimento, para o molho ficar sedoso.'
    ]
  },
  {
    slug: 'o-tiramisu-perfeito-existe',
    titulo: 'O tiramisù perfeito existe?',
    resumo: 'Café forte, mascarpone e paciência. Conversamos com confeiteiros sobre a sobremesa mais pedida da efood.',
    categoria: 'Bastidores',
    data: '2026-08-15',
    leitura: 6,
    autor: 'Equipe efood',
    imagem: tiramisu,
    conteudo: [
      'O tiramisù é a sobremesa mais pedida na efood, e cada trattoria parceira defende a sua versão como a melhor.',
      'Entre os confeiteiros, há consenso em três pontos: café espresso forte e frio, mascarpone de boa qualidade e pelo menos seis horas de geladeira.',
      'O resto é assinatura da casa: um toque de licor, cacau mais amargo ou biscoitos feitos ali mesmo.'
    ]
  }
]

export const formataData = (data: string) =>
  new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
