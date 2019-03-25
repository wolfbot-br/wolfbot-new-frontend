import React, { Component } from 'react'
import Select from 'react-select'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    Label,
    Button
} from 'reactstrap'

class ConfigBacktest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exchangeSelect: null,
            currencySelect: null,
            candleSelect: null,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Configuração de Estratégia</CardTitle>
                    <p className="card-category">
                        Configuração de estratégia para teste.
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
                                            name="exchangeSelect"
                                            value={this.state.singleSelect}
                                            onChange={value =>
                                                this.setState({ exchangeSelect: value })
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
                                <Label sm="2">Moeda Alvo</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="currencySelect"
                                            value={this.state.currencySelect}
                                            onChange={value =>
                                                this.setState({ currencySelect: value })
                                            }
                                            options={[
                                                { value: "1", label: "BTC" },
                                                { value: "2", label: "ETH" },
                                                { value: "3", label: "ETC" },
                                                { value: "4", label: "XRP" }
                                            ]}
                                            placeholder="Escolha a moeda que será alvo do teste"
                                        />
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
                        Testar
                    </Button>
                </CardFooter>
            </Card>
        )
    }
}

export default ConfigBacktest
