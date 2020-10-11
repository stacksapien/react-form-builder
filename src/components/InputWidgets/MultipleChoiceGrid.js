import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import {getFormPreFillMultipleChoiceGrid} from './../helpers/fomrUtils';


class MultipleChoiceGrid  extends React.Component {
    constructor(props){
        super(props)

        let _values = []
        _values.length = this.props.input.values.rows.length
        this.state = {
            values : _values
        }
        console.log("-->",this.state.values);
    }

    onChange = (rowIndex, columnIndex) => {

        let values = Object.assign([], this.state.values);
        values[rowIndex] = this.props.input.values.columns[columnIndex];

        this.props.onInputDataChange(this.props.sectionIndex, this.props.fieldIndex, values)

        this.setState({
            values : values
        })
    }

    // console.log(props);
    render(){
        return (
            <React.Fragment>
                <h5 className="mb-3">{this.props.label}</h5>
                <FormGroup>
                    {/* <Label for={this.props.input.keyword}>{this.props.label}</Label> */}
                    <Table className="mb-4" striped bordered  responsive>
                        <thead>
                            <tr>
                                <th></th>
                                {this.props.input.values.columns.map((value, index) =>{
                                    return <th key={index}>{value}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.input.values.rows.map((record, row) => {
                                return (
                                    <tr key={row}>
                                        <th scope="row">{record.text}</th>
                                        {this.props.input.values.columns.map((value, column) => {
                                            let preFillMultipleChoiceGrid = getFormPreFillMultipleChoiceGrid(value, this.props.input, row)
                                            return <td  key={`${this.props.input.id}-${row}-${column}`}><CustomInput onChange={(e)=>{ this.onChange( row, column)}} type="radio" id={`${this.props.input.id}-${row}-${column}`} name={record.id} value={value} defaultChecked={preFillMultipleChoiceGrid.isEqual} /></td>
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
    
                </FormGroup>
            </React.Fragment>
        );
    }
};
export default MultipleChoiceGrid;