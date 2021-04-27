import React from 'react';
import FlashcardDataService from '../../service/FlashcardDataService';


class UpdateFlashcardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            question: '',
            answer: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        let myflashcard = {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer
        }
        // alert(JSON.stringify(myflashcard))
        FlashcardDataService.updateFlashcard(myflashcard).then(() => this.props.history.push('/manage'))
        event.preventDefault();
    }
    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="container clear-top" id="main">
                <h1>Update flashcard</h1>
                <form onSubmit={this.handleSubmit}>
                    Question <input type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
                    Answer <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange}/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default UpdateFlashcardComponent;