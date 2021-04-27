import React from 'react';
import FlashcardDataService from '../../service/FlashcardDataService';


class CreateFlashcardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            question: "",
            answer: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        let flashcard = {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer,
        }
        FlashcardDataService.addFlashcard(flashcard)
        .then(() => { this.props.history.push(`/manage`)})
        event.preventDefault();
    }
    render(){
        return(
            <div className="container clear-top" id="main">
                <h1>Add Flashcard</h1>
                <form onSubmit={this.handleSubmit}>
                    Question <input type="text" name="question" onChange={this.handleChange}/>
                     Answer <input type="text" name="answer" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default CreateFlashcardComponent;