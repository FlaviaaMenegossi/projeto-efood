import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores, fontes } from '../../styles'
import type { TemaPromocao } from '../../data/promocoes'

const temas: Record<TemaPromocao, { fundo: string; destaque: string; botaoFundo: string; botaoTexto: string }> = {
  tomate: { fundo: cores.tomate, destaque: cores.trigo, botaoFundo: cores.creme, botaoTexto: cores.tinta },
  manjericao: { fundo: cores.manjericao, destaque: cores.trigo, botaoFundo: cores.tomate, botaoTexto: cores.creme },
  tinta: { fundo: cores.tinta, destaque: cores.dourado, botaoFundo: cores.dourado, botaoTexto: cores.tinta }
}

// contorno de "selo estourado" com 24 pontas
const estouro = Array.from({ length: 48 }, (_, i) => {
  const raio = i % 2 ? 43 : 50
  const angulo = (i / 48) * Math.PI * 2
  return `${(50 + raio * Math.cos(angulo)).toFixed(1)}% ${(50 + raio * Math.sin(angulo)).toFixed(1)}%`
}).join(', ')

const preencher = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`

const pulsar = keyframes`
  50% {
    opacity: 0.35;
  }
`

const carimbar = keyframes`
  from {
    transform: scale(0) rotate(-60deg);
  }

  70% {
    transform: scale(1.12) rotate(-4deg);
  }

  to {
    transform: scale(1) rotate(-10deg);
  }
`

const balancar = keyframes`
  0%,
  100% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(4deg);
  }
`

export const Carrossel = styled.section`
  /* alinha o conteúdo do banner com o Container do resto do site */
  --margem: max(24px, calc((100% - 1152px) / 2));

  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    --margem: 16px;
  }
`

export const Trilho = styled.div`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
`

export const Slide = styled.article<{ $tema: TemaPromocao; $ativo: boolean }>`
  --destaque: ${({ $tema }) => temas[$tema].destaque};
  --botao-fundo: ${({ $tema }) => temas[$tema].botaoFundo};
  --botao-texto: ${({ $tema }) => temas[$tema].botaoTexto};

  position: relative;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  min-height: clamp(580px, calc(100vh - 100px), 780px);
  padding: 72px var(--margem) 120px;
  background-color: ${({ $tema }) => temas[$tema].fundo};
  background-image: radial-gradient(rgba(255, 255, 255, 0.09) 1.5px, transparent 1.5px);
  background-size: 22px 22px;
  color: ${cores.creme};

  img {
    transform: scale(${({ $ativo }) => ($ativo ? 1 : 1.15)});
    transition: transform 7s ease-out;
  }

  > [aria-hidden='true'] {
    ${({ $ativo }) =>
      $ativo &&
      css`
        animation:
          ${carimbar} 0.7s 0.4s cubic-bezier(0.3, 1.4, 0.5, 1) backwards,
          ${balancar} 4s 1.1s ease-in-out infinite;
      `}
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
    padding: 0 0 104px;
  }
`

export const Foto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  overflow: hidden;
  clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.45));
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    width: 100%;
    height: clamp(260px, 52vw, 420px);
    clip-path: polygon(0 0, 100% 0, 100% 86%, 0 100%);
  }
`

export const Adesivo = styled.div`
  position: absolute;
  z-index: 3;
  top: 10%;
  left: calc(50% + 32px);
  width: 176px;
  height: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(${estouro});
  background-color: ${cores.trigo};
  color: ${cores.tomateEscuro};
  font-family: ${fontes.titulo};
  font-size: 46px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;

  small {
    font-family: ${fontes.texto};
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  @media (max-width: ${breakpoints.desktop}) {
    top: clamp(170px, 40vw, 320px);
    left: auto;
    right: 20px;
    width: 124px;
    height: 124px;
    font-size: 32px;
  }
`

export const Texto = styled.div`
  position: relative;
  z-index: 2;
  width: 48%;
  max-width: 620px;

  h2 {
    font-size: clamp(30px, 3.6vw, 52px);
    font-style: italic;
    font-weight: 400;
  }

  > p {
    max-width: 40ch;
    margin-top: 16px;
    font-size: 18px;
    opacity: 0.85;
  }

  .acoes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    margin-top: 36px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    max-width: none;
    padding: 8px var(--margem) 0;
  }
`

export const Selo = styled.span`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px;
  background-color: var(--destaque);
  color: ${cores.tinta};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const Destaque = styled.strong`
  display: block;
  margin: 20px 0 8px;
  font-family: ${fontes.titulo};
  font-size: clamp(96px, 12vw, 200px);
  font-weight: 700;
  line-height: 0.82;
  letter-spacing: -0.055em;
  color: var(--destaque);
  white-space: nowrap;
`

export const Precos = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-top: 24px;

  s {
    font-size: 18px;
    opacity: 0.6;
  }

  strong {
    font-family: ${fontes.titulo};
    font-size: clamp(34px, 3.4vw, 48px);
    color: var(--destaque);
  }
`

export const Chamada = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 20px 36px;
  border-radius: 999px;
  background-color: var(--botao-fundo);
  color: var(--botao-texto);
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 16px 32px -14px rgba(0, 0, 0, 0.6);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.04);
  }
`

export const Cupom = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  border-radius: 16px;
  border: 2px dashed rgba(255, 255, 255, 0.65);
  color: ${cores.creme};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.75;
  }

  b {
    font-size: 22px;
    letter-spacing: 0.12em;
  }
`

export const Contagem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  font-size: 15px;
  font-weight: 700;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--destaque);
    animation: ${pulsar} 1.2s ease-in-out infinite;
  }

  time {
    padding: 6px 12px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.25);
    font-size: 20px;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.06em;
  }
`

export const Indicadores = styled.div`
  position: absolute;
  left: var(--margem);
  bottom: 48px;
  z-index: 3;
  display: flex;
  gap: 8px;

  button {
    position: relative;
    width: 56px;
    height: 20px;

    &::before,
    span {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      height: 4px;
      border-radius: 999px;
    }

    &::before {
      right: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }

    span {
      width: 0;
      background-color: ${cores.creme};
    }

    &.ativo span {
      animation-name: ${preencher};
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }

  /* sem animação não há troca automática; a barra ativa só fica cheia */
  @media (prefers-reduced-motion: reduce) {
    button.ativo span {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    bottom: 40px;
  }
`
