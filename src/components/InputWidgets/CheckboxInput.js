import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import { dateFilter } from 'react-bootstrap-table2-filter';
import {getFormPreFillCheckbox} from './../helpers/fomrUtils';

class CheckboxInput extends React.Component {
    // console.log(props);
    constructor(props){
        super(props)
        this.state ={
            values  : []
        }
    }

    onInputChange(event) {
        const target = event.target;
        var value = target.value;
        let checkBoxValues = new Set(this.state.values);



        if(target.checked){

            checkBoxValues.add(value) 
        }else{
            // console.log(checkBoxValues);
            checkBoxValues.delete(value)
        }
        
        console.log(checkBoxValues);

        
        this.props.onInputDataChange(this.props.sectionIndex, this.props.fieldIndex, Array.from(checkBoxValues))
        

        this.setState({
            values : checkBoxValues
        })
        
        
    }

    render(){
        return (
            <React.Fragment>
                <FormGroup>
                    <h5 className="mb-3">{this.props.label}</h5>
                    {this.props.input.values.options.map((option, index) => {
                        let preFillCheckbox = getFormPreFillCheckbox(option, this.props.input, index);
                        return <CustomInput onChange={(e)=>this.onInputChange(e)} type="checkbox" key={`${this.props.input.id}-${index}`} id={`${this.props.input.id}-${index}`} value={option} name={`${this.props.input.keyword}`}  label={option} defaultChecked={preFillCheckbox.isEqual} />;
                    })}
                </FormGroup>
            </React.Fragment>
        );
    }
};

export default CheckboxInput;