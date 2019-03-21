import React, { Component } from 'react'
import Select from "react-select";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Label,
    Form,
    FormGroup,
    Input
} from 'reactstrap'

class FormConfiguracao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleSelect: null,
        };
    }

    render() {
        return (
            <div className='content'>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Configuração</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form action="/" className="form-horizontal" method="get">
                                    <Row>
                                        <Label sm="2">Exchange</Label>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Select
                                                    className="react-select info"
                                                    classNamePrefix="react-select"
                                                    name="singleSelect"
                                                    value={this.state.singleSelect}
                                                    onChange={value =>
                                                        this.setState({ singleSelect: value })
                                                    }
                                                    options={[
                                                        { value: "1", label: "Bittrex" },
                                                        { value: "2", label: "Bitfinex" }
                                                    ]}
                                                    placeholder="Escolha sua exchange"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Api key</Label>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Input type="text" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Api Secret</Label>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Input type="text" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Disabled</Label>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Input
                                                    defaultValue="Disabled input here.."
                                                    disabled
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Static control</Label>
                                        <Col sm="10">
                                            <FormGroup>
                                                <p className="form-control-static">
                                                    hello@creative-tim.com
                                                </p>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Checkboxes and radios</Label>
                                        <Col className="checkbox-radios" sm="10">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />
                                                    <span className="form-check-sign" />
                                                    First Checkbox
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />
                                                    <span className="form-check-sign" />
                                                    Second Checkbox
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check className="form-check-radio">
                                                <Label check>
                                                    <Input
                                                        defaultChecked
                                                        defaultValue="option1"
                                                        id="exampleRadios1"
                                                        name="exampleRadios"
                                                        type="radio"
                                                    />
                                                    <span className="form-check-sign" />
                                                    First Radio
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check className="form-check-radio">
                                                <Label check>
                                                    <Input
                                                        defaultValue="option2"
                                                        id="exampleRadios2"
                                                        name="exampleRadios"
                                                        type="radio"
                                                    />
                                                    <span className="form-check-sign" />
                                                    Second Radio
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label sm="2">Inline checkboxes</Label>
                                        <Col sm="10">
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="checkbox" />
                                                    <span className="form-check-sign" />a
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="checkbox" />
                                                    <span className="form-check-sign" />b
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="checkbox" />
                                                    <span className="form-check-sign" />c
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FormConfiguracao;
