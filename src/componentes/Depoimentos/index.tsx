import estrela from '../../assets/images/star.svg'
import type { Depoimento } from '../../data/depoimentos'
import { Container } from '../../styles'
import { Autor, Card, Cabecalho, Estrelas, Fileira, Placar, Prato, Secao, Trilho } from './styles'

type Props = {
  depoimentos: Depoimento[]
  resumo: { media: number; total: number; recomendam: number }
}

const iniciais = (nome: string) =>
  nome
    .split(' ')
    .map((parte) => parte[0])
    .slice(0, 2)
    .join('')

const Cartao = ({ depoimento, indice }: { depoimento: Depoimento; indice: number }) => (
  <Card $tom={indice % 3}>
    <Estrelas aria-label={`Nota ${depoimento.nota} de 5`}>
      {Array.from({ length: 5 }, (_, posicao) => (
        <img key={posicao} src={estrela} alt="" className={posicao < depoimento.nota ? '' : 'apagada'} />
      ))}
    </Estrelas>
    <blockquote>“{depoimento.texto}”</blockquote>
    <Prato>
      {depoimento.prato} · <span>{depoimento.restaurante}</span>
    </Prato>
    <Autor>
      <span aria-hidden="true">{iniciais(depoimento.nome)}</span>
      <div>
        <strong>{depoimento.nome}</strong>
        <small>{depoimento.bairro}</small>
      </div>
    </Autor>
  </Card>
)

const Depoimentos = ({ depoimentos, resumo }: Props) => {
  return (
    <Secao aria-labelledby="depoimentos-titulo">
      <Container>
        <Cabecalho>
          <div>
            <span>Quem pede, volta</span>
            <h2 id="depoimentos-titulo">
              O que dizem <em>à mesa</em>
            </h2>
          </div>
          <Placar>
            <strong>{resumo.media.toLocaleString('pt-BR')}</strong>
            <div>
              <Estrelas aria-hidden="true">
                {Array.from({ length: 5 }, (_, posicao) => (
                  <img key={posicao} src={estrela} alt="" />
                ))}
              </Estrelas>
              <p>
                <b>{resumo.total.toLocaleString('pt-BR')}</b> avaliações ·{' '}
                <b>{resumo.recomendam}%</b> recomendam
              </p>
            </div>
          </Placar>
        </Cabecalho>
      </Container>

      <Fileira>
        {/* a lista é duplicada para o deslize ser contínuo; a cópia fica oculta para leitores de tela */}
        <Trilho>
          {[...depoimentos, ...depoimentos].map((depoimento, indice) => (
            <li key={`${depoimento.id}-${indice}`} aria-hidden={indice >= depoimentos.length}>
              <Cartao depoimento={depoimento} indice={indice} />
            </li>
          ))}
        </Trilho>
      </Fileira>
    </Secao>
  )
}

export default Depoimentos
