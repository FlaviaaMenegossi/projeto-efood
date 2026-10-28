import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Secao = styled.section`
  padding: 72px 0 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0 80px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 40px;
  font-size: clamp(30px, 4vw, 44px);

  em {
    font-weight: 400;
    color: ${cores.tomate};
  }
`

export const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
