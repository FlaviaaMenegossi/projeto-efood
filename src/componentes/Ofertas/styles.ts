import styled from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

export const Lista = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  padding: 20px 24px;
  border-radius: 20px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${cores.tomate};
  }

  strong {
    flex-shrink: 0;
    padding: 10px 14px;
    border-radius: 14px;
    background-color: ${cores.trigo};
    font-family: ${fontes.titulo};
    font-size: 20px;
    font-style: italic;
    color: ${cores.tomateEscuro};
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
    color: ${cores.tintaSuave};
  }
`
