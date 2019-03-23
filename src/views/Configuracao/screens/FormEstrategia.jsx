import React, { Component } from 'react'
import Select from "react-select";
import Switch from "react-bootstrap-switch";
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
            candleSelect: null,
            multipleSelectTargetCurrency: null,
        };
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Configuração Estratégia</CardTitle>
                    <p className="card-category">
                        Configuração da Estratégia que será utilizada.
                    </p>
                </CardHeader>
                <CardBody>
                    <Col xs="12">
                        <Form action="/" className="form-horizontal" method="get">
                            <Row>
                                <Label sm="2">Moeda base</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            USD
                                        </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Moedas Alvo</Label>
                                <Col sm="10">
                                    <FormGroup>

                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            placeholder="moedas à negociar"
                                            name="multipleSelect"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={this.state.multipleSelectTargetCurrency}
                                            onChange={value =>
                                                this.setState({ multipleSelectTargetCurrency: value })
                                            }
                                            options={[
                                                {
                                                    value: "",
                                                    label: " Escolha as moedas",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "BTC " },
                                                { value: "3", label: "ETC" },
                                                { value: "4", label: "ETH" },
                                                { value: "5", label: "LTC" },
                                                { value: "6", label: "ADA " },
                                                { value: "7", label: "XRP" },
                                                { value: "8", label: "IOTA " },
                                            ]}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Valor por ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Ganho por Ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Stop de Ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Vender pelo indicador</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: "6px" }}>
                                        <Switch
                                            defaultValue={false}
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Max ordens abertas</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Tamanho do candle</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="candleSelect"
                                            value={this.state.candleSelect}
                                            onChange={value =>
                                                this.setState({ candleSelect: value })
                                            }
                                            options={[
                                                { value: "1", label: "5 minutos" },
                                                { value: "2", label: "15 minutos" },
                                                { value: "3", label: "30 minutos" },
                                                { value: "4", label: "1 hora" }
                                            ]}
                                            placeholder="Escolha o período de candle"
                                        />
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
