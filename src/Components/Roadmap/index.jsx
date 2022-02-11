import { Container } from '../Container'
import { TrackCard } from '../TrackCard'

import './Roadmap.css'

const data = [
    {
        date: 'Spring 2022',
        place: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        date: 'Winter 2022',
        place: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        date: 'Spring 2023',
        place: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        date: 'Summer 2023',
        place: 4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export const Roadmap = () => {
  return (
    <section className='roadmap-section' id='roadmap'>
      <Container>
        <div className='roadmap-box'>
            <h2 className='roadmap-title'>Roadmap</h2>
                  <ul className='roadmap-list'>
                      {data.map(({date, place, title}) => {
                          return <TrackCard
                              key={place}
                              date={date}
                              place={place}
                              title={title}
                          />
                      })}
            </ul>
        </div>
      </Container>
    </section>
  )
}