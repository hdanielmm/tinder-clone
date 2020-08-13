import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import daniel from './assets/images/IMG_20180812_002946_835.jpg';
import oriana from './assets/images/oriana-juanes.jpg';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Daniel',
      url: daniel
    },
    {
      name: 'Oriana',
      url: oriana
    }
  ]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;