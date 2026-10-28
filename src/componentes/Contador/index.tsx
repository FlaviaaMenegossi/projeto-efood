import { useEffect, useState } from 'react'
import { useNaTela } from '../../hooks/useNaTela'

type Props = {
  valor: number
  casas?: number
  sufixo?: string
  duracao?: number
}

const semMovimento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// conta de 0 até o valor quando o número aparece na tela
const Contador = ({ valor, casas = 0, sufixo = '', duracao = 1800 }: Props) => {
  const [ref, visivel] = useNaTela<HTMLSpanElement>()
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    if (!visivel) return

    let quadro = 0
    let inicio: number | null = null

    const passo = (tempo: number) => {
      if (semMovimento()) return setAtual(valor)
      inicio ??= tempo
      const progresso = Math.min(1, (tempo - inicio) / duracao)
      setAtual(valor * (1 - Math.pow(1 - progresso, 3)))
      if (progresso < 1) quadro = requestAnimationFrame(passo)
    }

    quadro = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(quadro)
  }, [visivel, valor, duracao])

  return (
    <span ref={ref}>
      {atual.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}
      {sufixo}
    </span>
  )
}

export default Contador
