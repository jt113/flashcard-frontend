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
                <br></br>
                {Cookies.get('username') && (<p className="text-color-primary" style={{ fontSize: '30px' }}>Welcome, {Cookies.get('username')}</p>)}
                <br></br>
                <br></br>
                <table style={{width: '100%', border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black', }}>
                        <td style={{border: '1px solid black', textAlign: 'center', height: '70px' }}>
                            <Link to="/study"><button className="button">Study Flashcards</button></Link>
                        </td>
                        <td style={{ border: '1px solid black', textAlign: 'center', height: '70px' }}>
                            <Link to="/manage"><button className="button">Manage Flashcards</button></Link>
                        </td>
                    </tr>
                </table>
                <br></br>
            </div>
        );
    }
}

export default FlashcardHomeComponent;