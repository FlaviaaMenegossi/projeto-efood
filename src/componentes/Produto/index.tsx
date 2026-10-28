import Botao from '../Botao'
import { formataPreco, type Prato } from '../../data/restaurantes'
import { Card, Descricao, Foto, Preco, Rodape } from './styles'

type Props = {
  prato: Prato
  aoAbrir: (prato: Prato) => void
}

const Produto = ({ prato, aoAbrir }: Props) => (
  <Card>
    <Foto>
      <img src={prato.foto} alt={prato.nome} />
    </Foto>
    <h3>{prato.nome}</h3>
    <Descricao>{prato.descricao}</Descricao>
    <Rodape>
      <Preco>{formataPreco(prato.preco)}</Preco>
      <Botao onClick={() => aoAbrir(prato)} largura="total">
        Mais detalhes
      </Botao>
    </Rodape>
  </Card>
)

export default Produto
