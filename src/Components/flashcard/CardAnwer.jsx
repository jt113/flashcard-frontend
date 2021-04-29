import React, { useState } from 'react';

const CardAnswer = (props) => {
    const [revealed, setRevealed] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    if(props.id > currentCardIndex){
        setCurrentCardIndex(currentCardIndex + 1);
        setRevealed(false);
    }
    if(props.id < currentCardIndex){
        setCurrentCardIndex(currentCardIndex - 1);
        setRevealed(false);
    }
    if(revealed){
        return (props.answer);
    }
    else{
        return (<p onClick={() => setRevealed(true)}>Click to reveal</p>);
    }
}
export default CardAnswer;
