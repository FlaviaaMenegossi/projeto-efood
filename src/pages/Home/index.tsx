import Cabecalho from '../../componentes/Cabecalho'
import Hero from '../../componentes/Hero'
import PertoDeVoce from '../../componentes/PertoDeVoce'
import Faixa from '../../componentes/Faixa'
import ListaRestaurantes from '../../componentes/ListaRestaurantes'
import Depoimentos from '../../componentes/Depoimentos'
import Rodape from '../../componentes/Rodape'
import { restaurantes } from '../../data/restaurantes'
import { depoimentos, resumoAvaliacoes } from '../../data/depoimentos'

const Home = () => (
  <>
    <Cabecalho />
    <Hero />
    <PertoDeVoce restaurantes={restaurantes} />
    <Faixa />
    <ListaRestaurantes restaurantes={restaurantes} />
    <Depoimentos depoimentos={depoimentos} resumo={resumoAvaliacoes} />
    <Rodape />
  </>
)

export default Home
