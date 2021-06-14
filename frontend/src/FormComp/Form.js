import React, {useContext} from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import {Context} from '../store'
import {Button, Form as BootstrapForm} from "react-bootstrap"

function Form() {
    const {handleChange, inputs, handleSubmit, errors} = useForm(validate);
    const [state, dispatch] = useContext(Context);

    if (state.registered === true) {
        return (<div className="alert alert-success">You have created account {state.role}<br/></div>)
    }

    return (
        <>
            <h1>New Member Registration</h1>
            {state.registrationError && <div className="alert alert-danger">{state.registrationError}</div>}
            <BootstrapForm onSubmit={handleSubmit} className="custom-form">
                <BootstrapForm.Row>
                    <BootstrapForm.Label>*User Role</BootstrapForm.Label>

                    <BootstrapForm.Control as="select" name="role" custom value={inputs.role} type="select"
                                           onChange={handleChange}
                    >
                        <option value="ADMIN">Admin</option>
                        <option value="USER">User</option>
                    </BootstrapForm.Control>
                </BootstrapForm.Row>
                <BootstrapForm.Row>

                    <BootstrapForm.Control type="email"
                                           name="email"
                                           placeholder="Email *"
                                           value={inputs.email}
                                           onChange={handleChange}
                                           className={`${errors.email} ? "error" : "success"`}
                                           autoComplete="off"/>
                </BootstrapForm.Row>

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
