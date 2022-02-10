import {Container} from '../Container'

import './Hero.css'

import Manifesto from '../../Images/Manifesto-min.png'

export const Hero = () => {
  return (
    <section className='hero-section'>
      <Container>
        <div className='hero-box'>
          <img src={Manifesto} alt='Music needs you'/>
          
        </div>
      </Container>
    </section>
  )
}