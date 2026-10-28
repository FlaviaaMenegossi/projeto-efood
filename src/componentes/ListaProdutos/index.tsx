import Produto from '../Produto'
import type { Prato } from '../../data/restaurantes'
import { Container } from '../../styles'
import { Grade, Secao, Titulo } from './styles'

type Props = {
  pratos: Prato[]
  aoAbrir: (prato: Prato) => void
}

const ListaProdutos = ({ pratos, aoAbrir }: Props) => (
  <Secao>
    <Container>
      <Titulo>
        Cardápio <em>da casa</em>
      </Titulo>
      <Grade>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Produto prato={prato} aoAbrir={aoAbrir} />
          </li>
        ))}
      </Grade>
    </Container>
  </Secao>
)

export default ListaProdutos
