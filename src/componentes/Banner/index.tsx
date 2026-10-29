import { Container } from '../../styles'
import { BannerContainer, Detalhes, Nome, Tipo } from './styles'

type Props = {
  tipo: string
  nome: string
  imagem: string
  detalhes?: string[]
}

const Banner = ({ tipo, nome, imagem, detalhes = [] }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${imagem})` }}>
    <Container>
      <Tipo>{tipo}</Tipo>
      <Nome>{nome}</Nome>
      {detalhes.length > 0 && (
        <Detalhes>
          {detalhes.map((detalhe) => (
            <li key={detalhe}>{detalhe}</li>
          ))}
        </Detalhes>
      )}
    </Container>
  </BannerContainer>
)

export default Banner
