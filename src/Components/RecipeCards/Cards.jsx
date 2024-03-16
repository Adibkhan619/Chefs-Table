// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('/public/itemData.json')
        .then(res => res.json())
        .then(data => setCards(data));
        
    }, [])





    return (
        <div className='grid grid-cols-2'>
            {
                cards.map((card , idx) => <SingleCard card={card} key={idx}></SingleCard>)
            }
        </div>
    );
};


export default Cards;