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

class FormConfiguracao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleSelect: null,
        };
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
                <CardBody>
                    <Col xs="12">
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
                                        <Input type="text" placeholder="chave da api" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Api Secret</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="text" placeholder="chave secreta da api" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </CardBody>
                <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                        Gravar
                    </Button>
                </CardFooter>
            </Card>
        )
    }
}

export default FormConfiguracao;
