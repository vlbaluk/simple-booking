import React, {useContext} from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import {Context} from '../store'
import {Button, Form as BootstrapForm} from "react-bootstrap";

function Form() {
    const {handleChange, inputs, handleSubmit, errors} = useForm(validate, ["email"]);
    const [state, dispatch] = useContext(Context);

    if (state.authenticated) {
        return (<div className="alert alert-success">You are authenticated</div>)
    }

    return (<>
            <h1>Login</h1>
            {state.passwordIncorrected && <div className="alert alert-danger">Password is Incorrect</div>}

            <BootstrapForm onSubmit={handleSubmit} className="custom-form">
                <BootstrapForm.Row>

                    <BootstrapForm.Control
                        type="text"
                        name="username"
                        placeholder="User Name *"
                        value={inputs.username}
                        onChange={handleChange}
                        className={`${errors.username} ? "error" : "success"`}
                        autoComplete="off"/>
                </BootstrapForm.Row>

                <BootstrapForm.Row>

                    <BootstrapForm.Control
                        type="text"
                        name="password"
                        placeholder="Password *"
                        value={inputs.password}
                        onChange={handleChange}
                        className={`${errors.password} ? "error" : "success"`}
                        autoComplete="off"/>
                </BootstrapForm.Row>
                <Button type="submit">SUBMIT</Button>

            </BootstrapForm>
        </>
    );
}

export default Form;
