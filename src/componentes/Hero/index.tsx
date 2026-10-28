import Promocoes from '../Promocoes'
import Ofertas from '../Ofertas'
import { promocoes, ofertas } from '../../data/promocoes'
import { Container } from '../../styles'
import { HeroContainer, TituloOculto } from './styles'

const Hero = () => (
  <HeroContainer>
    <TituloOculto>efood — delivery de massas artesanais</TituloOculto>
    <Promocoes promocoes={promocoes} />

    <Container>
      <Ofertas ofertas={ofertas} />
    </Container>
  </HeroContainer>
)

export default Hero
