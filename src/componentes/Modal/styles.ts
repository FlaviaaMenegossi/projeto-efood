import styled, { keyframes } from 'styled-components'
import { breakpoints, cores } from '../../styles'

const aparecer = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
`

const escurecer = keyframes`
  from {
    opacity: 0;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 24px;
`

export const Fundo = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(43, 29, 22, 0.7);
  backdrop-filter: blur(4px);
  animation: ${escurecer} 0.25s ease;
`

export const Conteudo = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  width: 100%;
  max-width: 920px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 24px;
  border-radius: 28px;
  background-color: ${cores.papel};
  animation: ${aparecer} 0.3s ease;

  > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 16px;

    > img {
      aspect-ratio: 16 / 10;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 32px 8px 0;

  h3 {
    font-size: clamp(26px, 3vw, 34px);
  }

  p {
    margin: 16px 0;
    color: ${cores.tintaSuave};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

export const Porcao = styled.span`
  margin-bottom: 28px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  color: ${cores.manjericao};
`

export const Fechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${cores.creme};
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }

  img {
    width: 20px;
    height: 20px;
  }
`
