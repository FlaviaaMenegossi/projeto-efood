import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const BannerContainer = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 340px;
  padding: 40px 0;
  background-size: cover;
  background-position: center;
  color: ${cores.creme};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(43, 29, 22, 0.2) 0%, rgba(43, 29, 22, 0.85) 100%);
  }

  > div {
    position: relative;
  }
`

export const Tipo = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(251, 244, 233, 0.5);
  font-family: ${fontes.titulo};
  font-style: italic;
  font-size: 18px;
`

export const Nome = styled.h1`
  margin-top: 16px;
  font-size: clamp(36px, 6vw, 64px);
`

export const Detalhes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;

  li {
    padding: 6px 14px;
    border-radius: 999px;
    background-color: rgba(251, 244, 233, 0.16);
    backdrop-filter: blur(6px);
    font-size: 14px;
    font-weight: 700;
  }
`
