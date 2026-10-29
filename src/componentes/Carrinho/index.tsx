import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Botao from '../Botao'
import SeletorModo from '../SeletorModo'
import ValoresPedido from '../ValoresPedido'
import fechar from '../../assets/images/close.svg'
import { FRETE_GRATIS_A_PARTIR, useCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
import {
  Cabecalho,
  CampoCupom,
  Fechar,
  Fundo,
  Gaveta,
  Item,
  Lista,
  Meta,
  Quantidade,
  Remover,
  Resumo,
  Vazio
} from './styles'

const Carrinho = () => {
  const { itens, aberto, fechar: fecharCarrinho, valorBase, modo, cupom, aplicarCupom, alterarQuantidade, remover } =
    useCarrinho()
  const navegar = useNavigate()
  const [codigo, setCodigo] = useState('')
  const [erroCupom, setErroCupom] = useState(false)

  useEffect(() => {
    if (!aberto) return

    const aoPressionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') fecharCarrinho()
    }

    document.addEventListener('keydown', aoPressionar)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', aoPressionar)
      document.body.style.overflow = ''
    }
  }, [aberto, fecharCarrinho])

  const irPara = (caminho: string) => {
    fecharCarrinho()
    navegar(caminho)
  }

  const enviarCupom = (evento: FormEvent) => {
    evento.preventDefault()
    const valido = aplicarCupom(codigo)
    setErroCupom(!valido)
    if (valido) setCodigo('')
  }

  // mostra quanto falta para o frete grátis (na retirada, já não há taxa)
  let meta: { texto: ReactNode; progresso: number; completa: boolean }
  if (modo === 'entrega' && valorBase < FRETE_GRATIS_A_PARTIR) {
    meta = {
      texto: (
        <>
          Faltam <b>{formataPreco(FRETE_GRATIS_A_PARTIR - valorBase)}</b> para ganhar frete grátis
        </>
      ),
      progresso: valorBase / FRETE_GRATIS_A_PARTIR,
      completa: false
    }
  } else {
    meta = {
      texto: <>{modo === 'entrega' ? 'Você ganhou frete grátis!' : 'Retirada no local, sem taxa de entrega!'}</>,
      progresso: 1,
      completa: true
    }
  }

  return (
    <>
      <Fundo $aberto={aberto} onClick={fecharCarrinho} />
      <Gaveta
        $aberto={aberto}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho"
        aria-hidden={!aberto}
        inert={!aberto}
      >
        <Cabecalho>
          <h2>Seu pedido</h2>
          <Fechar type="button" onClick={fecharCarrinho} aria-label="Fechar carrinho">
            <img src={fechar} alt="" />
          </Fechar>
        </Cabecalho>

        {itens.length === 0 ? (
          <Vazio>
            <strong>Seu carrinho está vazio</strong>
            <p>Que tal uma massa fresquinha? Escolha uma trattoria e monte seu pedido.</p>
            <Botao onClick={() => irPara('/')}>Ver trattorias</Botao>
          </Vazio>
        ) : (
          <>
            <Meta $completa={meta.completa}>
              {meta.texto}
              <span>
                <i style={{ width: `${Math.min(100, meta.progresso * 100)}%` }} />
              </span>
            </Meta>

            <Lista>
              {itens.map(({ prato, restaurante, quantidade }) => (
                <Item key={prato.id}>
                  <img src={prato.foto} alt="" />
                  <div>
                    <h3>{prato.nome}</h3>
                    <small>{restaurante}</small>
                    {prato.leve2pague1 && <em>Leve 2, pague 1</em>}
                    <Quantidade>
                      <button
                        type="button"
                        onClick={() => alterarQuantidade(prato.id, quantidade - 1)}
                        aria-label={`Diminuir ${prato.nome}`}
                      >
                        −
                      </button>
                      <b>{quantidade}</b>
                      <button
                        type="button"
                        onClick={() => alterarQuantidade(prato.id, quantidade + 1)}
                        aria-label={`Aumentar ${prato.nome}`}
                      >
                        +
                      </button>
                    </Quantidade>
                  </div>
                  <div className="direita">
                    <strong>{formataPreco(prato.preco * quantidade)}</strong>
                    <Remover type="button" onClick={() => remover(prato.id)}>
                      Remover
                    </Remover>
                  </div>
                </Item>
              ))}
            </Lista>

            <Resumo>
              <SeletorModo />

              {!cupom && (
                <CampoCupom onSubmit={enviarCupom} $erro={erroCupom}>
                  <input
                    value={codigo}
                    onChange={(evento) => {
                      setCodigo(evento.target.value)
                      setErroCupom(false)
                    }}
                    placeholder="Tem um cupom?"
                    aria-label="Código do cupom"
                    aria-invalid={erroCupom}
                  />
                  <button type="submit">Aplicar</button>
                  {erroCupom && <small>Cupom inválido. Experimente MASSA30.</small>}
                </CampoCupom>
              )}

              <ValoresPedido podeRemoverCupom />

              <Botao onClick={() => irPara('/checkout')} largura="total">
                Finalizar pedido →
              </Botao>
              <Botao onClick={fecharCarrinho} variante="secundario" largura="total">
                Continuar comprando
              </Botao>
            </Resumo>
          </>
        )}
      </Gaveta>
    </>
  )
}

export default Carrinho
