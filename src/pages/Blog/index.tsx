import { useState } from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import TopoPagina from '../../componentes/TopoPagina'
import Rodape from '../../componentes/Rodape'
import { categorias, formataData, posts, type Categoria, type Post } from '../../data/blog'
import { Container } from '../../styles'
import { Card, Destaque, Filtros, Grade, Info, Secao } from './styles'

const Meta = ({ post }: { post: Post }) => (
  <Info>
    <b>{post.categoria}</b>
    <span>
      {formataData(post.data)} · {post.leitura} min de leitura
    </span>
  </Info>
)

const Blog = () => {
  const [filtro, setFiltro] = useState<Categoria | 'Todos'>('Todos')

  const filtrados = filtro === 'Todos' ? posts : posts.filter((post) => post.categoria === filtro)
  const [principal, ...demais] = filtrados

  return (
    <>
      <Cabecalho />
      <TopoPagina
        selo="Blog eFood"
        titulo={
          <>
            Histórias, receitas <em>e bastidores</em>
          </>
        }
        descricao="O que acontece nas cozinhas das nossas trattorias — e dicas para aproveitar cada garfada em casa."
      />

      <Secao>
        <Container>
          <Filtros aria-label="Filtrar por categoria">
            {(['Todos', ...categorias] as const).map((categoria) => (
              <button
                key={categoria}
                type="button"
                aria-pressed={filtro === categoria}
                onClick={() => setFiltro(categoria)}
              >
                {categoria}
              </button>
            ))}
          </Filtros>

          {principal && (
            <Destaque to={`/blog/${principal.slug}`}>
              <img src={principal.imagem} alt="" />
              <div>
                <Meta post={principal} />
                <h2>{principal.titulo}</h2>
                <p>{principal.resumo}</p>
                <span className="ler">Ler artigo →</span>
              </div>
            </Destaque>
          )}

          <Grade>
            {demais.map((post) => (
              <li key={post.slug}>
                <Card to={`/blog/${post.slug}`}>
                  <img src={post.imagem} alt="" />
                  <Meta post={post} />
                  <h3>{post.titulo}</h3>
                  <p>{post.resumo}</p>
                </Card>
              </li>
            ))}
          </Grade>
        </Container>
      </Secao>
      <Rodape />
    </>
  )
}

export default Blog
