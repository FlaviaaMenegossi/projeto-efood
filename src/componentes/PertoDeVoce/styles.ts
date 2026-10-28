import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores, fontes } from '../../styles'

const radar = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0.4);
    opacity: 0.8;
  }

  to {
    transform: translate(-50%, -50%) scale(3.2);
    opacity: 0;
  }
`

const surgir = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
`

export const Secao = styled.section`
  padding: 112px 0;
  background-color: ${cores.tinta};
  color: ${cores.creme};
  scroll-margin-top: 64px;

  .rodape-secao {
    margin-top: 40px;
    text-align: center;
    font-size: 15px;
    opacity: 0.8;

    a {
      font-weight: 700;
      color: ${cores.trigo};
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 72px 0;
  }
`

export const Topo = styled.div`
  max-width: 900px;
  margin-bottom: 56px;

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${cores.dourado};
  }

  h2 {
    margin-top: 16px;
    font-size: clamp(44px, 7vw, 96px);
    line-height: 0.95;

    em {
      display: block;
      font-weight: 400;
      color: ${cores.tomate};
    }
  }
`

export const Grade = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const Painel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Abas = styled.div`
  display: inline-flex;
  align-self: flex-start;
  padding: 6px;
  border-radius: 999px;
  background-color: rgba(251, 244, 233, 0.08);
  border: 1px solid rgba(251, 244, 233, 0.14);
`

export const Aba = styled.button<{ $ativa: boolean }>`
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ $ativa }) => ($ativa ? cores.creme : 'rgba(251, 244, 233, 0.7)')};
  background-color: ${({ $ativa }) => ($ativa ? cores.tomate : 'transparent')};
  box-shadow: ${({ $ativa }) => ($ativa ? '0 10px 24px -10px rgba(201, 55, 44, 0.9)' : 'none')};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    color: ${cores.creme};
  }
`

export const Frase = styled.p`
  font-family: ${fontes.titulo};
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.1;
  animation: ${surgir} 0.4s ease;

  em {
    color: ${cores.trigo};
  }
`

export const Busca = styled.form`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 999px;
  background-color: ${cores.creme};

  input {
    flex: 1;
    min-width: 0;
    padding: 0 20px;
    border: none;
    background: none;
    font: inherit;
    font-size: 16px;
    color: ${cores.tinta};

    &::placeholder {
      color: ${cores.tintaSuave};
    }

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    box-shadow: 0 0 0 3px ${cores.dourado};
  }

  button {
    padding: 14px 26px;
    border-radius: 999px;
    background-color: ${cores.tinta};
    color: ${cores.creme};
    font-weight: 700;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${cores.tomate};
    }
  }
`

export const Pessoas = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  animation: ${surgir} 0.3s ease;

  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(251, 244, 233, 0.3);
    color: ${cores.creme};
    font-size: 18px;

    &:hover {
      background-color: ${cores.creme};
      color: ${cores.tinta};
    }
  }

  b {
    min-width: 24px;
    text-align: center;
    font-family: ${fontes.titulo};
    font-size: 24px;
    color: ${cores.trigo};
  }
`

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Item = styled.li<{ $ativo: boolean }>`
  padding: 16px 18px;
  border-radius: 20px;
  background-color: ${({ $ativo }) => ($ativo ? 'rgba(251, 244, 233, 0.12)' : 'rgba(251, 244, 233, 0.05)')};
  border: 1px solid ${({ $ativo }) => ($ativo ? cores.tomate : 'rgba(251, 244, 233, 0.1)')};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  animation: ${surgir} 0.3s ease;
`

export const Resumo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  .numero {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: ${cores.tomate};
    font-weight: 700;
    font-size: 14px;
  }

  > div {
    flex: 1;
    min-width: 0;
  }

  h3 {
    font-size: 19px;
  }

  p {
    font-size: 14px;
    opacity: 0.75;

    b {
      margin-left: 8px;
      padding: 2px 8px;
      border-radius: 999px;
      background-color: ${cores.manjericao};
      color: ${cores.trigo};
      font-size: 12px;
    }
  }
`

export const Acao = styled(Link)`
  flex-shrink: 0;
  padding: 10px 20px;
  border-radius: 999px;
  background-color: ${cores.creme};
  color: ${cores.tinta};
  font-weight: 700;
  font-size: 14px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: ${cores.tomate};
    color: ${cores.creme};
  }
`

export const Horarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 0 46px;

  button {
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid rgba(251, 244, 233, 0.25);
    color: ${cores.creme};
    font-size: 14px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background-color: ${cores.tomate};
      border-color: ${cores.tomate};
    }
  }
`

export const Confirmacao = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 12px 0 0 46px;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${cores.manjericao};
  color: ${cores.trigo};
  font-weight: 700;
  font-size: 14px;
  animation: ${surgir} 0.3s ease;

  button {
    color: ${cores.creme};
    font-size: 13px;
    text-decoration: underline;
    opacity: 0.8;
  }
`

export const Vazio = styled.p`
  padding: 24px;
  border-radius: 20px;
  background-color: rgba(251, 244, 233, 0.05);

  button {
    color: ${cores.trigo};
    font-weight: 700;
    text-decoration: underline;
  }
`

export const Mapa = styled.div`
  position: sticky;
  top: 24px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 32px;
  border: 8px solid rgba(251, 244, 233, 0.08);

  > img {
    width: 100%;
    height: 100%;
  }

  .legenda {
    position: absolute;
    left: 16px;
    bottom: 16px;
    padding: 10px 16px;
    border-radius: 999px;
    background-color: ${cores.tinta};
    font-size: 14px;

    strong {
      color: ${cores.trigo};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    top: 0;
    order: -1;
  }
`

export const Voce = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #2f6fde;
  border: 3px solid ${cores.papel};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(47, 111, 222, 0.35);
    animation: ${radar} 2.2s ease-out infinite;
  }

  span {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px 8px;
    border-radius: 6px;
    background-color: ${cores.tinta};
    font-size: 11px;
    font-weight: 700;
  }
`

export const Pino = styled.div<{ $ativo: boolean }>`
  position: absolute;
  z-index: ${({ $ativo }) => ($ativo ? 2 : 1)};
  transform: translate(-50%, -100%) scale(${({ $ativo }) => ($ativo ? 1.25 : 1)});
  transform-origin: bottom center;
  transition: transform 0.25s cubic-bezier(0.3, 1.4, 0.5, 1);

  b {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    background-color: ${({ $ativo }) => ($ativo ? cores.tinta : cores.tomate)};
    border: 3px solid ${cores.papel};
    box-shadow: 0 6px 14px -4px rgba(0, 0, 0, 0.45);

    i {
      transform: rotate(45deg);
      font-style: normal;
      font-size: 14px;
      color: ${cores.creme};
    }
  }

  span {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 10px;
    border-radius: 8px;
    background-color: ${cores.tinta};
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    opacity: ${({ $ativo }) => ($ativo ? 1 : 0)};
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
`
