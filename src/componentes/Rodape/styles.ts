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
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 6px;
    border: 2px solid ${cores.trigo};
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`

const verde = '#7AB51D'

export const Garantia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: #fff;
  color: #555;
  text-align: center;

  img {
    width: 44px;
    height: 44px;
  }

  span {
    margin-top: 2px;
    font-size: 12px;
    line-height: 1;
  }

  b {
    font-size: 13px;
    font-weight: 800;
    color: ${cores.tinta};
    letter-spacing: -0.02em;

    i {
      font-style: italic;
      color: ${verde};
    }
  }
`

export const Premio = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  text-align: center;

  .topo {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 6px 6px 2px;
    text-align: left;
  }

  img {
    width: 26px;
    flex-shrink: 0;
  }

  span {
    font-size: 8.5px;
    font-weight: 800;
    line-height: 1.05;
    text-transform: uppercase;
    color: #fff;

    em {
      font-style: normal;
      color: ${verde};
    }
  }

  strong {
    padding: 2px 4px 4px;
    font-size: 10px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    color: ${verde};
  }

  b {
    margin-top: auto;
    padding: 3px 0;
    line-height: 1.2;
    background-color: #fff;
    font-family: ${fontes.titulo};
    font-style: italic;
    font-size: 14px;
    color: ${cores.tomate};
  }
`

export const Social = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 20px;

  a {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    opacity: 0.85;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-2px) scale(1.1);
    }
  }

  img {
    width: 22px;
    height: 22px;
  }
`

export const Aviso = styled.p`
  margin-top: 32px;
  max-width: 640px;
  font-size: 12px;
  opacity: 0.7;
`
