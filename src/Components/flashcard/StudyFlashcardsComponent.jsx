import React, { useState } from 'react';
import FlashcardDataService from '../../service/FlashcardDataService'
import CardAnswer from './CardAnwer'
class StudyFlashcardsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [],
            currentFlashcard: 0,
        }
        this.getCurrentCard = this.getCurrentCard.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick =this.handlePrevClick.bind(this);
    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
        this.refreshFlashcards();
    }
    getCurrentCard() {
        if (this.state.flashcards.length < 1) {
            return {}
        }
        else {
            return this.state.flashcards[this.state.currentFlashcard]
            
        }
    }

    refreshFlashcards() {
        FlashcardDataService.retrieveAllFlashCards()
            .then(
                response => {
                    this.setState({
                        flashcards: response.data,
                    })
                }
            )
    }

    handleNextClick(){
        if(this.state.currentFlashcard === this.state.flashcards.length-1){
            return;
        }
        this.setState(prevState => ({...this.state, currentFlashcard: prevState.currentFlashcard + 1}))
    }
    handlePrevClick(){
        if(this.state.currentFlashcard === 0){
            return;
        }
        this.setState(prevState => ({...this.state, currentFlashcard: prevState.currentFlashcard-1}))
    }

    render() {
        return (
            <div className="container clear-top" id="main">
                <h1>Flashcard Study</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.getCurrentCard().question}</h5>
                        <CardAnswer answer={this.getCurrentCard().answer} id={this.state.currentFlashcard}/>
                        
                    </div>
                    <div className="card-body">
                        <button onClick={this.handlePrevClick}>Prev</button>
                        <button onClick={this.handleNextClick}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyFlashcardsComponent;