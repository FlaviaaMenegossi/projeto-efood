import { useEffect, useRef, useState } from 'react'

// avisa (uma única vez) quando o elemento aparece na tela
export const useNaTela = <T extends Element>(margem = '0px 0px -12% 0px') => {
  const ref = useRef<T>(null)
  const [visivel, setVisivel] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const elemento = ref.current
    if (!elemento || visivel) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { rootMargin: margem }
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [margem, visivel])

  return [ref, visivel] as const
}
