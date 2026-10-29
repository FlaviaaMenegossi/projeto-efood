import { useState, type ChangeEvent, type FormEvent } from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Botao from '../../componentes/Botao'
import Rodape from '../../componentes/Rodape'
import SeletorModo from '../../componentes/SeletorModo'
import ValoresPedido from '../../componentes/ValoresPedido'
import { useCarrinho, type ModoEntrega } from '../../contexto/useCarrinho'
import { formataPreco, restaurantes } from '../../data/restaurantes'
import { Container } from '../../styles'
import {
  Campo,
  Confirmacao,
  Erro,
  Etapas,
  Formulario,
  Grade,
  Linha,
  Pagina,
  Retiradas,
  Resumo,
  Titulo
} from './styles'

type Etapa = 'dados' | 'pagamento' | 'confirmado'

type Dados = Record<string, string>

type Pedido = {
  numero: string
  total: number
  nome: string
  modo: ModoEntrega
  destino: string
}

const apenasNumeros = (valor: string) => valor.replace(/\D/g, '')

const gerarNumeroPedido = () => String(Math.floor(100000 + Math.random() * 900000))

const mascaras: Record<string, (valor: string) => string> = {
  cep: (valor) => apenasNumeros(valor).slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2'),
  telefone: (valor) =>
    apenasNumeros(valor)
      .slice(0, 11)
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2'),
  numeroCartao: (valor) =>
    apenasNumeros(valor)
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, '$1 '),
  cvv: (valor) => apenasNumeros(valor).slice(0, 3),
  mes: (valor) => apenasNumeros(valor).slice(0, 2),
  ano: (valor) => apenasNumeros(valor).slice(0, 2),
  numero: (valor) => apenasNumeros(valor).slice(0, 6)
}

const validarDados = (dados: Dados, modo: ModoEntrega) => {
  const erros: Dados = {}
  if (!dados.nome?.trim()) erros.nome = modo === 'entrega' ? 'Informe quem vai receber' : 'Informe quem vai retirar'

  if (modo === 'entrega') {
    if (!dados.endereco?.trim()) erros.endereco = 'Informe o endereço'
    if (!dados.cidade?.trim()) erros.cidade = 'Informe a cidade'
    if (apenasNumeros(dados.cep ?? '').length !== 8) erros.cep = 'CEP com 8 dígitos'
    if (!dados.numero?.trim()) erros.numero = 'Informe o número'
  } else if (apenasNumeros(dados.telefone ?? '').length < 10) {
    erros.telefone = 'Telefone com DDD'
  }

  return erros
}

const validarPagamento = (dados: Dados) => {
  const erros: Dados = {}
  const anoAtual = new Date().getFullYear() % 100
  if (!dados.nomeCartao?.trim()) erros.nomeCartao = 'Nome como está no cartão'
  if (apenasNumeros(dados.numeroCartao ?? '').length !== 16) erros.numeroCartao = 'Cartão com 16 dígitos'
  if (apenasNumeros(dados.cvv ?? '').length !== 3) erros.cvv = '3 dígitos'
  const mes = Number(dados.mes)
  if (!mes || mes > 12) erros.mes = 'Mês inválido'
  if (Number(dados.ano) < anoAtual || !dados.ano) erros.ano = 'Ano inválido'
  return erros
}

const Checkout = () => {
  const { itens, total, modo, limpar, abrir } = useCarrinho()
  const [etapa, setEtapa] = useState<Etapa>('dados')
  const [dados, setDados] = useState<Dados>({})
  const [erros, setErros] = useState<Dados>({})
  const [pedido, setPedido] = useState<Pedido | null>(null)

  // trattorias do pedido, para mostrar onde retirar
  const locaisRetirada = restaurantes.filter((restaurante) =>
    itens.some((item) => item.restaurante === restaurante.nome)
  )

  const alterar = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target
    const mascara = mascaras[name]
    setDados((atuais) => ({ ...atuais, [name]: mascara ? mascara(value) : value }))
    setErros((atuais) => ({ ...atuais, [name]: '' }))
  }

  const campo = (nome: string, rotulo: string, props: { placeholder?: string; inputMode?: 'numeric' | 'tel' } = {}) => (
    <Campo $erro={!!erros[nome]}>
      <label htmlFor={nome}>{rotulo}</label>
      <input
        id={nome}
        name={nome}
        value={dados[nome] ?? ''}
        onChange={alterar}
        aria-invalid={!!erros[nome]}
        aria-describedby={erros[nome] ? `${nome}-erro` : undefined}
        {...props}
      />
      {erros[nome] && <Erro id={`${nome}-erro`}>{erros[nome]}</Erro>}
    </Campo>
  )

  const enviarDados = (evento: FormEvent) => {
    evento.preventDefault()
    const encontrados = validarDados(dados, modo)
    setErros(encontrados)
    if (Object.keys(encontrados).length === 0) {
      setEtapa('pagamento')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const enviarPagamento = (evento: FormEvent) => {
    evento.preventDefault()
    const encontrados = validarPagamento(dados)
    setErros(encontrados)
    if (Object.keys(encontrados).length > 0) return

    setPedido({
      numero: gerarNumeroPedido(),
      total,
      nome: dados.nome,
      modo,
      destino:
        modo === 'entrega'
          ? `${dados.endereco}, ${dados.numero} — ${dados.cidade}`
          : locaisRetirada.map((local) => `${local.nome} (${local.bairro})`).join(' e ')
    })
    limpar()
    setEtapa('confirmado')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (etapa === 'confirmado' && pedido) {
    const primeiroNome = pedido.nome.split(' ')[0]

    return (
      <>
        <Cabecalho />
        <Pagina>
          <Container>
            <Confirmacao>
              <span className="check">✓</span>
              <h1>
                Pedido <em>confirmado!</em>
              </h1>
              <p className="numero">Pedido nº {pedido.numero}</p>
              {pedido.modo === 'entrega' ? (
                <p>
                  Obrigado, {primeiroNome}! Sua massa já está sendo preparada e chega em <b>{pedido.destino}</b> em
                  cerca de 35 minutos.
                </p>
              ) : (
                <p>
                  Obrigado, {primeiroNome}! Seu pedido fica pronto em cerca de 20 minutos. É só retirar em{' '}
                  <b>{pedido.destino}</b> e informar o número do pedido no balcão.
                </p>
              )}
              {pedido.modo === 'entrega' && (
                <p>
                  Lembre-se: nossos entregadores não estão autorizados a fazer cobranças extras. Bom apetite!
                </p>
              )}
              <p className="total">Total pago: {formataPreco(pedido.total)}</p>
              <Botao para="/">Voltar ao início</Botao>
            </Confirmacao>
          </Container>
        </Pagina>
        <Rodape />
      </>
    )
  }

  return (
    <>
      <Cabecalho />
      <Pagina>
        <Container>
          {itens.length === 0 ? (
            <Confirmacao>
              <h1>
                Seu carrinho está <em>vazio</em>
              </h1>
              <p>Escolha uma trattoria e adicione seus pratos favoritos para finalizar o pedido.</p>
              <Botao para="/">Ver trattorias</Botao>
            </Confirmacao>
          ) : (
            <>
              <Titulo>
                Finalizar <em>pedido</em>
              </Titulo>
              <Etapas>
                <li className={etapa === 'dados' ? 'atual' : 'feita'}>
                  <b>1</b> {modo === 'entrega' ? 'Entrega' : 'Retirada'}
                </li>
                <li className={etapa === 'pagamento' ? 'atual' : ''}>
                  <b>2</b> Pagamento
                </li>
                <li>
                  <b>3</b> Confirmação
                </li>
              </Etapas>

              <Grade>
                {etapa === 'dados' ? (
                  <Formulario onSubmit={enviarDados} noValidate>
                    <h2>Como você quer receber?</h2>
                    <SeletorModo />

                    {modo === 'entrega' ? (
                      <>
                        {campo('nome', 'Quem irá receber', { placeholder: 'Nome completo' })}
                        {campo('endereco', 'Endereço', { placeholder: 'Rua, avenida...' })}
                        <Linha>
                          {campo('cidade', 'Cidade')}
                          {campo('cep', 'CEP', { placeholder: '00000-000', inputMode: 'numeric' })}
                        </Linha>
                        <Linha>
                          {campo('numero', 'Número', { inputMode: 'numeric' })}
                          {campo('complemento', 'Complemento (opcional)', { placeholder: 'Apto, bloco...' })}
                        </Linha>
                      </>
                    ) : (
                      <>
                        <Retiradas>
                          {locaisRetirada.map((local) => (
                            <li key={local.id}>
                              <strong>{local.nome}</strong>
                              <span>
                                {local.bairro} · pronto em {local.tempoPreparo}
                              </span>
                            </li>
                          ))}
                        </Retiradas>
                        {campo('nome', 'Quem irá retirar', { placeholder: 'Nome completo' })}
                        {campo('telefone', 'Celular para avisarmos quando estiver pronto', {
                          placeholder: '(11) 90000-0000',
                          inputMode: 'tel'
                        })}
                      </>
                    )}

                    <div className="acoes">
                      <Botao onClick={abrir} variante="secundario">
                        ← Voltar ao carrinho
                      </Botao>
                      <button type="submit" className="enviar">
                        Continuar para pagamento →
                      </button>
                    </div>
                  </Formulario>
                ) : (
                  <Formulario onSubmit={enviarPagamento} noValidate>
                    <h2>
                      Pagamento · <em>{formataPreco(total)}</em>
                    </h2>
                    {campo('nomeCartao', 'Nome no cartão')}
                    <Linha $colunas="3fr 1fr">
                      {campo('numeroCartao', 'Número do cartão', {
                        placeholder: '0000 0000 0000 0000',
                        inputMode: 'numeric'
                      })}
                      {campo('cvv', 'CVV', { placeholder: '123', inputMode: 'numeric' })}
                    </Linha>
                    <Linha>
                      {campo('mes', 'Mês de vencimento', { placeholder: 'MM', inputMode: 'numeric' })}
                      {campo('ano', 'Ano de vencimento', { placeholder: 'AA', inputMode: 'numeric' })}
                    </Linha>
                    <div className="acoes">
                      <Botao onClick={() => setEtapa('dados')} variante="secundario">
                        ← {modo === 'entrega' ? 'Editar endereço' : 'Editar retirada'}
                      </Botao>
                      <button type="submit" className="enviar">
                        Confirmar pagamento
                      </button>
                    </div>
                  </Formulario>
                )}

                <Resumo>
                  <h2>Resumo do pedido</h2>
                  <ul>
                    {itens.map(({ prato, quantidade }) => (
                      <li key={prato.id}>
                        <img src={prato.foto} alt="" />
                        <span>
                          {quantidade}× {prato.nome}
                        </span>
                        <b>{formataPreco(prato.preco * quantidade)}</b>
                      </li>
                    ))}
                  </ul>
                  <ValoresPedido tema="escuro" />
                </Resumo>
              </Grade>
            </>
          )}
        </Container>
      </Pagina>
      <Rodape />
    </>
  )
}

export default Checkout
