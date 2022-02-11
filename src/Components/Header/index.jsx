import {Container} from '../Container'

import './Header.css'

import Logo from '../../Images/Logo-min.png'

export const Header = () => {
  return (
    <header className='header-section'>
      <Container>
        <div className='header-box'>
          <div className='header-box__logo-box'>
            <img src={Logo} alt='PlaylistDAO'/>
          </div>
          <a href='#roadmap' className='header-box_link'>
            roadmap
          </a>
          <a href='#faq' className='header-box_link'>
            faq
          </a>
          <a href='#join' className='header-box_link'>
            join
          </a>
        </div>
      </Container>
    </header>
  )
}