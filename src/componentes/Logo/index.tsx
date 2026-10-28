import fork from '../../assets/images/fork.svg'
import { LogoLink } from './styles'

type Props = {
  claro?: boolean
}

const Logo = ({ claro = false }: Props) => (
  <LogoLink to="/" $claro={claro} aria-label="efood — página inicial">
    <img src={fork} alt="" />
    efood
  </LogoLink>
)

export default Logo
