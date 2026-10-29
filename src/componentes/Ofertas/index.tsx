import { useCarrinho } from '../../contexto/useCarrinho'
import type { Oferta } from '../../data/promocoes'
import { Card, CardCupom, Lista } from './styles'

type Props = {
  ofertas: Oferta[]
}

const Ofertas = ({ ofertas }: Props) => {
  const { cupom, aplicarCupom } = useCarrinho()

  return (
    <Lista>
      {ofertas.map((oferta) => (
        <li key={oferta.id}>
          {oferta.cupom ? (
            <CardCupom type="button" onClick={() => aplicarCupom(oferta.cupom!)}>
              <strong>{oferta.valor}</strong>
              <div>
                <h3>{oferta.titulo}</h3>
                <p>
                  {cupom?.codigo === oferta.cupom ? (
                    <>Cupom {oferta.cupom} aplicado ✓</>
                  ) : (
                    <>
                      Toque para aplicar o cupom <b>{oferta.cupom}</b>
                    </>
                  )}
                </p>
              </div>
            </CardCupom>
          ) : (
            <Card>
              <strong>{oferta.valor}</strong>
              <div>
                <h3>{oferta.titulo}</h3>
                <p>{oferta.descricao}</p>
              </div>
            </Card>
          )}
        </li>
      ))}
    </Lista>
  )
}

export default Ofertas
