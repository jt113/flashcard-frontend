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
                {Cookies.get('username') && (<p style={{ fontSize: '30px' }}>Welcome, {Cookies.get('username')}</p>)}
                <table style={{width: '100%', border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black', }}>
                        <td style={{border: '1px solid black', textAlign: 'center', height: '70px' }}>
                            <Link to="/study">   Study Flashcards   </Link>
                        </td>
                        <td style={{ border: '1px solid black', textAlign: 'center', height: '70px' }}>
                            <Link to="/manage">Manage Flashcards</Link>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default FlashcardHomeComponent;