import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  creme: '#FBF4E9',
  papel: '#FFFBF5',
  trigo: '#F2D7A6',
  tomate: '#C9372C',
  tomateEscuro: '#A12A21',
  manjericao: '#2E4A33',
  tinta: '#2B1D16',
  tintaSuave: '#6B5A4E',
  linha: '#EADBC6',
  dourado: '#E8A33D'
}

export const fontes = {
  titulo: "'Fraunces', Georgia, serif",
  texto: "'Manrope', system-ui, sans-serif"
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fontes.texto};
    background-color: ${cores.creme};
    color: ${cores.tinta};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${fontes.titulo};
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${cores.tomate};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }
`
