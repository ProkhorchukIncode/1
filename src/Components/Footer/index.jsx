import {Container} from '../Container'

import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer-section'>
      <Container>
        <div className='footer-box'>
          <p>
            &#169;PlaylistDAO 2022 All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}