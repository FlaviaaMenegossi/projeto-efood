import { useState } from 'react'
import Logo from '../Logo'
import BotaoCarrinho from '../BotaoCarrinho'
import { paginas } from '../../data/paginas'
import { Container } from '../../styles'
import { Acoes, CabecalhoContainer, Hamburguer, Item, Linha, Menu } from './styles'

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <CabecalhoContainer>
      <Container>
        <Linha>
          <Logo />

          <nav aria-label="Principal">
            <Menu id="menu-principal" $aberto={menuAberto}>
              {paginas.map((pagina) => (
                <li key={pagina.para}>
                  <Item to={pagina.para} end={pagina.para === '/'} onClick={() => setMenuAberto(false)}>
                    {pagina.texto}
                  </Item>
                </li>
              ))}
            </Menu>
          </nav>

          <Acoes>
            <BotaoCarrinho />
            <Hamburguer
              type="button"
              $aberto={menuAberto}
              onClick={() => setMenuAberto((aberto) => !aberto)}
              aria-expanded={menuAberto}
              aria-controls="menu-principal"
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              <span />
            </Hamburguer>
          </Acoes>
        </Linha>
      </Container>
    </CabecalhoContainer>
  )
}

export default Cabecalho
