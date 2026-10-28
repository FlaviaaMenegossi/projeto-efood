import { useState, type FormEvent } from 'react'
import mapa from '../../assets/images/mapa.svg'
import type { Restaurante } from '../../data/restaurantes'
import { Container } from '../../styles'
import {
  Aba,
  Abas,
  Acao,
  Busca,
  Confirmacao,
  Frase,
  Grade,
  Horarios,
  Item,
  Lista,
  Mapa,
  Painel,
  Pessoas,
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

type Modo = 'delivery' | 'reserva'

const normaliza = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()

const formataKm = (km: number) => `${km.toLocaleString('pt-BR')} km`

const PertoDeVoce = ({ restaurantes }: Props) => {
  const [modo, setModo] = useState<Modo>('delivery')
  const [busca, setBusca] = useState('')
  const [termo, setTermo] = useState('')
  const [ativo, setAtivo] = useState<number | null>(null)
  const [pessoas, setPessoas] = useState(2)
  const [reservas, setReservas] = useState<Record<number, string>>({})

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

  const reservar = (id: number, horario: string) =>
    setReservas((atuais) => ({ ...atuais, [id]: horario }))

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
            <Abas role="tablist" aria-label="Como você quer comer?">
              <Aba
                type="button"
                role="tab"
                aria-selected={modo === 'delivery'}
                $ativa={modo === 'delivery'}
                onClick={() => setModo('delivery')}
              >
                Delivery
              </Aba>
              <Aba
                type="button"
                role="tab"
                aria-selected={modo === 'reserva'}
                $ativa={modo === 'reserva'}
                onClick={() => setModo('reserva')}
              >
                Reservar mesa
              </Aba>
            </Abas>

            <Frase>
              {modo === 'delivery' ? (
                <>
                  Quentinha na sua porta <em>em até 30 minutos.</em>
                </>
              ) : (
                <>
                  Sua mesa pronta, <em>sem fila e sem espera.</em>
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

            {modo === 'reserva' && (
              <Pessoas>
                Mesa para
                <button
                  type="button"
                  onClick={() => setPessoas((total) => Math.max(1, total - 1))}
                  aria-label="Menos pessoas"
                >
                  −
                </button>
                <b>{pessoas}</b>
                <button
                  type="button"
                  onClick={() => setPessoas((total) => Math.min(12, total + 1))}
                  aria-label="Mais pessoas"
                >
                  +
                </button>
                {pessoas === 1 ? 'pessoa' : 'pessoas'}
              </Pessoas>
            )}

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
                          {restaurante.bairro} · {formataKm(restaurante.distancia)}
                          {modo === 'delivery' && (
                            <>
                              {' '}
                              · {restaurante.tempoEntrega}
                              {restaurante.freteGratis && <b>Frete grátis</b>}
                            </>
                          )}
                        </p>
                      </div>
                      {modo === 'delivery' && <Acao to={`/perfil/${restaurante.id}`}>Pedir</Acao>}
                    </Resumo>

                    {modo === 'reserva' &&
                      (reservas[restaurante.id] ? (
                        <Confirmacao>
                          ✓ Mesa para {pessoas} reservada às {reservas[restaurante.id]}
                          <button
                            type="button"
                            onClick={() =>
                              setReservas((atuais) => {
                                const resto = { ...atuais }
                                delete resto[restaurante.id]
                                return resto
                              })
                            }
                          >
                            alterar
                          </button>
                        </Confirmacao>
                      ) : (
                        <Horarios>
                          {restaurante.horarios.map((horario) => (
                            <button
                              key={horario}
                              type="button"
                              onClick={() => reservar(restaurante.id, horario)}
                            >
                              {horario}
                            </button>
                          ))}
                        </Horarios>
                      ))}
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
