import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

type EstiloProps = {
  $variante: 'primario' | 'secundario'
  $largura: 'auto' | 'total'
}

const estiloBotao = css<EstiloProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $largura }) => ($largura === 'total' ? '100%' : 'auto')};
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  ${({ $variante }) =>
    $variante === 'primario'
      ? css`
          background-color: ${cores.tomate};
          color: ${cores.creme};

          &:hover {
            background-color: ${cores.tomateEscuro};
          }
        `
      : css`
          background-color: transparent;
          color: ${cores.tinta};
          box-shadow: inset 0 0 0 1.5px ${cores.tinta};

          &:hover {
            background-color: ${cores.tinta};
            color: ${cores.creme};
          }
        `}

  &:active {
    transform: scale(0.97);
  }
`

export const BotaoContainer = styled.button<EstiloProps>`
  ${estiloBotao}
`

export const BotaoLink = styled(Link)<EstiloProps>`
  ${estiloBotao}
`
