import { useState, type ChangeEvent, type FormEvent } from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import TopoPagina from '../../componentes/TopoPagina'
import Botao from '../../componentes/Botao'
import Rodape from '../../componentes/Rodape'
import whatsapp from '../../assets/images/whatsapp.svg'
import instagram from '../../assets/images/instagram.svg'
import email from '../../assets/images/email.svg'
import relogio from '../../assets/images/relogio.svg'
import { Container } from '../../styles'
import { Canais, Campo, Enviado, Erro, Faq, Formulario, Grade, Secao } from './styles'

type Dados = { nome: string; email: string; assunto: string; mensagem: string }

const vazio: Dados = { nome: '', email: '', assunto: 'Pedido', mensagem: '' }

const perguntas = [
  {
    pergunta: 'Qual o prazo de entrega?',
    resposta: 'A média é de 35 minutos. Cada trattoria mostra o tempo estimado antes de você fechar o pedido.'
  },
  {
    pergunta: 'Meu pedido chegou com problema. E agora?',
    resposta: 'Fale com a gente pelo WhatsApp com o número do pedido e uma foto. Resolvemos com reembolso ou novo envio.'
  },
  {
    pergunta: 'Como funciona a retirada no local?',
    resposta: 'Escolha "Retirar no local" no carrinho, finalize o pedido e avisamos pelo celular quando estiver pronto. Não há taxa de entrega.'
  },
  {
    pergunta: 'Quero ser uma trattoria parceira. Como faço?',
    resposta: 'Escolha o assunto "Quero ser parceiro" no formulário ao lado e conte um pouco sobre sua casa.'
  }
]

const Contato = () => {
  const [dados, setDados] = useState<Dados>(vazio)
  const [erros, setErros] = useState<Partial<Dados>>({})
  const [enviado, setEnviado] = useState(false)

  const alterar = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = evento.target
    setDados((atuais) => ({ ...atuais, [name]: value }))
    setErros((atuais) => ({ ...atuais, [name]: '' }))
  }

  const enviar = (evento: FormEvent) => {
    evento.preventDefault()
    const encontrados: Partial<Dados> = {}
    if (!dados.nome.trim()) encontrados.nome = 'Como podemos te chamar?'
    if (!/^\S+@\S+\.\S+$/.test(dados.email)) encontrados.email = 'Informe um e-mail válido'
    if (dados.mensagem.trim().length < 10) encontrados.mensagem = 'Conte um pouco mais (mínimo 10 caracteres)'
    setErros(encontrados)
    if (Object.keys(encontrados).length === 0) setEnviado(true)
  }

  return (
    <>
      <Cabecalho />
      <TopoPagina
        selo="Contato"
        titulo={
          <>
            Fale com a <em>gente</em>
          </>
        }
        descricao="Dúvidas sobre um pedido, sugestões ou parcerias: respondemos em até 1 dia útil."
      />

      <Secao>
        <Container>
          <Grade>
            {enviado ? (
              <Enviado>
                <span className="check">✓</span>
                <h2>
                  Mensagem <em>enviada!</em>
                </h2>
                <p>
                  Obrigado, {dados.nome.split(' ')[0]}. Vamos responder no e-mail <b>{dados.email}</b> em até 1 dia
                  útil.
                </p>
                <Botao
                  variante="secundario"
                  onClick={() => {
                    setDados(vazio)
                    setEnviado(false)
                  }}
                >
                  Enviar outra mensagem
                </Botao>
              </Enviado>
            ) : (
              <Formulario onSubmit={enviar} noValidate>
                <h2>Envie uma mensagem</h2>
                <Campo $erro={!!erros.nome}>
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" value={dados.nome} onChange={alterar} />
                  {erros.nome && <Erro>{erros.nome}</Erro>}
                </Campo>
                <Campo $erro={!!erros.email}>
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" value={dados.email} onChange={alterar} />
                  {erros.email && <Erro>{erros.email}</Erro>}
                </Campo>
                <Campo $erro={false}>
                  <label htmlFor="assunto">Assunto</label>
                  <select id="assunto" name="assunto" value={dados.assunto} onChange={alterar}>
                    <option>Pedido</option>
                    <option>Retirada no local</option>
                    <option>Sugestão ou elogio</option>
                    <option>Quero ser parceiro</option>
                    <option>Outro assunto</option>
                  </select>
                </Campo>
                <Campo $erro={!!erros.mensagem}>
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={5} value={dados.mensagem} onChange={alterar} />
                  {erros.mensagem && <Erro>{erros.mensagem}</Erro>}
                </Campo>
                <button type="submit" className="enviar">
                  Enviar mensagem →
                </button>
              </Formulario>
            )}

            <Canais>
              <h2>Outros canais</h2>
              <ul>
                <li>
                  <img src={whatsapp} alt="" />
                  <div>
                    <small>WhatsApp</small>
                    <strong>(11) 90000-0000</strong>
                  </div>
                </li>
                <li>
                  <img src={instagram} alt="" />
                  <div>
                    <small>Instagram</small>
                    <strong>@efood.massas</strong>
                  </div>
                </li>
                <li>
                  <img src={email} alt="" />
                  <div>
                    <small>E-mail</small>
                    <strong>contato@efood.com.br</strong>
                  </div>
                </li>
                <li>
                  <img src={relogio} alt="" />
                  <div>
                    <small>Atendimento</small>
                    <strong>Todos os dias, 11h às 23h</strong>
                  </div>
                </li>
              </ul>
            </Canais>
          </Grade>

          <Faq>
            <h2>
              Perguntas <em>frequentes</em>
            </h2>
            {perguntas.map((item) => (
              <details key={item.pergunta}>
                <summary>{item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </Faq>
        </Container>
      </Secao>
      <Rodape />
    </>
  )
}

export default Contato
