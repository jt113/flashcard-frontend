import React from 'react';
import FlashcardDataService from '../../service/FlashcardDataService';


class UpdateFlashcardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            question: '',
            answer: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        document.body.style = 'background: #F7F7F7;';
    }
    handleSubmit(event) {
        let myflashcard = {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer
        }
        // alert(JSON.stringify(myflashcard))
        FlashcardDataService.updateFlashcard(myflashcard).then(() => this.props.history.push('/manage'))
        event.preventDefault();
    }
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container clear-top" id="main">
                <br />
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6">
                        <div className="ml-auto mr-auto">
                            <h1 className="text-color-primary">Update flashcard</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-md-6 p-5" style={{ border: "solid", borderWidth: "2px", borderRadius: "4px", backgroundColor: "white" }}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row form-group justify-content-center mt-4 mb-4">
                                <label htmlFor="question" className="col-xs-12 col-md-4">Question</label>
                                <input type="text"
                                    name="question"
                                    value={this.state.question}
                                    className="col-xs-12 col-md-8"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="row form-group justify-content-center mt-5 mb-4">
                                <label htmlFor="answer" className="col-xs-12 col-md-4">Answer</label>
                                <input type="text"
                                    name="answer"
                                    value={this.state.answer}
                                    className="col-xs-12 col-md-8"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="row form-group justify-content-center mt-5">
                                <button className="button" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateFlashcardComponent;