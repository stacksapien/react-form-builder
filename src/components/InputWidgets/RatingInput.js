import React, { Component } from 'react';
import { Row, Form, InputGroup, FormGroup, Label, Input, Col, Card, CardBody, CustomInput, Table, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import {getFormPreFillRating} from './../../../../helpers/fomrUtils';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
var classNames = require('classnames');


class RatingInput extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            rating : -1
        }
    }
    
    onClick = (rating) => {
        if(rating >= 0){
            
            this.props.onInputDataChange(this.props.sectionIndex, this.props.fieldIndex, rating)
            this.setState(
                {rating : rating}
            )

        }
    }
    getRatingButtons = () =>{
        let buttons = [];
        
        for(let index = this.props.input.values.minValue ; index <= this.props.input.values.maxValue ; index++){
            var btnClass = classNames('px-3', {
                'active': this.state.rating == index
              });

            if(index == this.props.input.values.minValue){
                buttons.push(<div className="px-1" ><Button outline onClick={(e)=> {this.onClick(index)}} style={{width : "3em", height : "3em"}} color="primary" className={btnClass} >{index}</Button ><div style={{textTransform : "none", textAlign : "left", whiteSpace : "nowrap"}} className="pro-user-desc mt-2">{this.props.input.values.minLabel}</div></div>)
                continue;
            }
            if(index == this.props.input.values.maxValue){
            buttons.push(<div className="px-1"  ><Button outline onClick={(e)=> {this.onClick(index)}} color="primary" className={btnClass} >{index}</Button><div style={{textTransform : "none", textAlign : "right", whiteSpace : "nowrap"}} className="pro-user-desc mt-2">{this.props.input.values.maxLabel}</div></div>)
                continue;
            }
                buttons.push(<div className="px-1" ><Button onClick={(e)=> {this.onClick(index)}} outline color="primary" className={btnClass}  >{index}</Button></div>)
        }

        return buttons

    }

    componentDidMount(){
        let prefilFormRating = getFormPreFillRating(this.props.input);
        if(prefilFormRating.index > -2){
            this.setState({
                rating : prefilFormRating.index
            })
        }
    }
    
    render() {
        
       return (<React.Fragment>
            <h5 className="mb-3">{this.props.label}</h5>
            <div className="row mt-4 mb-2" style={{width : "100%"}}>
                {this.getRatingButtons().map((e) =>{
                    return <Col md={1} xs={1}>{e}</Col>;
                })}
            </div>
        </React.Fragment>)
    }
};

export default RatingInput;