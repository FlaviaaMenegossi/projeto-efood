import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px 12px 20px;
  border-radius: 24px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -24px rgba(43, 29, 22, 0.35);
  }

  h3 {
    margin: 20px 8px 0;
    font-size: 20px;
  }
`

export const Foto = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }
`

export const Descricao = styled.p`
  margin: 8px 8px 20px;
  font-size: 14px;
  color: ${cores.tintaSuave};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Rodape = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto 8px 0;
`

export const Preco = styled.span`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: ${fontes.titulo};
  font-size: 20px;
  font-weight: 600;
  color: ${cores.tomate};

  s {
    font-family: ${fontes.texto};
    font-size: 14px;
    font-weight: 500;
    color: ${cores.tintaSuave};
  }
`

export const Selo = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background-color: ${cores.manjericao};
  color: ${cores.trigo};
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 6px 14px -6px rgba(0, 0, 0, 0.5);
`
