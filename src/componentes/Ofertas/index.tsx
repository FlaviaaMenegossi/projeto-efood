import type { Oferta } from '../../data/promocoes'
import { Card, Lista } from './styles'

type Props = {
  ofertas: Oferta[]
}

const Ofertas = ({ ofertas }: Props) => (
  <Lista>
    {ofertas.map((oferta) => (
      <li key={oferta.id}>
        <Card>
          <strong>{oferta.valor}</strong>
          <div>
            <h3>{oferta.titulo}</h3>
            <p>{oferta.descricao}</p>
          </div>
        </Card>
      </li>
    ))}
  </Lista>
)

export default Ofertas
