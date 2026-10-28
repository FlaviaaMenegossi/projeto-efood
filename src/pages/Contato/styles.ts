import styled from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

export const Secao = styled.section`
  padding: 56px 0 120px;
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
  }

  .enviar {
    align-self: flex-start;
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

export const Campo = styled.div<{ $erro: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 700;
  }

  input,
  select,
  textarea {
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid ${({ $erro }) => ($erro ? cores.tomate : cores.linha)};
    background-color: ${cores.creme};
    font: inherit;
    color: ${cores.tinta};
    resize: vertical;

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

export const Enviado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 40px;
  border-radius: 24px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};

  .check {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${cores.manjericao};
    color: ${cores.creme};
    font-size: 26px;
  }

  h2 {
    font-size: 36px;

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
`

export const Canais = styled.aside`
  padding: 32px;
  border-radius: 24px;
  background-color: ${cores.tinta};
  color: ${cores.creme};

  h2 {
    margin-bottom: 20px;
    font-size: 26px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  img {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    padding: 11px;
    border-radius: 50%;
    background-color: rgba(251, 244, 233, 0.1);
  }

  small {
    display: block;
    font-size: 12px;
    opacity: 0.7;
  }

  strong {
    font-size: 15px;
  }
`

export const Faq = styled.section`
  max-width: 800px;
  margin-top: 80px;

  h2 {
    margin-bottom: 24px;
    font-size: clamp(30px, 4vw, 44px);

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  details {
    border-bottom: 1px solid ${cores.linha};
  }

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    font-family: ${fontes.titulo};
    font-size: 20px;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      flex-shrink: 0;
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${cores.papel};
      border: 1px solid ${cores.linha};
      font-family: ${fontes.texto};
      transition: transform 0.2s ease;
    }
  }

  details[open] summary::after {
    transform: rotate(45deg);
    background-color: ${cores.tomate};
    border-color: ${cores.tomate};
    color: ${cores.creme};
  }

  p {
    padding-bottom: 20px;
    color: ${cores.tintaSuave};
  }
`
