import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px -24px rgba(43, 29, 22, 0.35);

    img {
      transform: scale(1.06);
    }
  }
`

export const Capa = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 24px;
`

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  width: 100%;

  h3 {
    font-size: 24px;
  }
`

export const Avaliacao = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-weight: 700;

  img {
    width: 18px;
    height: 18px;
  }
`

export const Descricao = styled.p`
  flex: 1;
  margin: 12px 0 24px;
  font-size: 15px;
  color: ${cores.tintaSuave};
`
