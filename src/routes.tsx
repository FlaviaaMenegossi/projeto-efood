import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './pages/Checkout'
import NossaHistoria from './pages/NossaHistoria'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contato from './pages/Contato'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/nossa-historia" element={<NossaHistoria />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<Post />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default Rotas
