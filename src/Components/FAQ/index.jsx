import {Container} from '../Container'

import './FAQ.css'

export const FAQ = () => {
  return (
    <section className='faq-section' id='faq'>
      <Container>
        <div className='faq-box'>
            <h2 className='faq-title'>NFT mint</h2>
            <div className='faq-text-box'>
                      <h3 className='faq-text-box__title'>What’s an NFT?</h3>
                <p className='faq-text-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>      
                  </div>
                  <div className='faq-text-box'>
                      <h3 className='faq-text-box__title'> What will be the use of the Membership NFT sale proceeds?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      <ul className='faq-text-box__list'>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                      </ul>
                  </div>
                  <div className='faq-text-box'>
                      <h3 className='faq-text-box__title'>What governance rights will playlistDAO Membership Card holders have?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      <ul className='faq-text-box__list'>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                      </ul>
                  </div>
                  <div className='faq-text-box'>
                      <h3 className='faq-text-box__title'>What are the terms of sale?</h3>
                      <p className='faq-text-box__text-link'>View the full</p>
                      <a href='/' className='faq-text-box__link'>Terms of Sale.</a>
                  </div>
        </div>
      </Container>
    </section>
  )
}