import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import {getFormPreFillTextInput} from './../../../../helpers/fomrUtils';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


import AvInput from 'availity-reactstrap-validation/lib/AvInput';

const TextInput = (props) => {
    const onInputChange = (e) => {
        // alert("Loaded")
        console.log(e.target.value);
        if(e.target.value.length > 0) {
            props.onInputDataChange(props.sectionIndex, props.fieldIndex, e.target.value)
        }
        // 
    }

    let textPreFill = getFormPreFillTextInput(props.input);

    console.log(props);
    return (
        <React.Fragment>
            <h5 className="mb-3">{props.label}</h5>
            <InputGroup>
                
                <AvInput
                    onChange={(e) => {onInputChange(e)}}
                    type={props.input.type}
                    name={props.input.id}
                    id={props.input.id}
                    placeholder={props.input.placeholder}
                    className="mb-4"
                    defaultValue={(textPreFill.isExists) ? textPreFill.data : undefined}
                />
            </InputGroup>
        </React.Fragment>
    );
};

export default TextInput;