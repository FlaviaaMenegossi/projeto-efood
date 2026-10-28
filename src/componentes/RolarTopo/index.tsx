import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ao trocar de página, volta para o topo (links com #âncora mantêm o comportamento normal)
const RolarTopo = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default RolarTopo
