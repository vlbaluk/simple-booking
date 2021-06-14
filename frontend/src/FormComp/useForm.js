import React, {useContext, useState} from "react";
import {Context} from "../store";
import {useHistory} from "react-router-dom";

const useForm = validate => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: "",
        role: "USER",
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    const history = useHistory();

    const [state, dispatch] = useContext(Context);


    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(inputs));

        for(let error in errors){
            if(errors[error] !=="success"){
                return
            }
        }

        fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(inputs)
        }).then(response => {
            if (response.status != 201)
                throw Error(response);
            return response.json()
        })
            .then(data => {
                dispatch({type: 'SET_REGISTERED', payload: true});
                setTimeout(function () {
                    history.push("/login");
                }, 1500);
            })
            .catch((error) => {
                dispatch({type: 'SET_REGISTRATION_ERROR', payload: "Please try different  username"})
            });
    };

    return {handleChange, inputs, handleSubmit, errors};
};

export default useForm;
