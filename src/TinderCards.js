import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';
import daniel from './assets/images/IMG_20180812_002946_835.jpg';
import oriana from './assets/images/oriana-juanes.jpg';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    const unsubscribe = database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));

    return () => {
      // this is the cleanup...
      unsubscribe();
    }
  }, [])

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