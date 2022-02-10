import {Container} from '../Container'
import { NFTMintCard } from '../NFTMintCard'

import './NFTMint.css'

import EPImage from '../../Images/EP Image-min.png'
import LPImage from '../../Images/LP Image-min.png'

const data = [
  {
    img: EPImage,
    title: 'EP MEMBERSHIP',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bulletPoints: [
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ]
  },
  {
    img: LPImage,
    title: 'LP MEMBERSHIP',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bulletPoints: [
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Bullet point: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ]
  },
]

export const NFTMint = () => {
  return (
    <section className='nftmint-section'>
      <Container>
        <div className='nftmint-box'>
          <h2 className='nftmint-title'>NFT mint</h2>
          <ul className='nftmint-list'>
            {data.map(({img, title, text, bulletPoints}) => {
              return <NFTMintCard
                key={title}
                img={img}
                title={title}
                text={text}
                bulletPoints={bulletPoints}
              />
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}