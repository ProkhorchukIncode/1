import './TrackCard.css'

export const TrackCard = ({date, place, title}) => {
  return (
    <li className='track-card-box'>
          <p>
              {place < 10
                  ?
                `${date} / Track 0${place}`
                  :
                `${date} / Track ${place}`
              }
          </p>
          <h3 className='track-card-title'>{title}</h3>
    </li>
  )
}