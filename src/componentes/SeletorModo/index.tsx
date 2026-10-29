import { useCarrinho, type ModoEntrega } from '../../contexto/useCarrinho'
import { Opcao, Seletor } from './styles'

const opcoes: { modo: ModoEntrega; titulo: string; detalhe: string }[] = [
  { modo: 'entrega', titulo: 'Receber em casa', detalhe: 'grátis acima de R$ 80' },
  { modo: 'retirada', titulo: 'Retirar no local', detalhe: 'sem taxa de entrega' }
]

const SeletorModo = () => {
  const { modo, setModo } = useCarrinho()

  return (
    <Seletor role="radiogroup" aria-label="Como você quer receber o pedido?">
      {opcoes.map((opcao) => (
        <Opcao
          key={opcao.modo}
          type="button"
          role="radio"
          aria-checked={modo === opcao.modo}
          $ativa={modo === opcao.modo}
          onClick={() => setModo(opcao.modo)}
        >
          <strong>{opcao.titulo}</strong>
          <small>{opcao.detalhe}</small>
        </Opcao>
      ))}
    </Seletor>
  )
}

export default SeletorModo
