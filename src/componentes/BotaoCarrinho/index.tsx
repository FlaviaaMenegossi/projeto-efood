import carrinho from '../../assets/images/cart.svg'
import { useCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
import { Botao, Icone, Texto } from './styles'

const BotaoCarrinho = () => {
  const { quantidadeTotal, total, abrir } = useCarrinho()

  return (
    <Botao type="button" onClick={abrir} aria-label={`Abrir carrinho, ${quantidadeTotal} produto(s)`}>
      <Icone>
        <img src={carrinho} alt="" />
        {quantidadeTotal > 0 && <b key={quantidadeTotal}>{quantidadeTotal}</b>}
      </Icone>
      <Texto>
        <span>{quantidadeTotal === 0 ? 'Carrinho vazio' : `${quantidadeTotal} produto(s)`}</span>
        {quantidadeTotal > 0 && <strong>{formataPreco(total)}</strong>}
      </Texto>
    </Botao>
  )
}

export default BotaoCarrinho
