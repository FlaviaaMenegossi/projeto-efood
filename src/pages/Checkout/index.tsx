import { useState, type ChangeEvent, type FormEvent } from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Botao from '../../componentes/Botao'
import Rodape from '../../componentes/Rodape'
import { useCarrinho, type ItemCarrinho } from '../../contexto/useCarrinho'
import { formataPreco } from '../../data/restaurantes'
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
  Resumo,
  Titulo
} from './styles'

type Etapa = 'entrega' | 'pagamento' | 'confirmado'

type Dados = Record<string, string>

type Pedido = {
  numero: string
  itens: ItemCarrinho[]
  total: number
  nome: string
  endereco: string
}

const apenasNumeros = (valor: string) => valor.replace(/\D/g, '')

const mascaras: Record<string, (valor: string) => string> = {
  cep: (valor) => apenasNumeros(valor).slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2'),
  numeroCartao: (valor) =>
    apenasNumeros(valor)
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, '$1 '),
  cvv: (valor) => apenasNumeros(valor).slice(0, 3),
  mes: (valor) => apenasNumeros(valor).slice(0, 2),
  ano: (valor) => apenasNumeros(valor).slice(0, 2),
  numero: (valor) => apenasNumeros(valor).slice(0, 6)
}

const validarEntrega = (dados: Dados) => {
  const erros: Dados = {}
  if (!dados.nome?.trim()) erros.nome = 'Informe quem vai receber'
  if (!dados.endereco?.trim()) erros.endereco = 'Informe o endereço'
  if (!dados.cidade?.trim()) erros.cidade = 'Informe a cidade'
  if (apenasNumeros(dados.cep ?? '').length !== 8) erros.cep = 'CEP com 8 dígitos'
  if (!dados.numero?.trim()) erros.numero = 'Informe o número'
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
  const { itens, valorTotal, taxaEntrega, limpar, abrir } = useCarrinho()
  const [etapa, setEtapa] = useState<Etapa>('entrega')
  const [dados, setDados] = useState<Dados>({})
  const [erros, setErros] = useState<Dados>({})
  const [pedido, setPedido] = useState<Pedido | null>(null)

  const total = valorTotal + taxaEntrega

  const alterar = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target
    const mascara = mascaras[name]
    setDados((atuais) => ({ ...atuais, [name]: mascara ? mascara(value) : value }))
    setErros((atuais) => ({ ...atuais, [name]: '' }))
  }

  const campo = (nome: string, rotulo: string, props: { placeholder?: string; inputMode?: 'numeric' } = {}) => (
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

  const enviarEntrega = (evento: FormEvent) => {
    evento.preventDefault()
    const encontrados = validarEntrega(dados)
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
      numero: String(Math.floor(100000 + Math.random() * 900000)),
      itens,
      total,
      nome: dados.nome,
      endereco: `${dados.endereco}, ${dados.numero} — ${dados.cidade}`
    })
    limpar()
    setEtapa('confirmado')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (etapa === 'confirmado' && pedido) {
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
              <p>
                Obrigado, {pedido.nome.split(' ')[0]}! Sua massa já está sendo preparada e chega em{' '}
                <b>{pedido.endereco}</b> em cerca de 30 minutos.
              </p>
              <p>
                Lembre-se: nossos entregadores não estão autorizados a fazer cobranças extras. Após a
                entrega, higienize as mãos e bom apetite!
              </p>
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
                <li className={etapa === 'entrega' ? 'atual' : 'feita'}>
                  <b>1</b> Entrega
                </li>
                <li className={etapa === 'pagamento' ? 'atual' : ''}>
                  <b>2</b> Pagamento
                </li>
                <li>
                  <b>3</b> Confirmação
                </li>
              </Etapas>

              <Grade>
                {etapa === 'entrega' ? (
                  <Formulario onSubmit={enviarEntrega} noValidate>
                    <h2>Para onde vamos levar?</h2>
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
                      <Botao onClick={() => setEtapa('entrega')} variante="secundario">
                        ← Editar endereço
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
                  <p>
                    Subtotal <span>{formataPreco(valorTotal)}</span>
                  </p>
                  <p>
                    Entrega <span>{taxaEntrega === 0 ? 'Grátis' : formataPreco(taxaEntrega)}</span>
                  </p>
                  <p className="total">
                    Total <span>{formataPreco(total)}</span>
                  </p>
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
