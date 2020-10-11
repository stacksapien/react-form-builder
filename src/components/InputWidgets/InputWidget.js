import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import AvInput from 'availity-reactstrap-validation/lib/AvInput';

import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import MultipleChoiceGrid from './MultipleChoiceGrid'
import RatingInput from './RatingInput'

const InputWidget = ({ type, label, data, sectionIndex, fieldIndex, onInputDataChange }) => {
    // console.log( data);
    switch (type) {
        case 'input':
            return <TextInput sectionIndex={sectionIndex} fieldIndex={fieldIndex} onInputDataChange={onInputDataChange} input={data} label={label} />;
        case 'checkboxes':
            return <CheckboxInput sectionIndex={sectionIndex} fieldIndex={fieldIndex} onInputDataChange={onInputDataChange} input={data} label={label} />;
        case 'radio' : 
            return <RadioInput sectionIndex={sectionIndex} fieldIndex={fieldIndex} onInputDataChange={onInputDataChange} input={data} label={label} />
        case 'multiple-choice-grid':
            return <MultipleChoiceGrid sectionIndex={sectionIndex} fieldIndex={fieldIndex} onInputDataChange={onInputDataChange} input={data} label={label} />    
        case 'rating':
            return <RatingInput sectionIndex={sectionIndex} fieldIndex={fieldIndex} onInputDataChange={onInputDataChange} input={data} label={label} />    
                
        default:

            return <div></div>;
            break;
    }
};

export default InputWidget;