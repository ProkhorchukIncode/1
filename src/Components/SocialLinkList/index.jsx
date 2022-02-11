import './SocialLinkList.css'

import twitter from '../../Images/Twitter Icon.svg'
import discord from '../../Images/Discord Icon.svg'
import email from '../../Images/Email Icon.svg'

export const SocialLinkList = () => {
  return (
    <ul className='social-link-list'>
      <li>
        <a href='https://twitter.com/'>
          <img src={twitter} alt='twitter'/>
        </a>
      </li>
      <li>
        <a href='https://discord.com/'>
          <img src={discord} alt='discord'/>
        </a>
      </li>
      <li>
        <a href='https://www.google.com/intl/en/gmail/about/'>
          <img src={email} alt='email' className='social-link-list__email'/>
        </a>
      </li>
    </ul>
  )
}