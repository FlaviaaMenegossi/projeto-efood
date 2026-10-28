import { useCallback, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Cabecalho from '../../componentes/Cabecalho'
import Banner from '../../componentes/Banner'
import ListaProdutos from '../../componentes/ListaProdutos'
import Modal from '../../componentes/Modal'
import Rodape from '../../componentes/Rodape'
import { useCarrinho } from '../../contexto/useCarrinho'
import { restaurantes, type Prato } from '../../data/restaurantes'

const Perfil = () => {
  const { id } = useParams()
  const { adicionar, abrir } = useCarrinho()
  const [pratoAberto, setPratoAberto] = useState<Prato | null>(null)

  const restaurante = restaurantes.find((item) => item.id === Number(id))

  const fecharModal = useCallback(() => setPratoAberto(null), [])

  if (!restaurante) return <Navigate to="/" replace />

  const adicionarAoCarrinho = (prato: Prato) => {
    adicionar(prato, restaurante.nome)
    setPratoAberto(null)
    abrir()
  }

  return (
    <>
      <Cabecalho />
      <Banner tipo={restaurante.tipo} nome={restaurante.nome} />
      <ListaProdutos pratos={restaurante.cardapio} aoAbrir={setPratoAberto} />
      <Rodape />
      {pratoAberto && (
        <Modal prato={pratoAberto} aoFechar={fecharModal} aoAdicionar={adicionarAoCarrinho} />
      )}
    </>
  )
}

export default Perfil
