import { useEffect, useState } from 'react'
import { useCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
import type { Promocao } from '../../data/promocoes'
import {
  Adesivo,
  Carrossel,
  Chamada,
  Contagem,
  Cupom,
  Destaque,
  Foto,
  Indicadores,
  Precos,
  Selo,
  Slide,
  Texto,
  Trilho
} from './styles'

type Props = {
  promocoes: Promocao[]
}

const INTERVALO = 6000

const tempoAteMeiaNoite = () => {
  const agora = new Date()
  const meiaNoite = new Date(agora)
  meiaNoite.setHours(24, 0, 0, 0)
  const total = Math.floor((meiaNoite.getTime() - agora.getTime()) / 1000)

  return [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60]
    .map((parte) => String(parte).padStart(2, '0'))
    .join(':')
}

const Promocoes = ({ promocoes }: Props) => {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [restante, setRestante] = useState(tempoAteMeiaNoite)
  const { aplicarCupom, cupom: cupomAtivo } = useCarrinho()

  const irPara = (indice: number) => setAtual((indice + promocoes.length) % promocoes.length)

  useEffect(() => {
    const timer = setInterval(() => setRestante(tempoAteMeiaNoite()), 1000)
    return () => clearInterval(timer)
  }, [])

  // aplica o cupom no carrinho e, de quebra, copia o código
  const usarCupom = (codigo: string) => {
    aplicarCupom(codigo)
    navigator.clipboard?.writeText(codigo).catch(() => {})
  }

  return (
    <Carrossel
      aria-roledescription="carrossel"
      aria-label="Promoções"
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <Trilho style={{ transform: `translateX(-${atual * 100}%)` }}>
        {promocoes.map((promocao, indice) => (
          <Slide
            key={promocao.id}
            $tema={promocao.tema}
            $ativo={indice === atual}
            aria-roledescription="slide"
            aria-label={`${indice + 1} de ${promocoes.length}`}
            aria-hidden={indice !== atual}
            inert={indice !== atual}
          >
            <Foto>
              <img src={promocao.imagem} alt="" />
            </Foto>
            <Adesivo aria-hidden="true">
              <small>{promocao.adesivo.topo}</small>
              {promocao.adesivo.valor}
            </Adesivo>

            <Texto>
              <Selo>{promocao.selo}</Selo>
              <Destaque>{promocao.destaque}</Destaque>
              <h2>{promocao.titulo}</h2>
              <p>{promocao.descricao}</p>

              {promocao.precoPor && promocao.precoDe && (
                <Precos>
                  <s>{formataPreco(promocao.precoDe)}</s>
                  <strong>{formataPreco(promocao.precoPor)}</strong>
                </Precos>
              )}

              <div className="acoes">
                <Chamada to={promocao.link}>{promocao.chamada} →</Chamada>
                {promocao.cupom && (
                  <Cupom type="button" onClick={() => usarCupom(promocao.cupom!)}>
                    <span>{cupomAtivo?.codigo === promocao.cupom ? 'Cupom aplicado ✓' : 'Toque para aplicar'}</span>
                    <b>{promocao.cupom}</b>
                  </Cupom>
                )}
              </div>

              {promocao.contagem && (
                <Contagem>
                  Termina em <time>{restante}</time>
                </Contagem>
              )}
            </Texto>
          </Slide>
        ))}
      </Trilho>

      <Indicadores>
        {promocoes.map((promocao, indice) => (
          <button
            key={promocao.id}
            type="button"
            className={indice === atual ? 'ativo' : ''}
            onClick={() => irPara(indice)}
            aria-label={`Ir para a promoção ${indice + 1}`}
            aria-current={indice === atual}
          >
            {/* a barra de progresso controla a troca automática: ao terminar, avança o slide */}
            <span
              style={{ animationDuration: `${INTERVALO}ms`, animationPlayState: pausado ? 'paused' : 'running' }}
              onAnimationEnd={() => irPara(atual + 1)}
            />
          </button>
        ))}
      </Indicadores>
    </Carrossel>
  )
}

export default Promocoes
