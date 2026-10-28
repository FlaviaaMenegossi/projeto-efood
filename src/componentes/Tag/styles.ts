import styled from 'styled-components'
import { cores } from '../../styles'

export const TagContainer = styled.span<{ $destaque: boolean }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background-color: ${({ $destaque }) => ($destaque ? cores.tomate : cores.papel)};
  color: ${({ $destaque }) => ($destaque ? cores.creme : cores.tinta)};
  box-shadow: 0 2px 8px rgba(43, 29, 22, 0.12);
`
