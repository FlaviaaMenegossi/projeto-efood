import fork from '../../assets/images/fork.svg'
import forkClaro from '../../assets/images/fork-claro.svg'
import { LogoLink } from './styles'

type Props = {
  claro?: boolean
}

const Logo = ({ claro = false }: Props) => (
  <LogoLink to="/" $claro={claro} aria-label="eFood — página inicial">
    <img src={claro ? fork : forkClaro} alt="" />
    <span>
      <b>e</b>Food
    </span>
  </LogoLink>
)

export default Logo
