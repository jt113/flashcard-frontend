import React from 'react';

class GoodbyeComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.body.style = 'background: #F7F7F7;';
    }
    render(){
        return(
            <div className="container clear-top" id="main">
                <h1>Goodbye. Thank you for using our app!</h1>
            </div>
        );
    }
}
export default GoodbyeComponent;