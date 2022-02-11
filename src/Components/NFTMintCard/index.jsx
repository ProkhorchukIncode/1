import { useState } from 'react'

import './NFTMintCard.css'

import Arrow from '../../Images/Arrow.svg'

export const NFTMintCard = ({img, title, text, bulletPoints}) => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count+1)
  }

  const handleDecrement = () => {
    if(count === 1){
      return
    }
    setCount(count-1)
  }

  return (
    <li className='nftMintCard'>
      <div className='nftMintCard-box'>
        <img src={img} alt={title} className='nftMintCard-box_image'/>
        <h3 className='nftMintCard-box_title'>{title}</h3>
        <p className='nftMintCard-box_text'>{text}</p>
        <ul className='nftMintCard-box_list'>
          {bulletPoints.map((bulletPoint, i)=> {
            return <li key={i} className='nftMintCard-box_list-text'>
              {bulletPoint}
            </li>
          })}
        </ul>
      </div>
      <div className='nftMintCard-action-box'>
        <div className='nftMintCard-button-box'>
          <button 
            className='nftMintCard-button'
            onClick={handleDecrement}
          >
            -
          </button>
          <span className='nftMintCard-button-result'>
            {count < 10
              ?
              `0${count}`
              :
              count}
          </span>
          <button 
            className='nftMintCard-button'
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className='nftMintCard-link-box'>
          <a href='/' className='nftMintCard-link'>
            mint nft
            <img src={Arrow} alt='mint nft' className='nftMintCard-link-arrow'/>
          </a>
        </div>
      </div>
    </li>
  )
}