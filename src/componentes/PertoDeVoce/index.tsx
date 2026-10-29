import { useState, type FormEvent } from 'react'
import mapa from '../../assets/images/mapa.svg'
import { useCarrinho } from '../../contexto/useCarrinho'
import type { Restaurante } from '../../data/restaurantes'
import { Container } from '../../styles'
import {
  Aba,
  Abas,
  Acao,
  Busca,
  Frase,
  Grade,
  Item,
  Lista,
  Mapa,
  Painel,
  Pino,
  Resumo,
  Secao,
  Topo,
  Vazio,
  Voce
} from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const normaliza = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()

const formataKm = (km: number) => `${km.toLocaleString('pt-BR')} km`

const PertoDeVoce = ({ restaurantes }: Props) => {
  // o modo escolhido aqui vale para o site todo (carrinho e checkout)
  const { modo, setModo } = useCarrinho()
  const [busca, setBusca] = useState('')
  const [termo, setTermo] = useState('')
  const [ativo, setAtivo] = useState<number | null>(null)

  const proximos = restaurantes
    .filter(
      (restaurante) =>
        !termo ||
        normaliza(restaurante.bairro).includes(normaliza(termo)) ||
        normaliza(restaurante.nome).includes(normaliza(termo))
    )
    .sort((a, b) => a.distancia - b.distancia)

  const buscar = (evento: FormEvent) => {
    evento.preventDefault()
    setTermo(busca)
  }

  return (
    <Secao id="perto">
      <Container>
        <Topo>
          <span>Perto de você</span>
          <h2>
            Encontre a trattoria <em>mais perto de você</em>
          </h2>
        </Topo>

        <Grade>
          <Painel>
            <Abas role="tablist" aria-label="Como você quer receber o pedido?">
              <Aba
                type="button"
                role="tab"
                aria-selected={modo === 'entrega'}
                $ativa={modo === 'entrega'}
                onClick={() => setModo('entrega')}
              >
                Delivery
              </Aba>
              <Aba
                type="button"
                role="tab"
                aria-selected={modo === 'retirada'}
                $ativa={modo === 'retirada'}
                onClick={() => setModo('retirada')}
              >
                Retirar no local
              </Aba>
            </Abas>

            <Frase key={modo}>
              {modo === 'entrega' ? (
                <>
                  Quentinha na sua porta <em>em cerca de 35 minutos.</em>
                </>
              ) : (
                <>
                  Pediu, passou, levou. <em>Sem taxa de entrega.</em>
                </>
              )}
            </Frase>

            <Busca onSubmit={buscar} role="search">
              <input
                type="search"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Seu bairro — ex.: Pinheiros"
                aria-label="Buscar por bairro ou nome"
              />
              <button type="submit">Buscar</button>
            </Busca>

            {proximos.length === 0 ? (
              <Vazio>
                Nenhuma trattoria encontrada em “{termo}”. Tente outro bairro ou{' '}
                <button
                  type="button"
                  onClick={() => {
                    setBusca('')
                    setTermo('')
                  }}
                >
                  veja todas
                </button>
                .
              </Vazio>
            ) : (
              <Lista>
                {proximos.map((restaurante, indice) => (
                  <Item
                    key={restaurante.id}
                    $ativo={ativo === restaurante.id}
                    onMouseEnter={() => setAtivo(restaurante.id)}
                    onMouseLeave={() => setAtivo(null)}
                    onFocus={() => setAtivo(restaurante.id)}
                  >
                    <Resumo>
                      <span className="numero">{indice + 1}</span>
                      <div>
                        <h3>{restaurante.nome}</h3>
                        <p>
                          {restaurante.bairro} · {formataKm(restaurante.distancia)} ·{' '}
                          {modo === 'entrega'
                            ? `entrega em ${restaurante.tempoEntrega}`
                            : `pronto em ${restaurante.tempoPreparo}`}
                        </p>
                      </div>
                      <Acao to={`/perfil/${restaurante.id}`}>{modo === 'entrega' ? 'Pedir' : 'Retirar'}</Acao>
                    </Resumo>
                  </Item>
                ))}
              </Lista>
            )}
          </Painel>

          <Mapa aria-hidden="true">
            <img src={mapa} alt="" />
            <Voce style={{ left: '50%', top: '54%' }}>
              <span>Você</span>
            </Voce>
            {proximos.map((restaurante, indice) => (
              <Pino
                key={restaurante.id}
                $ativo={ativo === restaurante.id}
                style={{ left: `${restaurante.mapa.x}%`, top: `${restaurante.mapa.y}%` }}
              >
                <b>
                  <i>{indice + 1}</i>
                </b>
                <span>{restaurante.nome}</span>
              </Pino>
            ))}
            <p className="legenda">
              <strong>{proximos.length}</strong> trattorias em um raio de 5 km
            </p>
          </Mapa>
        </Grade>

        <p className="rodape-secao">
          Não achou seu bairro? <a href="#restaurantes">Veja todas as trattorias ↓</a>
        </p>
      </Container>
    </Secao>
  )
}

export default PertoDeVoce
