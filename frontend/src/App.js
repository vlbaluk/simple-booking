import React from "react";
import RegisterForm from "./FormComp/Form";
import LoginForm from "./FormLogin/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Store from "./store";
import Header from "./Header/Header";
import Booking from "./Booking/index";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Store>
            <Router>
                <Switch>
                    <Container  fluid="md" className="app" style={{"max-width":"700px"}}>
                    {/*<div>*/}
                        <Header/>
                        <Route exact path='/register'>
                            <RegisterForm/>
                        </Route>
                        <Route exact path='/login'>
                            <LoginForm/>
                        </Route>
                        <Route exact path='/'>
                            <Booking/>
                        </Route>
                    {/*</div>*/}
                    </Container>
                </Switch>
            </Router>
        </Store>

    );
}

export default App;
