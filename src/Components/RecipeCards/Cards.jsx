// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('/public/itemData.json')
        .then(res => res.json())
        .then(data => console.log(data));
        
    }, [])





    return (
        <div>
            {
                cards
            }
        </div>
    );
};

export default Cards;