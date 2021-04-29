import React from 'react';
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
        this.handlePrevClick = this.handlePrevClick.bind(this);
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

    handleNextClick() {
        if (this.state.currentFlashcard === this.state.flashcards.length - 1) {
            return;
        }
        this.setState(prevState => ({ ...this.state, currentFlashcard: prevState.currentFlashcard + 1 }))
    }
    handlePrevClick() {
        if (this.state.currentFlashcard === 0) {
            return;
        }
        this.setState(prevState => ({ ...this.state, currentFlashcard: prevState.currentFlashcard - 1 }))
    }

    render() {
        return (
            <div className="container clear-top" id="main">
                <br />
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6">
                        <div className="ml-auto mr-auto">
                            <h1 className="text-color-primary">Flashcard Study</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header" style={{backgroundColor: "#3396b4", color: "white"}}>
                            <h5>{this.getCurrentCard().question}</h5>
                            </div>
                            <div className="card-body">
                                
                                <CardAnswer answer={this.getCurrentCard().answer} id={this.state.currentFlashcard} />

                            </div>
                            <div className="card-body">
                                
                                <button className="button-2" onClick={this.handlePrevClick} disabled={this.state.currentFlashcard === 0}>Prev</button>
                                <button className="button-2" onClick={this.handleNextClick} disabled={this.state.currentFlashcard === this.state.flashcards.length-1}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default StudyFlashcardsComponent;