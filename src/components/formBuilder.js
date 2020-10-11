import React, { Component } from 'react';
import {
    Row,
    Form,
    InputGroup,
    FormGroup,
    Label,
    Input,
    Col,
    Card,
    CardBody,
    CustomInput,
    Table,
    Button,
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import InputWidget from './InputWidgets/InputWidget';
import { UncontrolledAlert } from 'reactstrap';

import sampleData from './test-data.json';

class FormBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            records: [],
            loading: false,
            sizePerPage: 25,
            page: 1,
            total: 0,
            isTableLoading: false,
            // data: sampleData.response,
            data: props.data,

            isFeedbackSubmitted: false,
        };
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.onInputDataChange = this.onInputDataChange.bind(this);
    }
    /**
     * Handles the submit
     */
    handleValidSubmit = (event) => {
    // Your submit handler here
    };

    onInputDataChange = (sectionIndex, fieldIndex, value) => {
        let newData = Object.assign({}, this.state.data);
        newData.data[sectionIndex].fields[fieldIndex].userInput = value;

        console.log(newData);

        this.setState({
            data: newData,
        });

        // console.log(JSON.stringify(this.state.data, null, 2));

        // console.log(this.state.data);
    };

    closeForm = () => {
        if (this.props.toggleSlider) {
            this.props.toggleSlider();
        }
    };

    render() {
        return (
            <React.Fragment>
                <h5 className="mb-3 mt-3">{this.state.data.title}</h5>
                <p className="text-muted">{this.state.data.description}</p>
                <Row className="bg-light">
                    {/* tab pills */}

                    <Col md={12} className="mt-2">
                        <AvForm
                            onValidSubmit={(e) => {
                                this.handleValidSubmit(e);
                            }}>
                            {this.state.data.data.map((section, sectionIndex) => {
                                return section.fields.map((input, index) => {
                                    return (
                                        <Card>
                                            <CardBody className="py-3">
                                                <InputWidget
                                                    type={input.type}
                                                    label={input.label}
                                                    data={input}
                                                    key={`${sectionIndex}-${index}`}
                                                    sectionIndex={sectionIndex}
                                                    fieldIndex={index}
                                                    onInputDataChange={this.onInputDataChange}
                                                />
                                            </CardBody>
                                        </Card>
                                    );
                                });
                            })}
                            {this.state.isFeedbackSubmitted && (
                                <UncontrolledAlert color="success" className="mt-3">
                                    Your response is captured. Thank You!
                                </UncontrolledAlert>
                            )}
                            {this.state.loading && <Loader />}
                            <Button style={{ width: '100%' }}>Submit</Button>
                        </AvForm>
                    </Col>
                </Row>

                {/* Generating the Form from Json Data */}
            </React.Fragment>
        );
    }
}

export default FormBuilder;