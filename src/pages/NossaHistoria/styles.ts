import styled, { keyframes } from 'styled-components'
import { breakpoints, cores, fontes } from '../../styles'

const subir = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.6em);
  }
`

const flutuar = keyframes`
  50% {
    translate: 0 -14px;
  }
`

const girar = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const quicar = keyframes`
  50% {
    transform: translateY(6px);
  }
`

const deslizar = keyframes`
  to {
    transform: translateX(-50%);
  }
`

const mover = keyframes`
  50% {
    background-position: 100% 50%, 0% 50%;
  }
`

export const Abertura = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: clamp(600px, calc(100vh - 69px), 820px);
  padding: 72px 0 96px;
  background-color: ${cores.tinta};
  background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1.5px, transparent 1.5px);
  background-size: 22px 22px;
  color: ${cores.creme};

  > div {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 48px;
  }

  .selo {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 999px;
    background-color: ${cores.tomate};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .texto > p {
    max-width: 46ch;
    margin-top: 24px;
    font-size: 18px;
    opacity: 0.8;
  }

  @media (max-width: ${breakpoints.desktop}) {
    min-height: 0;

    > div {
      grid-template-columns: 1fr;
    }
  }
`

export const TituloAbertura = styled.h1`
  margin-top: 20px;
  font-size: clamp(46px, 7vw, 96px);
  line-height: 1;

  span,
  em {
    display: inline-block;
    animation: ${subir} 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
  }

  /* blocos inline descartam o espaço final, então o espaçamento entre palavras vem da margem */
  span {
    margin-right: 0.25em;
  }

  em {
    display: block;
    font-weight: 400;
    color: ${cores.trigo};
  }
`

export const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;

  > a:last-child {
    color: ${cores.creme};
    box-shadow: inset 0 0 0 1.5px ${cores.creme};

    &:hover {
      background-color: ${cores.creme};
      color: ${cores.tinta};
    }
  }
`

export const Ancora = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 999px;
  background-color: ${cores.tomate};
  font-weight: 700;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${cores.tomateEscuro};
  }
`

export const Colagem = styled.div`
  position: relative;
  height: 520px;

  img {
    position: absolute;
    object-fit: cover;
    border-radius: 24px;
    border: 8px solid ${cores.papel};
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
    animation: ${flutuar} 6s ease-in-out infinite;
  }

  img:nth-child(1) {
    top: 0;
    left: 6%;
    width: 60%;
    height: 60%;
    rotate: -4deg;
  }

  img:nth-child(2) {
    top: 20%;
    right: 0;
    width: 46%;
    height: 46%;
    rotate: 5deg;
    animation-duration: 7s;
    animation-delay: -2s;
  }

  img:nth-child(3) {
    bottom: 0;
    left: 24%;
    width: 44%;
    height: 40%;
    rotate: 2deg;
    animation-duration: 8s;
    animation-delay: -4s;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 360px;
  }
`

export const SeloGirando = styled.div`
  position: absolute;
  left: 0;
  bottom: 14%;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: ${cores.tomate};

  svg {
    position: absolute;
    inset: 0;
    animation: ${girar} 16s linear infinite;
  }

  text {
    fill: ${cores.creme};
    font-family: ${fontes.texto};
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  span {
    font-family: ${fontes.titulo};
    font-style: italic;
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
    height: 100px;

    span {
      font-size: 19px;
    }
  }
`

export const Rolar = styled.span`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.6;

  &::after {
    content: '↓';
    font-size: 16px;
    animation: ${quicar} 1.4s ease-in-out infinite;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const Secao = styled.section`
  padding: 96px 0;
  scroll-margin-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px 0;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 32px;
  font-size: clamp(32px, 4.5vw, 56px);

  em {
    font-weight: 400;
    color: ${cores.tomate};
  }

  &.centro {
    text-align: center;
  }
`

export const Origem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;

  p {
    margin-top: 16px;
    max-width: 56ch;
    font-size: 17px;
    color: ${cores.tintaSuave};
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const Citacao = styled.blockquote`
  margin-top: 28px;
  padding-left: 20px;
  border-left: 4px solid ${cores.tomate};
  font-family: ${fontes.titulo};
  font-size: clamp(22px, 2.4vw, 28px);
  font-style: italic;
  line-height: 1.25;
`

export const Fotos = styled.div`
  position: relative;
  height: 460px;

  img {
    position: absolute;
    object-fit: cover;
    border-radius: 24px;
    border: 8px solid ${cores.papel};
    box-shadow: 0 24px 48px -24px rgba(43, 29, 22, 0.45);
    transition: transform 0.4s ease;
  }

  img:first-child {
    top: 0;
    left: 0;
    width: 70%;
    height: 78%;
    transform: rotate(-2deg);
  }

  img:last-child {
    right: 0;
    bottom: 0;
    width: 52%;
    height: 56%;
    transform: rotate(4deg);
  }

  img:hover {
    z-index: 1;
    transform: rotate(0) scale(1.04);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }
`

export const Numeros = styled.section`
  padding: 56px 0;
  background-color: ${cores.tomate};
  color: ${cores.creme};

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  li {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.9;
  }

  strong {
    font-family: ${fontes.titulo};
    font-size: clamp(40px, 5vw, 64px);
    line-height: 1.1;
    color: ${cores.trigo};
    font-variant-numeric: tabular-nums;
  }
`

export const Linha = styled.ol`
  --progresso: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 56px;
  list-style: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    margin-left: -2px;
    border-radius: 4px;
  }

  &::before {
    bottom: 0;
    background-color: ${cores.linha};
  }

  &::after {
    height: calc(var(--progresso) * 100%);
    background-color: ${cores.tomate};
  }

  @media (max-width: ${breakpoints.desktop}) {
    &::before,
    &::after {
      left: 11px;
    }
  }
`

export const Marco = styled.li<{ $lado: 'esquerda' | 'direita' }>`
  position: relative;
  width: 50%;
  align-self: ${({ $lado }) => ($lado === 'esquerda' ? 'flex-start' : 'flex-end')};
  ${({ $lado }) => ($lado === 'esquerda' ? 'padding-right: 56px;' : 'padding-left: 56px;')}

  &::before {
    content: '';
    position: absolute;
    top: 48px;
    ${({ $lado }) => ($lado === 'esquerda' ? 'right: -13px;' : 'left: -13px;')}
    z-index: 1;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${cores.creme};
    border: 5px solid ${cores.tomate};
  }

  article {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 20px;
    align-items: center;
    padding: 16px;
    border-radius: 24px;
    background-color: ${cores.papel};
    border: 1px solid ${cores.linha};
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 48px -24px rgba(43, 29, 22, 0.4);
    }
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 16px;
  }

  span {
    font-family: ${fontes.titulo};
    font-size: 36px;
    font-style: italic;
    line-height: 1;
    color: ${cores.tomate};
  }

  h3 {
    margin: 6px 0;
    font-size: 21px;
  }

  p {
    font-size: 14px;
    color: ${cores.tintaSuave};
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    padding: 0 0 0 48px;

    &::before {
      left: 0;
      right: auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    article {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
`

export const Galeria = styled.section`
  padding: 88px 0;
  overflow: hidden;
  background-color: ${cores.papel};

  .trilho {
    display: flex;
    gap: 20px;
    width: max-content;
    padding: 24px 10px;
    animation: ${deslizar} 50s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  img {
    width: 240px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px -24px rgba(43, 29, 22, 0.5);
    transition: rotate 0.3s ease;

    &:nth-child(odd) {
      rotate: -3deg;
    }

    &:nth-child(even) {
      rotate: 3deg;
    }

    &:hover {
      rotate: 0deg;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 56px 0;

    img {
      width: 180px;
      height: 230px;
    }
  }
`

export const Valores = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  > li,
  .revelar {
    height: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border-radius: 28px;
    color: ${cores.creme};
    box-shadow: 0 24px 48px -28px rgba(43, 29, 22, 0.6);
    transition:
      transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
      box-shadow 0.35s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 36px 60px -28px rgba(43, 29, 22, 0.7);

      img {
        transform: scale(1.08);
      }

      b {
        transform: rotate(-8deg) scale(1.08);
      }
    }
  }

  > li:nth-child(1) article {
    background-color: ${cores.tomate};
  }

  > li:nth-child(2) article {
    background-color: ${cores.manjericao};
  }

  > li:nth-child(3) article {
    background-color: ${cores.tinta};
  }

  .foto {
    position: relative;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  b {
    position: absolute;
    left: 24px;
    bottom: -28px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
    font-family: ${fontes.titulo};
    font-size: 26px;
    font-style: italic;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.5);
    transition: transform 0.35s ease;
  }

  .corpo {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 44px 28px 28px;
  }

  h3 {
    font-size: 26px;
  }

  p {
    margin-top: 10px;
    opacity: 0.85;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: auto;
    padding-top: 20px;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;

    &::before {
      content: '✓';
      flex-shrink: 0;
      display: grid;
      place-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: rgba(251, 244, 233, 0.18);
      font-size: 12px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const TopoValores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 0;
  }

  p {
    max-width: 38ch;
    color: ${cores.tintaSuave};
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Final = styled.section`
  padding: 112px 0;
  text-align: center;
  color: ${cores.creme};
  background-color: ${cores.tinta};
  background-image:
    radial-gradient(circle at 20% 30%, rgba(201, 55, 44, 0.45), transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(232, 163, 61, 0.3), transparent 45%);
  background-size: 200% 200%;
  animation: ${mover} 14s ease-in-out infinite;

  h2 {
    font-size: clamp(36px, 5.5vw, 72px);

    em {
      display: block;
      font-weight: 400;
      color: ${cores.trigo};
    }
  }

  a {
    margin-top: 36px;
    padding: 18px 34px;
    font-size: 17px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 72px 0;
  }
`
