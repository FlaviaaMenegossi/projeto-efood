import styled, { css, keyframes } from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

const pulsar = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(201, 55, 44, 0.45);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(201, 55, 44, 0);
  }
`

export const Lista = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const base = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 20px 22px;
  border-radius: 20px;
  text-align: left;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  strong {
    padding: 8px 14px;
    border-radius: 12px;
    font-family: ${fontes.titulo};
    font-size: 20px;
    font-style: italic;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
  }
`

export const Card = styled.div`
  ${base}
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  &:hover {
    border-color: ${cores.tomate};
  }

  strong {
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
  }

  p {
    color: ${cores.tintaSuave};
  }
`

export const CardCupom = styled.button`
  ${base}
  position: relative;
  overflow: hidden;
  background-color: ${cores.tomate};
  color: ${cores.creme};
  border: 2px dashed rgba(251, 244, 233, 0.7);
  animation: ${pulsar} 2.2s ease-in-out infinite;

  &:hover {
    background-color: ${cores.tomateEscuro};
  }

  strong {
    background-color: ${cores.creme};
    color: ${cores.tomate};
    font-size: 24px;
  }

  p {
    opacity: 0.9;
  }

  b {
    padding: 1px 6px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    letter-spacing: 0.08em;
  }
`
