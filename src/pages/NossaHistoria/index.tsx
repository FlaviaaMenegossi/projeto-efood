import { useEffect, useRef } from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Faixa from '../../componentes/Faixa'
import Revelar from '../../componentes/Revelar'
import Contador from '../../componentes/Contador'
import Botao from '../../componentes/Botao'
import Rodape from '../../componentes/Rodape'
import salao from '../../assets/images/salao.jpg'
import lasanha from '../../assets/images/lasanha.jpg'
import ravioli from '../../assets/images/ravioli.jpg'
import carbonara from '../../assets/images/carbonara.jpg'
import carbonaraMesa from '../../assets/images/carbonara-mesa.jpg'
import penne from '../../assets/images/penne-bolonhesa.jpg'
import vongole from '../../assets/images/spaghetti-vongole.jpg'
import farfalle from '../../assets/images/farfalle-pesto.jpg'
import alfredo from '../../assets/images/fettuccine-alfredo.jpg'
import tiramisu from '../../assets/images/tiramisu.jpg'
import pomodoro from '../../assets/images/spaghetti-pomodoro.jpg'
import { Container } from '../../styles'
import {
  Abertura,
  Acoes,
  Ancora,
  Citacao,
  Colagem,
  Final,
  Fotos,
  Galeria,
  Linha,
  Marco,
  Numeros,
  Origem,
  Rolar,
  Secao,
  SeloGirando,
  Titulo,
  TituloAbertura,
  TopoValores,
  Valores
} from './styles'

const marcos = [
  {
    ano: '2019',
    titulo: 'A ideia na mesa da cozinha',
    texto: 'Um grupo de amigos apaixonados por massa percebe que as melhores trattorias do bairro não entregavam em casa.',
    imagem: carbonaraMesa
  },
  {
    ano: '2020',
    titulo: 'A primeira parceira',
    texto: 'A Nonna Rosa topa o desafio: lasanha de forno chegando quentinha do outro lado da cidade.',
    imagem: lasanha
  },
  {
    ano: '2022',
    titulo: 'Seis trattorias, um só sabor',
    texto: 'Chegam La Dolce Vita, Pastificio Verde, Mare & Pasta, Cantina Bellini e Forchetta Bistrô.',
    imagem: penne
  },
  {
    ano: '2024',
    titulo: 'Embalagem que respeita a massa',
    texto: 'Criamos embalagens térmicas com molho separado, para nada chegar empapado.',
    imagem: vongole
  },
  {
    ano: '2026',
    titulo: 'Reserva de mesa',
    texto: 'Além do delivery, agora você garante sua mesa nas trattorias parceiras em dois cliques.',
    imagem: salao
  }
]

const valores = [
  {
    titulo: 'Massa fresca, todo dia',
    texto: 'Só trabalhamos com casas que abrem a massa diariamente. Nada de pacote.',
    imagem: ravioli,
    pontos: ['Massa aberta toda manhã', 'Ingredientes selecionados']
  },
  {
    titulo: 'Parceiros do bairro',
    texto: 'Trattorias familiares e independentes, que conhecem o cliente pelo nome.',
    imagem: salao,
    pontos: ['Casas independentes', 'Cardápio provado por nós']
  },
  {
    titulo: 'Entrega com cuidado',
    texto: 'Rotas curtas, embalagem térmica e entregadores treinados para cuidar do seu jantar.',
    imagem: pomodoro,
    pontos: ['Embalagem térmica', 'Molho separado da massa']
  }
]

const galeria = [carbonara, farfalle, tiramisu, alfredo, pomodoro, ravioli, vongole, lasanha]

const palavrasTitulo = ['De', 'uma', 'cozinha', 'de', 'bairro']

const NossaHistoria = () => {
  const linhaRef = useRef<HTMLOListElement>(null)

  // preenche a linha do tempo conforme a página rola (sem re-renderizar)
  useEffect(() => {
    const atualizar = () => {
      const linha = linhaRef.current
      if (!linha) return
      const { top, height } = linha.getBoundingClientRect()
      const progresso = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - top) / height))
      linha.style.setProperty('--progresso', progresso.toString())
    }

    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    window.addEventListener('resize', atualizar)
    return () => {
      window.removeEventListener('scroll', atualizar)
      window.removeEventListener('resize', atualizar)
    }
  }, [])

  return (
    <>
      <Cabecalho />

      <Abertura>
        <Container>
          <div className="texto">
            <span className="selo">Nossa história · desde 2019</span>
            <TituloAbertura>
              {palavrasTitulo.map((palavra, indice) => (
                <span key={indice} style={{ animationDelay: `${indice * 90}ms` }}>
                  {palavra}
                </span>
              ))}
              <em style={{ animationDelay: `${palavrasTitulo.length * 90}ms` }}>para a sua mesa.</em>
            </TituloAbertura>
            <p>
              A efood nasceu de uma vontade simples: comer a massa das melhores trattorias sem sair de casa — e sem
              perder o ponto.
            </p>
            <Acoes>
              <Ancora href="#linha-do-tempo">Ver nossa trajetória ↓</Ancora>
              <Botao para="/" variante="secundario">
                Pedir agora
              </Botao>
            </Acoes>
          </div>

          <Colagem aria-hidden="true">
            <img src={lasanha} alt="" />
            <img src={carbonara} alt="" />
            <img src={tiramisu} alt="" />
            <SeloGirando>
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="circulo-historia" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text>
                  <textPath href="#circulo-historia">feito à mão • desde 2019 • feito à mão •</textPath>
                </text>
              </svg>
              <span>2019</span>
            </SeloGirando>
          </Colagem>
        </Container>
        <Rolar aria-hidden="true">role para descobrir</Rolar>
      </Abertura>

      <Faixa />

      <Secao>
        <Container>
          <Origem>
            <Revelar direcao="esquerda">
              <Titulo>
                Tudo começou com <em>um prato de lasanha</em>
              </Titulo>
              <p>
                Era domingo, chovia, e a vontade era da lasanha da trattoria da esquina. Ela não fazia entrega. Foi
                ali que surgiu a pergunta: e se as melhores massas da cidade pudessem chegar em casa do jeito que
                saem da cozinha?
              </p>
              <p>
                Desde então, a efood conecta pessoas a trattorias que fazem tudo do zero. Escolhemos cada parceira a
                dedo, provamos o cardápio e cuidamos para que o caminho até a sua mesa preserve o sabor.
              </p>
              <Citacao>“A lasanha não fazia entrega. A gente resolveu isso.”</Citacao>
            </Revelar>
            <Revelar direcao="direita" atraso={150}>
              <Fotos>
                <img src={lasanha} alt="Lasanha gratinada servida com molho de tomate" />
                <img src={ravioli} alt="Ravioli de massa fresca com queijo ralado" />
              </Fotos>
            </Revelar>
          </Origem>
        </Container>
      </Secao>

      <Numeros>
        <Container>
          <ul>
            <li>
              <strong>
                <Contador valor={6} />
              </strong>
              trattorias parceiras
            </li>
            <li>
              <strong>
                <Contador valor={48} sufixo=" mil" />
              </strong>
              pedidos entregues
            </li>
            <li>
              <strong>
                <Contador valor={4.9} casas={1} />
              </strong>
              nota média
            </li>
            <li>
              <strong>
                <Contador valor={35} sufixo=" min" />
              </strong>
              entrega média
            </li>
          </ul>
        </Container>
      </Numeros>

      <Secao id="linha-do-tempo">
        <Container>
          <Revelar>
            <Titulo className="centro">
              Nossa <em>linha do tempo</em>
            </Titulo>
          </Revelar>
          <Linha ref={linhaRef}>
            {marcos.map((marco, indice) => (
              <Marco key={marco.ano} $lado={indice % 2 === 0 ? 'esquerda' : 'direita'}>
                <Revelar direcao={indice % 2 === 0 ? 'esquerda' : 'direita'}>
                  <article>
                    <img src={marco.imagem} alt="" />
                    <div>
                      <span>{marco.ano}</span>
                      <h3>{marco.titulo}</h3>
                      <p>{marco.texto}</p>
                    </div>
                  </article>
                </Revelar>
              </Marco>
            ))}
          </Linha>
        </Container>
      </Secao>

      <Galeria aria-label="Pratos das trattorias parceiras">
        <Revelar>
          <Titulo className="centro">
            Feito com <em>as mãos</em>
          </Titulo>
        </Revelar>
        <div className="trilho">
          {[...galeria, ...galeria].map((foto, indice) => (
            <img key={indice} src={foto} alt="" aria-hidden={indice >= galeria.length} />
          ))}
        </div>
      </Galeria>

      <Secao>
        <Container>
          <Revelar>
            <TopoValores>
              <Titulo>
                No que <em>acreditamos</em>
              </Titulo>
              <p>Três promessas que guiam cada parceria, cada receita e cada entrega que sai pela nossa porta.</p>
            </TopoValores>
          </Revelar>
          <Valores>
            {valores.map((valor, indice) => (
              <li key={valor.titulo}>
                <Revelar atraso={indice * 150} className="revelar">
                  <article>
                    <div className="foto">
                      <img src={valor.imagem} alt="" />
                      <b>0{indice + 1}</b>
                    </div>
                    <div className="corpo">
                      <h3>{valor.titulo}</h3>
                      <p>{valor.texto}</p>
                      <ul>
                        {valor.pontos.map((ponto) => (
                          <li key={ponto}>{ponto}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Revelar>
              </li>
            ))}
          </Valores>
        </Container>
      </Secao>

      <Final>
        <Container>
          <Revelar direcao="zoom">
            <h2>
              Bateu a fome? <em>A massa está esperando.</em>
            </h2>
            <Botao para="/">Escolher trattoria →</Botao>
          </Revelar>
        </Container>
      </Final>
      <Rodape />
    </>
  )
}

export default NossaHistoria
