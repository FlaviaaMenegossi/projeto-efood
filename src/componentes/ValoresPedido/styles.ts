import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const Lista = styled.div<{ $tema: 'claro' | 'escuro' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ $tema }) => ($tema === 'claro' ? cores.tintaSuave : 'rgba(251, 244, 233, 0.8)')};

  .desconto {
    color: ${({ $tema }) => ($tema === 'claro' ? cores.manjericao : cores.trigo)};
    font-weight: 700;
  }

  button {
    margin-left: 8px;
    font-size: 12px;
    color: inherit;
    text-decoration: underline;
    opacity: 0.8;
  }

  > div:last-child {
    color: ${({ $tema }) => ($tema === 'claro' ? cores.tinta : cores.creme)};

    span:last-child {
      color: ${({ $tema }) => ($tema === 'claro' ? cores.tinta : cores.trigo)};
    }
  }
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
`

export const Total = styled(Linha)`
  align-items: baseline;
  margin-top: 6px;
  font-size: 18px;
  font-weight: 700;

  span:last-child {
    font-family: ${fontes.titulo};
    font-size: 26px;
  }
`
