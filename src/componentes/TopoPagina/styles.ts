import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const TopoContainer = styled.section<{ $comImagem: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: ${({ $comImagem }) => ($comImagem ? '420px' : '0')};
  padding: ${({ $comImagem }) => ($comImagem ? '48px 0' : '72px 0 48px')};
  background-color: ${cores.tinta};
  background-size: cover;
  background-position: center;
  color: ${cores.creme};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(43, 29, 22, 0.25) 0%, rgba(43, 29, 22, 0.9) 100%);
  }

  > div {
    position: relative;
  }

  h1 {
    margin-top: 16px;
    max-width: 16ch;
    font-size: clamp(40px, 6vw, 72px);

    em {
      font-weight: 400;
      color: ${cores.trigo};
    }
  }

  p {
    margin-top: 16px;
    max-width: 52ch;
    font-size: 18px;
    opacity: 0.85;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: ${({ $comImagem }) => ($comImagem ? '320px' : '0')};
  }
`

export const Selo = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: ${cores.tomate};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`
