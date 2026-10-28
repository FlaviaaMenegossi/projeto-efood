import styled from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

export const RodapeContainer = styled.footer`
  padding: 72px 0 40px;
  background-color: ${cores.manjericao};
  color: ${cores.creme};
`

export const Conteudo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(251, 244, 233, 0.18);

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Frase = styled.p`
  margin-top: 20px;
  font-family: ${fontes.titulo};
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.1;

  em {
    display: block;
    color: ${cores.trigo};
  }
`

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin-top: 24px;

  a {
    font-weight: 700;
    font-size: 15px;
    opacity: 0.85;
    transition:
      opacity 0.2s ease,
      color 0.2s ease;

    &:hover {
      opacity: 1;
      color: ${cores.trigo};
    }
  }
`

export const Direita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    align-items: flex-start;
  }
`

export const Selos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li > div {
    width: 112px;
    height: 104px;
    border-radius: 10px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`

export const Garantia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${cores.papel};
  border: 3px solid ${cores.trigo};
  color: ${cores.tinta};
  text-align: center;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.1;
  }

  b {
    font-family: ${fontes.titulo};
    font-style: italic;
    font-size: 16px;
    color: ${cores.tomate};
  }
`

export const Premio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 8px;
  background-color: ${cores.tinta};
  border: 3px solid ${cores.trigo};
  text-align: center;

  span {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${cores.trigo};
  }

  img {
    position: absolute;
    top: 24px;
    width: 104px;
  }

  strong {
    position: relative;
    margin-top: 8px;
    font-family: ${fontes.titulo};
    font-size: 20px;
    line-height: 1.2;
    color: ${cores.creme};
  }

  b {
    position: relative;
    margin-top: auto;
    width: 100%;
    padding: 5px 0;
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`

export const Social = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  a {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(251, 244, 233, 0.3);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background-color: ${cores.tomate};
      border-color: ${cores.tomate};
      transform: translateY(-2px);
    }
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const Aviso = styled.p`
  margin-top: 32px;
  max-width: 640px;
  font-size: 12px;
  opacity: 0.7;
`
