import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores, fontes } from '../../styles'

export const LogoLink = styled(Link)<{ $claro: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${fontes.titulo};
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.04em;
  color: ${({ $claro }) => ($claro ? cores.creme : cores.tinta)};

  img {
    width: 26px;
    height: 26px;
    padding: 4px;
    border-radius: 50%;
    background-color: ${({ $claro }) => ($claro ? cores.creme : 'transparent')};
    box-sizing: content-box;
  }
`
