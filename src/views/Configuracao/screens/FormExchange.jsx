import React, { Component } from 'react'
import Select from "react-select";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    Label,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'

class FormExchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exchange: '',
            apiKey: '',
            apiSecret: '',
        };
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props)
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Configuração Exchange</CardTitle>
                    <p className="card-category">
                        Configuração da exchange que será utilizada.
                    </p>
                </CardHeader>
                <Form className="form-horizontal" onSubmit={this.onSubmit}>
                    <CardBody>
                        <Col xs="12">
                            <Row>
                                <Label sm="2">Exchange</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="singleSelect"
                                            value={this.state.exchange}
                                            onChange={value =>
                                                this.setState({ exchange: value })
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
                                        <Input
                                            type="text"
                                            placeholder="chave da api"
                                            name="apiKey"
                                            value={this.state.apiKey}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Api Secret</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="chave secreta da api"
                                            name="apiSecret"
                                            value={this.state.apiSecret}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                    <CardFooter>
                        <Button
                            className="btn-fill"
                            color="primary"
                            type="submit">
                            Gravar
                    </Button>
                    </CardFooter>
                </Form>
            </Card>
        )
    }
}

export default FormExchange;
