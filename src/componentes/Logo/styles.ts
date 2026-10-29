import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores, fontes } from '../../styles'

export const LogoLink = styled(Link)<{ $claro: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${fontes.titulo};
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.04em;
  color: ${({ $claro }) => ($claro ? cores.creme : cores.tomate)};
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(-2deg) scale(1.03);
  }

  img {
    width: 22px;
    height: 22px;
    padding: 7px;
    box-sizing: content-box;
    border-radius: 50%;
    background-color: ${({ $claro }) => ($claro ? cores.creme : cores.tomate)};
    box-shadow: 0 6px 14px -6px rgba(201, 55, 44, 0.7);
  }

  b {
    color: ${({ $claro }) => ($claro ? cores.trigo : cores.tinta)};
  }
`
