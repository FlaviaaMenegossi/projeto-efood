import Tag from '../Tag'
import Botao from '../Botao'
import estrela from '../../assets/images/star.svg'
import type { Restaurante as RestauranteTipo } from '../../data/restaurantes'
import { Avaliacao, Card, Capa, Conteudo, Descricao, Tags, Titulo } from './styles'

type Props = {
  restaurante: RestauranteTipo
}

const Restaurante = ({ restaurante }: Props) => (
  <Card>
    <Capa>
      <img src={restaurante.capa} alt={`Prato do restaurante ${restaurante.nome}`} />
      <Tags>
        {restaurante.destaque && <Tag destaque>Destaque da semana</Tag>}
        <Tag>{restaurante.tipo}</Tag>
      </Tags>
    </Capa>
    <Conteudo>
      <Titulo>
        <h3>{restaurante.nome}</h3>
        <Avaliacao>
          {restaurante.avaliacao.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
          <img src={estrela} alt="estrelas" />
        </Avaliacao>
      </Titulo>
      <Descricao>{restaurante.descricao}</Descricao>
      <Botao para={`/perfil/${restaurante.id}`} variante="secundario">
        Ver cardápio →
      </Botao>
    </Conteudo>
  </Card>
)

export default Restaurante
