import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Secao = styled.section`
  padding: 96px 0 120px;
  scroll-margin-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px 0 80px;
  }
`

export const Cabecalho = styled.div`
  margin-bottom: 48px;

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${cores.manjericao};
  }

  h2 {
    margin-top: 12px;
    font-size: clamp(32px, 4.5vw, 52px);

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  p {
    margin-top: 12px;
    color: ${cores.tintaSuave};
  }
`

export const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
