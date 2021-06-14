import React, {useContext, useState} from "react";
import {Context} from '../store'
import {Button, Form as BootstrapForm, Row, Col, ListGroup} from "react-bootstrap"
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Booking() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [error, setError] = useState("");

    const [state, dispatch] = useContext(Context);
    const [bookedDate, setBookDate] = useState(null);

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 10);

    function addSlot() {
        setError("")
        for (let slot of state.slots) {
            if (moment(startDate).isBetween(slot.startDate, slot.endDate, 'date', '[]') || moment(endDate).isBetween(slot.startDate, slot.endDate, 'date', '[]')) {
                setError("Slots already have have start or end date")
                return;
            }
        }
        dispatch({
            type: 'ADD_SLOTS',
            payload: {startDate: moment(startDate).format('MM/DD/YYYY'), endDate: moment(endDate).format('MM/DD/YYYY')}
        });
    };

    function isAvailable(date) {
        for (let slot of state.bookedSlots) {
            if (moment(date).format('MM/DD/YYYY')===slot){
                return false;
            }
        }
            for (let slot of state.slots) {
            if (moment(date).isBetween(slot.startDate, slot.endDate, 'date', '[]')) {
                return true;
            }
        }
        return false;
    };

    function bookDate() {
        if (bookedDate == null){
            return
        }
            dispatch({
                type: 'ADD_BOOKED_SLOTS',
                payload: moment(bookedDate).format('MM/DD/YYYY')
            });
            setBookDate(null);

    }

    function deleteFunction(index) {
        let slots = state.slots;
        for(let booked of state.bookedSlots){
            if(moment(booked).isBetween(state.slots[0].startDate, state.slots.endDate, 'date', [])){
                setError("Slot contains at least one booked date")
                return;
            }
        }
        slots.splice(index, 1)
        dispatch({type: 'SET_SLOTS', payload: slots});
    }

    if (!state.authenticated) {
        return (<div className="alert alert-danger">You are not authenticated. Log in please.</div>)
    }

    return (
        <>
            <Col className="w-100 p-3">

                {state.slots.length > 0 && <>
                    <Row><Col><h4>Available slots</h4></Col></Row>
                    <Row >
                        {state.slots.map((value, index) => {
                            let deleteClick = deleteFunction.bind(this, index);

                            return <><Col  className="p-3">Start Date: {value.startDate}</Col>
                                <Col  className="p-3">End Date: {value.endDate} </Col>
                                <Col  className="p-2 "><Button
                                    onClick={deleteClick}>Remove</Button></Col>
                                <div className="w-100"/>
                            </>
                        })}
                    </Row>
                </>
                }
                <div className="w-100" style={{"height": "25px"}}/>

                <Row><Col><h4>Add Time Slots</h4></Col></Row>
                <Row >
                    <Col className="p-3">
                        <DatePicker selected={startDate} minDate={new Date()} maxDate={maxDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        setEndDate(date)
                                    }}/>
                    </Col>
                    <Col className="p-3" >
                        <DatePicker selected={endDate} minDate={startDate} maxDate={maxDate}
                                    onChange={(date) => setEndDate(date)}/>
                    </Col>
                    <Col className="p-2 ">
                        <Button onClick={addSlot}>Add Slot</Button>
                    </Col>
                </Row>
                {error && <div className="alert alert-danger">{error}</div>}

                <br/>

                {state.slots.length > 0 && <>
                    <h4>Let's now book date</h4>
                    <Row>
                        <Col  className="p-3 ">
                            <DatePicker id="booked"
                                selected={bookedDate}
                                onChange={(date) =>
                                    setBookDate(date)}
                                filterDate={isAvailable}
                                placeholderText="Select a date"
                            />
                        </Col>
                        <Col className="p-2">
                            <Button onClick={bookDate}>Choose Date</Button>
                        </Col>
                    </Row>


                    {state.bookedSlots.length > 0 && <>
                        <div className="w-100" style={{"height": "25px"}}/>
                        <Row><Col><h4>Booked slots</h4></Col></Row>
                        <Row>
                            {state.bookedSlots.map((value, index) => {

                                return <><Col className="p-3">Date: {moment(value).format('MM/DD/YYYY')}</Col>
                                    <div className="w-100"/>
                                </>
                            })}
                        </Row>
                    </>
                    }
                </>
                }
            </Col>

        </>
    );
}

export default Booking;
