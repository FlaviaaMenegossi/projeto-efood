import styled from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

export const Pagina = styled.main`
  padding: 56px 0 120px;
`

export const Titulo = styled.h1`
  font-size: clamp(36px, 5vw, 60px);

  em {
    font-weight: 400;
    color: ${cores.tomate};
  }
`

export const Etapas = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin: 24px 0 40px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: ${cores.tintaSuave};

    b {
      display: grid;
      place-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1.5px solid ${cores.linha};
      font-size: 13px;
    }

    &.atual {
      color: ${cores.tinta};

      b {
        background-color: ${cores.tomate};
        border-color: ${cores.tomate};
        color: ${cores.creme};
      }
    }

    &.feita b {
      background-color: ${cores.manjericao};
      border-color: ${cores.manjericao};
      color: ${cores.creme};
    }
  }
`

export const Grade = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px;
  border-radius: 24px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  h2 {
    font-size: 28px;
    margin-bottom: 4px;

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  .acoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-top: 8px;
  }

  .enviar {
    padding: 14px 28px;
    border-radius: 999px;
    background-color: ${cores.tomate};
    color: ${cores.creme};
    font-weight: 700;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${cores.tomateEscuro};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`

export const Linha = styled.div<{ $colunas?: string }>`
  display: grid;
  grid-template-columns: ${({ $colunas }) => $colunas ?? '1fr 1fr'};
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const Campo = styled.div<{ $erro: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 700;
  }

  input {
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid ${({ $erro }) => ($erro ? cores.tomate : cores.linha)};
    background-color: ${cores.creme};
    font: inherit;
    color: ${cores.tinta};
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${cores.tinta};
    }
  }
`

export const Erro = styled.small`
  font-size: 12px;
  font-weight: 700;
  color: ${cores.tomate};
`

export const Resumo = styled.aside`
  position: sticky;
  top: 100px;
  padding: 28px;
  border-radius: 24px;
  background-color: ${cores.tinta};
  color: ${cores.creme};

  h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(251, 244, 233, 0.15);
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    img {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      object-fit: cover;
    }

    span {
      flex: 1;
    }
  }

  p {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 14px;
    opacity: 0.8;
  }

  .total {
    margin-top: 16px;
    font-size: 18px;
    font-weight: 700;
    opacity: 1;

    span {
      font-family: ${fontes.titulo};
      font-size: 26px;
      color: ${cores.trigo};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: static;
    order: -1;
  }
`

export const Confirmacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 640px;
  margin: 24px auto;
  padding: 48px;
  border-radius: 28px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  .check {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${cores.manjericao};
    color: ${cores.creme};
    font-size: 30px;
  }

  h1 {
    font-size: clamp(34px, 5vw, 52px);

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  p {
    color: ${cores.tintaSuave};

    b {
      color: ${cores.tinta};
    }
  }

  .numero {
    padding: 6px 14px;
    border-radius: 999px;
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
    font-weight: 700;
  }

  .total {
    font-family: ${fontes.titulo};
    font-size: 24px;
    color: ${cores.tinta};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 28px 20px;
  }
`
