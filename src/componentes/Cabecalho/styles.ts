import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { breakpoints, cores } from '../../styles'

export const CabecalhoContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 12px 0;
  background-color: rgba(251, 244, 233, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${cores.linha};
`

export const Linha = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const Menu = styled.ul<{ $aberto: boolean }>`
  display: flex;
  gap: 4px;

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    top: calc(100% + 12px);
    left: -24px;
    right: -24px;
    flex-direction: column;
    gap: 0;
    padding: 8px 24px 20px;
    background-color: ${cores.creme};
    border-bottom: 1px solid ${cores.linha};
    box-shadow: 0 20px 30px -20px rgba(43, 29, 22, 0.35);
    display: ${({ $aberto }) => ($aberto ? 'flex' : 'none')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    left: -16px;
    right: -16px;
    padding: 8px 16px 20px;
  }
`

export const Item = styled(NavLink)`
  position: relative;
  display: block;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: ${cores.tomate};
  }

  &.active {
    color: ${cores.tomate};
    background-color: ${cores.papel};
    box-shadow: inset 0 0 0 1px ${cores.linha};
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 14px 0;
    border-radius: 0;
    font-size: 18px;
    border-bottom: 1px solid ${cores.linha};

    &.active {
      background: none;
      box-shadow: none;
    }
  }
`

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Hamburguer = styled.button<{ $aberto: boolean }>`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  span,
  span::before,
  span::after {
    display: block;
    width: 18px;
    height: 2px;
    margin: 0 auto;
    border-radius: 2px;
    background-color: ${cores.tinta};
    transition:
      transform 0.25s ease,
      background-color 0.2s ease;
  }

  span {
    position: relative;
    background-color: ${({ $aberto }) => ($aberto ? 'transparent' : cores.tinta)};

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
    }

    &::before {
      transform: ${({ $aberto }) => ($aberto ? 'rotate(45deg)' : 'translateY(-6px)')};
    }

    &::after {
      transform: ${({ $aberto }) => ($aberto ? 'rotate(-45deg)' : 'translateY(6px)')};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`
