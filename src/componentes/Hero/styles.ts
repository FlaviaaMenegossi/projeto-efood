import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding-bottom: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 40px;
  }
`

export const TituloOculto = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`
