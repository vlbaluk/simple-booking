import React, {useContext, useState} from "react";
import {Context} from "../store";
import { useHistory } from 'react-router-dom';

const useForm = validate => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [state, dispatch] = useContext(Context);
    const history = useHistory();

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        let errors = validate(inputs, "email");
        setErrors(errors);
        for(let error in errors){
            if(errors[error] !=="success"){
                return
            }
        }

        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Authorisation': store.token
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(inputs) // body data type must match "Content-Type" header
        })
            .then(response => {
                if (response.status != 200)
                    throw Error(response);
                return response.json()
            })
            .then(data => {
                dispatch({type: 'SET_AUTHENTICATED', payload: data.token});
                setTimeout(function(){ history.push("/"); }, 1500);
            })
            .catch((error) => {
                dispatch({type: 'SET_PASSWORD_INCORRECT', payload: true})
            });

    };

    return {handleChange, inputs, handleSubmit, errors};
};

export default useForm;
