import Restaurante from '../Restaurante'
import type { Restaurante as RestauranteTipo } from '../../data/restaurantes'
import { Container } from '../../styles'
import { Cabecalho, Grade, Secao } from './styles'

type Props = {
  restaurantes: RestauranteTipo[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <Secao id="restaurantes">
    <Container>
      <Cabecalho>
        <span>Escolha sua cozinha</span>
        <h2>
          Trattorias <em>em destaque</em>
        </h2>
        <p>Selecionamos casas que fazem a massa do zero, todos os dias.</p>
      </Cabecalho>
      <Grade>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurante restaurante={restaurante} />
          </li>
        ))}
      </Grade>
    </Container>
  </Secao>
)

export default ListaRestaurantes
