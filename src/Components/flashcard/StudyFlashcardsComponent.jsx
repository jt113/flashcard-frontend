import React from 'react';


class StudyFlashcardsComponent extends React.Component {
    componentDidMount(){
        document.body.style = 'background: #F7F7F7;';
    }
    render(){
        return(
            <div className="container clear-top" id="main">
                <h1>Study Flashcards</h1>
            </div>
        );
    }
}

export default StudyFlashcardsComponent;