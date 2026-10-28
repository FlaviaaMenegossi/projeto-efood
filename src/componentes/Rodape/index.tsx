import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { paginas } from '../../data/paginas'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import youtube from '../../assets/images/youtube.svg'
import tiktok from '../../assets/images/tiktok.svg'
import linkedin from '../../assets/images/linkedin.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import seloGarantia from '../../assets/images/selo-garantia.svg'
import louros from '../../assets/images/louros.svg'
import { Container } from '../../styles'
import {
  Aviso,
  Conteudo,
  Direita,
  Frase,
  Links,
  Premio,
  RodapeContainer,
  Garantia,
  Selos,
  Social
} from './styles'

const redes = [
  { nome: 'Facebook', icone: facebook, link: 'https://facebook.com' },
  { nome: 'Instagram', icone: instagram, link: 'https://instagram.com' },
  { nome: 'X (Twitter)', icone: twitter, link: 'https://x.com' },
  { nome: 'YouTube', icone: youtube, link: 'https://youtube.com' },
  { nome: 'TikTok', icone: tiktok, link: 'https://tiktok.com' },
  { nome: 'LinkedIn', icone: linkedin, link: 'https://linkedin.com' },
  { nome: 'WhatsApp', icone: whatsapp, link: 'https://wa.me/' }
]

const premios = [2023, 2024, 2025]

const Rodape = () => (
  <RodapeContainer>
    <Container>
      <Conteudo>
        <div>
          <Logo claro />
          <Frase>
            Massa boa não espera. <em>A gente também não.</em>
          </Frase>
          <Links aria-label="Rodapé">
            {paginas.map((pagina) => (
              <li key={pagina.para}>
                <Link to={pagina.para}>{pagina.texto}</Link>
              </li>
            ))}
          </Links>
        </div>

        <Direita>
          <Selos aria-label="Selos e prêmios">
            <li>
              <Garantia>
                <img src={seloGarantia} alt="" />
                <span>Pedido garantido</span>
                <b>efood</b>
              </Garantia>
            </li>
            {premios.map((ano) => (
              <li key={ano}>
                <Premio>
                  <span>Top trattorias</span>
                  <img src={louros} alt="" />
                  <strong>{ano}</strong>
                  <b>Escolha do cliente</b>
                </Premio>
              </li>
            ))}
          </Selos>

          <Social>
            {redes.map((rede) => (
              <li key={rede.nome}>
                <a href={rede.link} target="_blank" rel="noreferrer" aria-label={rede.nome}>
                  <img src={rede.icone} alt="" />
                </a>
              </li>
            ))}
          </Social>
        </Direita>
      </Conteudo>
      <Aviso>
        A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e
        qualidade dos produtos é toda do estabelecimento contratado.
      </Aviso>
    </Container>
  </RodapeContainer>
)

export default Rodape
