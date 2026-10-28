import type { ReactNode } from 'react'
import { BotaoContainer, BotaoLink } from './styles'

type Props = {
  children: ReactNode
  variante?: 'primario' | 'secundario'
  largura?: 'auto' | 'total'
} & ({ para: string; onClick?: never } | { para?: never; onClick: () => void })

const Botao = ({ children, variante = 'primario', largura = 'auto', para, onClick }: Props) => {
  if (para) {
    return (
      <BotaoLink to={para} $variante={variante} $largura={largura}>
        {children}
      </BotaoLink>
    )
  }

  return (
    <BotaoContainer type="button" onClick={onClick} $variante={variante} $largura={largura}>
      {children}
    </BotaoContainer>
  )
}

export default Botao
