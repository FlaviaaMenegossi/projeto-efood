import salao from '../../assets/images/salao.jpg'
import { Container } from '../../styles'
import { BannerContainer, Nome, Tipo } from './styles'

type Props = {
  tipo: string
  nome: string
}

const Banner = ({ tipo, nome }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${salao})` }}>
    <Container>
      <Tipo>{tipo}</Tipo>
      <Nome>{nome}</Nome>
    </Container>
  </BannerContainer>
)

export default Banner
