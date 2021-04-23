import React from 'react';
import { Link } from 'react-router-dom';

class FlashcardHomeComponent extends React.Component {
    render(){
        return(
            <div className="container clear-top" id="main">
                <Link to="/study">Study Flashcards</Link>
                <br/>
                <Link to="/manage">Manage Flashcards</Link>
                
            </div>
        );
    }
}

export default FlashcardHomeComponent;