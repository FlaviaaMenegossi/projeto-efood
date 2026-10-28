import type { ReactNode } from 'react'
import { useNaTela } from '../../hooks/useNaTela'
import { Caixa, type Direcao } from './styles'

type Props = {
  children: ReactNode
  atraso?: number
  direcao?: Direcao
  className?: string
}

const Revelar = ({ children, atraso = 0, direcao = 'cima', className }: Props) => {
  const [ref, visivel] = useNaTela<HTMLDivElement>()

  return (
    <Caixa
      ref={ref}
      className={className}
      $visivel={visivel}
      $direcao={direcao}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </Caixa>
  )
}

export default Revelar
