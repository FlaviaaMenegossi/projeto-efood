import styled, { keyframes } from 'styled-components'
import { breakpoints, cores } from '../../styles'

const pular = keyframes`
  0% {
    transform: scale(0.4);
  }

  60% {
    transform: scale(1.35);
  }

  100% {
    transform: scale(1);
  }
`

export const Icone = styled.span`
  position: relative;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${cores.creme};
  transition: background-color 0.2s ease;

  img {
    width: 22px;
    height: 22px;
  }

  b {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    border: 2px solid ${cores.papel};
    background-color: ${cores.tomate};
    color: ${cores.creme};
    font-size: 11px;
    animation: ${pular} 0.4s ease;
  }
`

export const Texto = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;

  span {
    font-size: 12px;
    font-weight: 700;
    opacity: 0.75;
  }

  strong {
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Botao = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px 18px 4px 4px;
  border-radius: 999px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  color: ${cores.tinta};
  box-shadow: 0 2px 12px rgba(43, 29, 22, 0.08);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${cores.tinta};
    border-color: ${cores.tinta};
    color: ${cores.creme};
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px;
  }
`
