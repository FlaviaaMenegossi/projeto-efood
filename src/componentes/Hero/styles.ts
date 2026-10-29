import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding-bottom: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 40px;
  }
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: end;
  gap: 16px 48px;
  padding: 48px 0 24px;

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${cores.manjericao};
  }

  h1 {
    margin-top: 10px;
    font-size: clamp(28px, 3.4vw, 42px);

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  p {
    color: ${cores.tintaSuave};
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding-top: 36px;
  }
`
