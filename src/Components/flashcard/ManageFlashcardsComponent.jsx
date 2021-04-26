import React from 'react';
import FlashcardDataService from '../../service/FlashcardDataService';


class ManageFlashcardsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [],
        }
        this.refreshFlashcards = this.refreshFlashcards.bind(this);
        this.updateFlashcardClicked = this.updateFlashcardClicked.bind(this);
        this.deleteFlashcardClicked = this.deleteFlashcardClicked.bind(this);
    }
    componentDidMount() {
        this.refreshFlashcards();
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

    deleteFlashcardClicked(id, question, answer){

    }
    updateFlashcardClicked(id, question, answer){
        this.props.history.push(`/flashcard/${id}/${question}`)
    }
    render() {
        return (
            <div className="container clear-top" id="main">
                <h1>Manage Flashcards</h1>
                <table className="table">
                    <thead>
                        <tr style={{ textAlign: "center", color: "green" }}>
                            <th>Id</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.flashcards.map(
                                flashcard =>
                                    <tr style={{ textAlign: "center" }} key={flashcard.id}>
                                        <td>{flashcard.id}</td>
                                        <td>{flashcard.question}</td>
                                        <td>{flashcard.answer}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteFlashcardClicked(flashcard.id, flashcard.question, flashcard.answer)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateFlashcardClicked(flashcard.id, flashcard.question, flashcard.answer)}>Update</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ManageFlashcardsComponent;