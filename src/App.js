import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Components

import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homePage';
import AboutMe from './Components/pages/aboutMe';
import Education from './Components/pages/education';
import Experience from './Components/pages/experience';
import Projects from './Components/pages/projects';
import Hobbies from './Components/pages/hobbies';
import Contacts from './Components/pages/contacts';

// includes
import './Assets/css/default.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Header />

                    <Route exact path='/' component={Homepage} />

                    <Route exact path='/AboutMe' component={AboutMe} />

                    <Route exact path='/Education' component={Education} />

                    <Route exact path='/Experience' component={Experience} />

                    <Route exact path='/Projects' component={Projects} />

                    <Route exact path='/Hobbies' component={Hobbies} />

                    <Route exact path='/Contacts' component={Contacts} />

                    <Footer />

                    <div className="block2">
                        </div>
                </div>
            </Router>
        );
    }
}

export default App;