import styled, { keyframes } from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

const deslizar = keyframes`
  to {
    transform: translateX(-50%);
  }
`

const avatares = [cores.tomate, cores.manjericao, cores.tinta]

export const Secao = styled.section`
  padding: 80px 0 88px;
  overflow: hidden;
  background-color: ${cores.trigo};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 56px 0 64px;
  }
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 36px;

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${cores.tomateEscuro};
  }

  h2 {
    margin-top: 12px;
    font-size: clamp(32px, 4vw, 48px);
    line-height: 0.95;

    em {
      font-weight: 400;
      color: ${cores.tomate};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Placar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  border-radius: 18px;
  background-color: ${cores.tinta};
  color: ${cores.creme};
  box-shadow: 0 24px 48px -24px rgba(43, 29, 22, 0.6);

  > strong {
    font-family: ${fontes.titulo};
    font-size: 44px;
    line-height: 1;
    color: ${cores.trigo};
  }

  p {
    margin-top: 6px;
    font-size: 13px;
    opacity: 0.85;
  }

  b {
    color: ${cores.trigo};
  }
`

export const Estrelas = styled.div`
  display: flex;
  gap: 2px;

  img {
    width: 16px;
    height: 16px;

    &.apagada {
      opacity: 0.25;
      filter: grayscale(1);
    }
  }
`

export const Fileira = styled.div`
  /* com animações desligadas, a fileira vira uma rolagem horizontal */
  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
  }
`

export const Trilho = styled.ul`
  display: flex;
  gap: 14px;
  width: max-content;
  padding: 8px 7px;
  animation: ${deslizar} 70s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

export const Card = styled.article<{ $tom: number }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  height: 100%;
  padding: 20px;
  border-radius: 18px;
  background-color: ${cores.papel};
  box-shadow: 0 12px 32px -20px rgba(43, 29, 22, 0.5);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px) rotate(-0.6deg);
  }

  blockquote {
    flex: 1;
    font-family: ${fontes.titulo};
    font-size: 16px;
    line-height: 1.35;
  }

  > div:last-child > span {
    background-color: ${({ $tom }) => avatares[$tom % avatares.length]};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 260px;
    padding: 18px;

    blockquote {
      font-size: 15px;
    }
  }
`

export const Prato = styled.p`
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${cores.creme};
  font-size: 11px;
  font-weight: 700;

  span {
    font-weight: 500;
    color: ${cores.tintaSuave};
  }
`

export const Autor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid ${cores.linha};

  > span {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: ${cores.creme};
    font-weight: 700;
    font-size: 13px;
  }

  strong {
    display: block;
    font-size: 14px;
  }

  small {
    font-size: 12px;
    color: ${cores.tintaSuave};
  }
`
