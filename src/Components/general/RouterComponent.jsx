import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from '../header_footer/FooterComponent';
import HeaderComponent from '../header_footer/HeaderComponent';
import WelcomeComponent from './WelcomeComponent'
import SignUpComponent from '../login/SignUpComponent'
import FlashcardHomeComponent from '../flashcard/FlashcardHomeComponent'
import ManageFlashcardsComponent from '../flashcard/ManageFlashcardsComponent';
import StudyFlashcardsComponent from '../flashcard/StudyFlashcardsComponent';
class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <HeaderComponent />
                    <div id="wrap">

                    </div>
                        <Switch>

                            <Route path="/" exact component={WelcomeComponent} />
                            <Route path="/signup" exact component={SignUpComponent} />
                            <Route path="/home" exact component={FlashcardHomeComponent} />
                            <Route path="/manage" exact component={ManageFlashcardsComponent} />
                            <Route path="/study" exact component={StudyFlashcardsComponent} />
                        </Switch>
                    <FooterComponent />
                </>
            </Router>
        );
    }
}
export default RouterComponent;
