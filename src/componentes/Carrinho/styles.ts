import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const Fundo = styled.div<{ $aberto: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 90;
  background-color: rgba(43, 29, 22, 0.6);
  backdrop-filter: blur(3px);
  opacity: ${({ $aberto }) => ($aberto ? 1 : 0)};
  pointer-events: ${({ $aberto }) => ($aberto ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`

export const Gaveta = styled.aside<{ $aberto: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 91;
  display: flex;
  flex-direction: column;
  width: min(100%, 440px);
  background-color: ${cores.creme};
  box-shadow: -20px 0 60px -20px rgba(43, 29, 22, 0.5);
  transform: translateX(${({ $aberto }) => ($aberto ? '0' : '100%')});
  /* ao fechar, só some depois que a animação de saída termina */
  visibility: ${({ $aberto }) => ($aberto ? 'visible' : 'hidden')};
  transition:
    transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1),
    visibility 0s linear ${({ $aberto }) => ($aberto ? '0s' : '0.35s')};
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${cores.linha};

  h2 {
    font-size: 28px;
  }
`

export const Fechar = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }

  img {
    width: 18px;
    height: 18px;
  }
`

export const Meta = styled.div<{ $completa: boolean }>`
  margin: 16px 24px 0;
  padding: 14px 16px;
  border-radius: 14px;
  background-color: ${({ $completa }) => ($completa ? cores.manjericao : cores.papel)};
  color: ${({ $completa }) => ($completa ? cores.trigo : cores.tinta)};
  border: 1px solid ${({ $completa }) => ($completa ? cores.manjericao : cores.linha)};
  font-size: 14px;
  font-weight: 700;

  b {
    color: ${cores.tomate};
  }

  span {
    display: block;
    height: 6px;
    margin-top: 10px;
    border-radius: 999px;
    background-color: ${({ $completa }) => ($completa ? 'rgba(242, 215, 166, 0.3)' : cores.linha)};
    overflow: hidden;
  }

  i {
    display: block;
    height: 100%;
    border-radius: 999px;
    background-color: ${({ $completa }) => ($completa ? cores.trigo : cores.tomate)};
    transition: width 0.4s ease;
  }
`

export const Lista = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 8px 24px;
`

export const Item = styled.li`
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid ${cores.linha};

  > img {
    width: 76px;
    height: 76px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 14px;
  }

  > div:first-of-type {
    flex: 1;
    min-width: 0;
  }

  h3 {
    font-size: 17px;
  }

  small {
    font-size: 12px;
    color: ${cores.tintaSuave};
  }

  em {
    display: inline-block;
    margin-left: 6px;
    padding: 1px 8px;
    border-radius: 999px;
    background-color: ${cores.manjericao};
    color: ${cores.trigo};
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
  }

  .direita {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    strong {
      font-family: ${fontes.titulo};
      font-size: 17px;
      white-space: nowrap;
    }
  }
`

export const Quantidade = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  padding: 3px;
  border-radius: 999px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 700;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${cores.trigo};
    }
  }

  b {
    min-width: 22px;
    text-align: center;
    font-size: 14px;
  }
`

export const Remover = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: ${cores.tintaSuave};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: ${cores.tomate};
  }
`

export const Resumo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 24px 24px;
  border-top: 1px solid ${cores.linha};
  background-color: ${cores.papel};

  > button {
    padding: 14px 22px;
    font-size: 15px;
  }
`

export const CampoCupom = styled.form<{ $erro: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  input {
    flex: 1;
    min-width: 0;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1.5px solid ${({ $erro }) => ($erro ? cores.tomate : cores.linha)};
    background-color: ${cores.creme};
    font: inherit;
    font-size: 14px;
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }

    &:focus {
      outline: none;
      border-color: ${cores.tinta};
    }
  }

  button {
    padding: 10px 18px;
    border-radius: 999px;
    background-color: ${cores.tinta};
    color: ${cores.creme};
    font-size: 14px;
    font-weight: 700;
  }

  small {
    width: 100%;
    font-size: 12px;
    font-weight: 700;
    color: ${cores.tomate};
  }
`

export const Vazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: auto 0;
  padding: 24px;
  text-align: center;

  strong {
    font-family: ${fontes.titulo};
    font-size: 26px;
  }

  p {
    max-width: 30ch;
    color: ${cores.tintaSuave};
  }
`
