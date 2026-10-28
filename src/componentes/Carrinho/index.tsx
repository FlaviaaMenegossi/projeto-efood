import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Botao from '../Botao'
import fechar from '../../assets/images/close.svg'
import { FRETE_GRATIS_A_PARTIR, useCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
import {
  Cabecalho,
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
  const { itens, aberto, fechar: fecharCarrinho, valorTotal, taxaEntrega, alterarQuantidade, remover } =
    useCarrinho()
  const navegar = useNavigate()

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

  const faltaParaFrete = FRETE_GRATIS_A_PARTIR - valorTotal

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
            <Meta $completa={faltaParaFrete <= 0}>
              {faltaParaFrete > 0 ? (
                <>
                  Faltam <b>{formataPreco(faltaParaFrete)}</b> para ganhar frete grátis
                </>
              ) : (
                <>Você ganhou frete grátis!</>
              )}
              <span>
                <i style={{ width: `${Math.min(100, (valorTotal / FRETE_GRATIS_A_PARTIR) * 100)}%` }} />
              </span>
            </Meta>

            <Lista>
              {itens.map(({ prato, restaurante, quantidade }) => (
                <Item key={prato.id}>
                  <img src={prato.foto} alt="" />
                  <div>
                    <h3>{prato.nome}</h3>
                    <small>{restaurante}</small>
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
              <p>
                Subtotal <span>{formataPreco(valorTotal)}</span>
              </p>
              <p>
                Entrega <span>{taxaEntrega === 0 ? 'Grátis' : formataPreco(taxaEntrega)}</span>
              </p>
              <p className="total">
                Total <span>{formataPreco(valorTotal + taxaEntrega)}</span>
              </p>
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
