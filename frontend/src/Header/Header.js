import React, {useContext} from "react";
import {Context} from "../store";
import {Col, Row} from "react-bootstrap";

function Header() {
    const [state, dispatch] = useContext(Context);

    function logout() {
        dispatch({type: 'LOG_OUT'})
    }

    return (
        <Row>
            <Col></Col>
            {state.authenticated && <Col md="auto"><a href="/">Booking</a></Col>}
            <br/>
            {!state.authenticated && <Col md="auto"><a href="/login">Login</a></Col>}
            <br/>
            {!state.authenticated && <Col md="auto"><a href="/register">Register</a></Col>}
            <br/>
            {state.authenticated && <Col md="auto"><a href="#" onClick={logout}>Log Out</a></Col>}

        </Row>

    );
};

export default Header;
