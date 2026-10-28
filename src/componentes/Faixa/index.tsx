import { Faixa as FaixaVermelha, FaixaContainer, Trilho } from './styles'

const massas = ['Spaghetti', 'Fettuccine', 'Ravioli', 'Lasanha', 'Penne', 'Farfalle', 'Gnocchi', 'Tagliatelle']

const Faixa = () => (
  <FaixaContainer aria-hidden="true">
    <FaixaVermelha>
      <Trilho>
        {[...massas, ...massas].map((massa, indice) => (
          <span key={indice}>{massa}</span>
        ))}
      </Trilho>
    </FaixaVermelha>
  </FaixaContainer>
)

export default Faixa
