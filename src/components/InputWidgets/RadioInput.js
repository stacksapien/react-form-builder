import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import {getFormPreFillRadioBox} from './../helpers/fomrUtils';

const RadioInput = (props) => {
    // console.log(props);
    const onInputChange = (e) => {
        // alert("Loaded")
        console.log(e.target.value);
        if(e.target.value.length > 0) {
            props.onInputDataChange(props.sectionIndex, props.fieldIndex, e.target.value)
        }
        // 
    }

    return (
        <React.Fragment>
            <FormGroup>
            <h5 className="mb-3">{props.label}</h5>
                {props.input.values.options.map((option, index) => {
                     let preFillRadioBox = getFormPreFillRadioBox(option, props.input);
                    return <CustomInput onChange={(e)=>{onInputChange(e)}} type="radio" id={`${props.input.id}-${index}`} value={option} name={props.input.id}  label={option} defaultChecked={preFillRadioBox.isEqual} />;
                })}
            </FormGroup>
        </React.Fragment>
    );
};

export default RadioInput;