import { TagContainer } from './styles'

type Props = {
  children: string
  destaque?: boolean
}

const Tag = ({ children, destaque = false }: Props) => (
  <TagContainer $destaque={destaque}>{children}</TagContainer>
)

export default Tag
