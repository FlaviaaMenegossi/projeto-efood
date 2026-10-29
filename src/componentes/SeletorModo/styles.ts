import styled from 'styled-components'
import { cores } from '../../styles'

export const Seletor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 5px;
  border-radius: 16px;
  background-color: ${cores.creme};
  border: 1px solid ${cores.linha};
`

export const Opcao = styled.button<{ $ativa: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 8px;
  border-radius: 12px;
  background-color: ${({ $ativa }) => ($ativa ? cores.tinta : 'transparent')};
  color: ${({ $ativa }) => ($ativa ? cores.creme : cores.tinta)};
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  strong {
    font-size: 14px;
  }

  small {
    font-size: 11px;
    opacity: 0.75;
  }

  &:hover {
    background-color: ${({ $ativa }) => ($ativa ? cores.tinta : cores.papel)};
  }
`
