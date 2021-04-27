import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';

class FlashcardHomeComponent extends React.Component {
    componentDidMount(){
        document.body.style = 'background: #F7F7F7;';
    }
    render(){
        return(
            <div className="container clear-top" id="main">
                {Cookies.get('username') && (<p>Welcome, {Cookies.get('username')}</p>)}
                <Link to="/study">Study Flashcards</Link>
                <br/>
                <Link to="/manage">Manage Flashcards</Link>
                
            </div>
        );
    }
}

export default FlashcardHomeComponent;