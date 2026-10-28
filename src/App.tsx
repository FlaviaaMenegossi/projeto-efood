import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Carrinho from './componentes/Carrinho'
import RolarTopo from './componentes/RolarTopo'
import CarrinhoProvider from './contexto/CarrinhoProvider'
import { GlobalStyle } from './styles'

const App = () => (
  <BrowserRouter>
    <CarrinhoProvider>
      <GlobalStyle />
      <RolarTopo />
      <Rotas />
      <Carrinho />
    </CarrinhoProvider>
  </BrowserRouter>
)

export default App
