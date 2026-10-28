import styled, { keyframes } from 'styled-components'
import { cores, fontes } from '../../styles'

const deslizar = keyframes`
  to {
    transform: translateX(-50%);
  }
`

export const FaixaContainer = styled.div`
  overflow: hidden;
  padding: 16px 0;
`

export const Faixa = styled.div`
  overflow: hidden;
  width: 104%;
  margin-left: -2%;
  padding: 18px 0;
  background-color: ${cores.tomate};
  color: ${cores.creme};
  transform: rotate(-1.2deg);
`

export const Trilho = styled.div`
  display: flex;
  width: max-content;
  animation: ${deslizar} 40s linear infinite;

  span {
    display: inline-flex;
    align-items: center;
    font-family: ${fontes.titulo};
    font-style: italic;
    font-size: 28px;
    white-space: nowrap;

    &::after {
      content: '✦';
      margin: 0 32px;
      font-style: normal;
      font-size: 16px;
      color: ${cores.trigo};
    }
  }
`
