import styled from 'styled-components'

export type Direcao = 'cima' | 'esquerda' | 'direita' | 'zoom'

const inicio: Record<Direcao, string> = {
  cima: 'translateY(48px)',
  esquerda: 'translateX(-64px)',
  direita: 'translateX(64px)',
  zoom: 'scale(0.9)'
}

export const Caixa = styled.div<{ $visivel: boolean; $direcao: Direcao }>`
  opacity: ${({ $visivel }) => ($visivel ? 1 : 0)};
  transform: ${({ $visivel, $direcao }) => ($visivel ? 'none' : inicio[$direcao])};
  transition:
    opacity 0.8s ease,
    transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
`
