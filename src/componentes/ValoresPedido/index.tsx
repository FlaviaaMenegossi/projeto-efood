import { useCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
import { Linha, Lista, Total } from './styles'

type Props = {
  tema?: 'claro' | 'escuro'
  podeRemoverCupom?: boolean
}

const ValoresPedido = ({ tema = 'claro', podeRemoverCupom = false }: Props) => {
  const { subtotal, descontoPromocoes, cupom, descontoCupom, removerCupom, modo, taxaEntrega, total } =
    useCarrinho()

  return (
    <Lista $tema={tema}>
      <Linha>
        <span>Subtotal</span>
        <span>{formataPreco(subtotal)}</span>
      </Linha>
      {descontoPromocoes > 0 && (
        <Linha className="desconto">
          <span>Leve 2, pague 1</span>
          <span>− {formataPreco(descontoPromocoes)}</span>
        </Linha>
      )}
      {cupom && (
        <Linha className="desconto">
          <span>
            Cupom {cupom.codigo} ({cupom.percentual}%)
            {podeRemoverCupom && (
              <button type="button" onClick={removerCupom}>
                remover
              </button>
            )}
          </span>
          <span>− {formataPreco(descontoCupom)}</span>
        </Linha>
      )}
      <Linha>
        <span>{modo === 'entrega' ? 'Entrega' : 'Retirada no local'}</span>
        <span>{taxaEntrega === 0 ? 'Grátis' : formataPreco(taxaEntrega)}</span>
      </Linha>
      <Total>
        <span>Total</span>
        <span>{formataPreco(total)}</span>
      </Total>
    </Lista>
  )
}

export default ValoresPedido
