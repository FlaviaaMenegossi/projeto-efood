import { useEffect } from 'react'
import Botao from '../Botao'
import fechar from '../../assets/images/close.svg'
import { formataPreco, type Prato } from '../../data/restaurantes'
import { Conteudo, Fechar, Fundo, Info, ModalContainer, Porcao } from './styles'

type Props = {
  prato: Prato
  aoFechar: () => void
  aoAdicionar: (prato: Prato) => void
}

const Modal = ({ prato, aoFechar, aoAdicionar }: Props) => {
  useEffect(() => {
    const aoPressionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') aoFechar()
    }

    document.addEventListener('keydown', aoPressionar)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', aoPressionar)
      document.body.style.overflow = ''
    }
  }, [aoFechar])

  return (
    <ModalContainer role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <Fundo onClick={aoFechar} />
      <Conteudo>
        <Fechar type="button" onClick={aoFechar} aria-label="Fechar" autoFocus>
          <img src={fechar} alt="" />
        </Fechar>
        <img src={prato.foto} alt={prato.nome} />
        <Info>
          <h3 id="modal-titulo">{prato.nome}</h3>
          <p>{prato.descricao}</p>
          <Porcao>Serve: {prato.porcao}</Porcao>
          <Botao onClick={() => aoAdicionar(prato)}>
            Adicionar ao carrinho · {formataPreco(prato.preco)}
          </Botao>
        </Info>
      </Conteudo>
    </ModalContainer>
  )
}

export default Modal
