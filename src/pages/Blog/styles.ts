import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores } from '../../styles'

export const Secao = styled.section`
  padding: 56px 0 120px;
`

export const Filtros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;

  button {
    padding: 10px 20px;
    border-radius: 999px;
    border: 1px solid ${cores.linha};
    background-color: ${cores.papel};
    font-weight: 700;
    font-size: 14px;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      border-color: ${cores.tinta};
    }

    &[aria-pressed='true'] {
      background-color: ${cores.tinta};
      border-color: ${cores.tinta};
      color: ${cores.creme};
    }
  }
`

export const Info = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  font-size: 13px;
  color: ${cores.tintaSuave};

  b {
    padding: 3px 10px;
    border-radius: 999px;
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
    font-size: 12px;
  }
`

export const Destaque = styled(Link)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius: 28px;
  background-color: ${cores.papel};
  border: 1px solid ${cores.linha};
  transition: box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 40px;
  }

  h2 {
    font-size: clamp(28px, 3vw, 40px);
  }

  p {
    color: ${cores.tintaSuave};
  }

  .ler {
    font-weight: 700;
    color: ${cores.tomate};
  }

  &:hover {
    box-shadow: 0 24px 48px -24px rgba(43, 29, 22, 0.35);

    img {
      transform: scale(1.04);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;

    img {
      min-height: 0;
      aspect-ratio: 16 / 9;
    }

    > div {
      padding: 24px;
    }
  }
`

export const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 4px;
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 22px;
    transition: color 0.2s ease;
  }

  p {
    font-size: 15px;
    color: ${cores.tintaSuave};
  }

  &:hover {
    img {
      transform: translateY(-4px);
    }

    h3 {
      color: ${cores.tomate};
    }
  }
`
