import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from '../header_footer/FooterComponent';
import HeaderComponent from '../header_footer/HeaderComponent';
import WelcomeComponent from './WelcomeComponent'
import SignUpComponent from '../login/SignUpComponent'
import FlashcardHomeComponent from '../flashcard/FlashcardHomeComponent'
import ManageFlashcardsComponent from '../flashcard/ManageFlashcardsComponent';
import StudyFlashcardsComponent from '../flashcard/StudyFlashcardsComponent';
import UpdateFlashcardComponent from '../flashcard/UpdateFlashcardComponent'
import CreateFlashcardComponent from '../flashcard/CreateFlashcardComponent';
import GoodbyeComponent from '../login/GoodbyeComponent'
class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
    }
    setIsLoggedIn(isUserLoggedIn) {
        this.setState({ isLoggedIn: isUserLoggedIn });
    }
    render() {
        return (
            <Router>
                <>
                    <HeaderComponent isLoggedIn={this.state.isLoggedIn} setIsLoggedIn={this.setIsLoggedIn} />
                    <div id="wrap">
                        <Switch>
                            <Route path="/" exact component={(props) => <WelcomeComponent {...props} setIsLoggedIn={this.setIsLoggedIn} />} />
                            <Route path="/signup" exact component={SignUpComponent} />
                            <Route path="/home" exact component={FlashcardHomeComponent} />
                            <Route path="/manage" exact component={ManageFlashcardsComponent} />
                            <Route path="/study" exact component={StudyFlashcardsComponent} />
                            <Route path="/flashcard/:id" component={UpdateFlashcardComponent} />
                            <Route path="/add_flashcard/:id" component={CreateFlashcardComponent} />
                            <Route path="/goodbye" exact component={GoodbyeComponent} />
                        </Switch>
                    </div>
                    <FooterComponent />
                </>
            </Router>
        );
    }
}
export default RouterComponent;
