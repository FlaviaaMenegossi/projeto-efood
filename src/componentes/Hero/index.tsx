import Promocoes from '../Promocoes'
import Ofertas from '../Ofertas'
import { promocoes, ofertas } from '../../data/promocoes'
import { Container } from '../../styles'
import { HeroContainer, Intro } from './styles'

const Hero = () => (
  <HeroContainer>
    <Promocoes promocoes={promocoes} />

    <Container>
      <Intro>
        <div>
          <span>Delivery de massas artesanais</span>
          <h1>
            Massa fresca das melhores trattorias, <em>na sua casa ou pronta para retirar.</em>
          </h1>
        </div>
        <p>
          Escolha a trattoria, monte seu pedido e receba em cerca de 35 minutos — ou passe para buscar, sem taxa de
          entrega.
        </p>
      </Intro>
      <Ofertas ofertas={ofertas} />
    </Container>
  </HeroContainer>
)

export default Hero
