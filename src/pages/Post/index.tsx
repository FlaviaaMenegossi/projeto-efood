import { Link, Navigate, useParams } from 'react-router-dom'
import Cabecalho from '../../componentes/Cabecalho'
import Rodape from '../../componentes/Rodape'
import { formataData, posts } from '../../data/blog'
import { Container } from '../../styles'
import { Artigo, Capa, Leia, Topo, Voltar } from './styles'

const Post = () => {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const outros = posts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Cabecalho />
      <Artigo>
        <Container>
          <Topo>
            <Voltar to="/blog">← Voltar ao blog</Voltar>
            <span className="categoria">{post.categoria}</span>
            <h1>{post.titulo}</h1>
            <p className="resumo">{post.resumo}</p>
            <p className="info">
              {post.autor} · {formataData(post.data)} · {post.leitura} min de leitura
            </p>
          </Topo>
        </Container>

        <Capa>
          <img src={post.imagem} alt="" />
        </Capa>

        <Container>
          <div className="conteudo">
            {post.conteudo.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <Leia>
            <h2>Continue lendo</h2>
            <ul>
              {outros.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}`}>
                    <img src={item.imagem} alt="" />
                    <span>{item.categoria}</span>
                    <strong>{item.titulo}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </Leia>
        </Container>
      </Artigo>
      <Rodape />
    </>
  )
}

export default Post
