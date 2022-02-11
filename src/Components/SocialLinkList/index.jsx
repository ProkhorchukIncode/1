import './SocialLinkList.css'

import twitter from '../../Images/Twitter.svg'
import discord from '../../Images/Discord.svg'
import email from '../../Images/Email.svg'

export const SocialLinkList = () => {
  return (
    <ul className='social-link-list'>
      <li className='social-link-list__list-item'>
        <a href='https://twitter.com/' >
          <div className='social-link-list__link-relative'>
            <div className='social-link-list__link-box social-link-list__link-box-twitter'></div>
            <div className='social-link-list__link-img-box'>
              <img src={twitter} alt='twitter'/>
            </div>
          </div>
        </a>
      </li>
      <li className='social-link-list__list-item'>
        <a href='https://discord.com/' >
          <div className='social-link-list__link-relative'>
            <div className='social-link-list__link-box social-link-list__link-box-discord'></div>
            <div className='social-link-list__link-img-box'>
              <img src={discord} alt='discord'/>
            </div>
          </div>
        </a>
      </li>
      <li className='social-link-list__list-item'>
        <a href='https://www.google.com/intl/en/gmail/about/' >
          <div className='social-link-list__link-relative'>
            <div className='social-link-list__link-box social-link-list__link-box-email'></div>
            <div className='social-link-list__link-img-box'>
              <img src={email} alt='email'/>
            </div>
          </div>
        </a>
      </li>
    </ul>
  )
}