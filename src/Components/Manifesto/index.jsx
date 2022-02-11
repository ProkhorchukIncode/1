import {Container} from '../Container'

import './Manifesto.css'

import ManifestoImage from '../../Images/Manifesto-min.png'
import ManifestoMottoImage from '../../Images/Group 2-min.png'

export const Manifesto = () => {
  return (
    <section className='manifesto-section'>
      <Container>
        <div className='manifesto-box__position'>
          <div className='manifesto-box'>
            <img src={ManifestoImage} alt='Music needs you'/>
          </div>
          <img src={ManifestoMottoImage} alt='Music needs you' className='manifesto-box__motto-image'/>
        </div>
      </Container>
    </section>
  )
}