import {Container} from '../Container'

import './Header.css'

import Logo from '../../Images/Logo-min.png'

export const Header = () => {
  return (
    <header className='header-section'>
      <Container>
        <div className='header-box'>
          <img src={Logo} alt='PlaylistDAO' className='header-box_logo'/>
          <a href='#roadmap' className='header-box_link'>
            roadmap
          </a>
          <a href='#roadmap' className='header-box_link'>
            faq
          </a>
          <a href='#roadmap' className='header-box_link'>
            join
          </a>
        </div>
      </Container>
    </header>
  )
}