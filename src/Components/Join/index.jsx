import {Container} from '../Container'
import { SocialLinkList } from '../SocialLinkList'

import './Join.css'

export const Join = () => {
  return (
    <section className='join-section' id='join'>
      <Container>
        <div className='join-box'>
          <h2 className='join-title'>Join PlaylistDAO</h2>
          <div className='join-text-box'>
            <p className='join-text-box_text'>For upcoming membership mint details, you know the drill. Twitter + Discord. Reach out directly if you want to contribute.</p>
          </div>
          <SocialLinkList/>
        </div>
      </Container>
    </section>
  )
}