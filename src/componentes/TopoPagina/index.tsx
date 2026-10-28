import type { ReactNode } from 'react'
import { Container } from '../../styles'
import { Selo, TopoContainer } from './styles'

type Props = {
  selo: string
  titulo: ReactNode
  descricao?: string
  imagem?: string
}

const TopoPagina = ({ selo, titulo, descricao, imagem }: Props) => (
  <TopoContainer style={imagem ? { backgroundImage: `url(${imagem})` } : undefined} $comImagem={!!imagem}>
    <Container>
      <Selo>{selo}</Selo>
      <h1>{titulo}</h1>
      {descricao && <p>{descricao}</p>}
    </Container>
  </TopoContainer>
)

export default TopoPagina
