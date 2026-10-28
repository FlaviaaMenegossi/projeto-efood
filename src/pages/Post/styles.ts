import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores, fontes } from '../../styles'

export const Artigo = styled.article`
  padding: 48px 0 120px;

  .conteudo {
    max-width: 680px;
    margin: 48px auto 0;

    p {
      margin-bottom: 24px;
      font-size: 19px;
      line-height: 1.75;
    }

    p:first-child::first-letter {
      float: left;
      margin: 6px 12px 0 0;
      font-family: ${fontes.titulo};
      font-size: 72px;
      line-height: 0.8;
      color: ${cores.tomate};
    }
  }
`

export const Topo = styled.header`
  max-width: 780px;
  margin: 0 auto;
  text-align: center;

  .categoria {
    display: inline-block;
    margin-top: 32px;
    padding: 4px 12px;
    border-radius: 999px;
    background-color: ${cores.trigo};
    color: ${cores.tomateEscuro};
    font-size: 12px;
    font-weight: 700;
  }

  h1 {
    margin-top: 16px;
    font-size: clamp(34px, 5vw, 56px);
  }

  .resumo {
    margin-top: 16px;
    font-size: 19px;
    color: ${cores.tintaSuave};
  }

  .info {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Voltar = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.tintaSuave};

  &:hover {
    color: ${cores.tomate};
  }
`

export const Capa = styled.div`
  max-width: 1100px;
  margin: 40px auto 0;
  padding: 0 24px;

  img {
    width: 100%;
    aspect-ratio: 21 / 9;
    object-fit: cover;
    border-radius: 28px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;

    img {
      aspect-ratio: 4 / 3;
      border-radius: 20px;
    }
  }
`

export const Leia = styled.aside`
  max-width: 1100px;
  margin: 72px auto 0;
  padding-top: 48px;
  border-top: 1px solid ${cores.linha};

  h2 {
    margin-bottom: 24px;
    font-size: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &:hover strong {
      color: ${cores.tomate};
    }
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 16px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${cores.tomate};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  strong {
    font-family: ${fontes.titulo};
    font-size: 19px;
    font-weight: 600;
    transition: color 0.2s ease;
  }
`
