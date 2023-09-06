import './style.css'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from 'react'


function Card(props: { id: Key | null | undefined; foto: string | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; preco: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; caloria: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {

  return (
    <>
    <div key={props.id} className='body'>
        <div className='card'>
            <img src={props.foto} />
            <div>
              <h4>{props.nome}</h4>
              <div className='infoCard'>
                  <p className='price'>R${props.preco}</p>
                  <p className='kcal'>{props.caloria}kcal</p>
              </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Card
