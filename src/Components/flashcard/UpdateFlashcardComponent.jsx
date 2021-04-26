import React from 'react';


class UpdateFlashcardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            question: this.props.match.params.question,
            answer: '',
        }
    }
    render(){
        return(
            <div className="container clear-top" id="main">
                <h1>Update flashcard</h1>
                <form>
                    <input type="text" value={this.state.question}/>
                    <input type="text"/>
                    <button type="button">Save</button>
                </form>
            </div>
        );
    }
}

export default UpdateFlashcardComponent;