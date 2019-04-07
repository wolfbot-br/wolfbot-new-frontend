import React, { Component } from 'react';
import Select from 'react-select';
import Switch from "react-bootstrap-switch";
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
    Button,
    Input
} from 'reactstrap'

class ConfigBacktest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exchangeSelect: '',
            currencySelect: '',
            candleSelect: '',
            profit: '',
            stop: '',
            base_currency: 'USD',
            date: '',
            indicators: [
                {
                    name: 'EMA',
                    state: false,
                    short_period: 0,
                    long_period: 0,
                    signal_period: 0,
                },
                {
                    name: 'MACD',
                    state: false,
                    short_period: 0,
                    long_period: 0,
                },
                {
                    name: 'CCI',
                    state: false,
                    short_period: 0,
                    long_period: 0,
                },
                {
                    name: 'BBANDS',
                    state: false,
                    short_period: 0,
                    long_period: 0,
                },
                {
                    name: 'STOCH',
                    state: false,
                    short_period: 0,
                    long_period: 0,
                }
            ],
        };
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }
    handleSwitch = (elem, state) => {
        console.log(elem)
        console.log(state)
    }

    onSubmit = e => {
        e.preventDefault();
        const arrIndicators = this.state.indicators;
        const indicators = arrIndicators.filter(item => {
            if (item.state === true) {
                return item;
            }
        });


        const values = {
            exchange: this.state.exchangeSelect.value,
            target_currency: this.state.currencySelect.value,
            candle_size: this.state.candleSelect.value,
            indicators: indicators,
            profit: this.state.profit,
            stop: this.state.stop,
            base_currency: this.state.base_currency,
            date: this.state.date
        }
        console.log(values)

        if (indicators.length > 0) {
            console.log('success');
        } else {
            console.log('deu ruim')
        }
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
                <Form action="/" className="form-horizontal" method="get" onSubmit={this.onSubmit}>
                    <CardBody>
                        <Col xs="12">
                            <Row>
                                <Label sm="2">Exchange</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="exchangeSelect"
                                            value={this.state.exchangeSelect}
                                            onChange={value => this.setState({
                                                exchangeSelect: value
                                            })}
                                            options={[
                                                { value: "Bittrex", label: "Bittrex" },
                                                { value: "Bitfinex", label: "Bitfinex" }
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
                                            onChange={value => this.setState({
                                                currencySelect: value
                                            })}
                                            options={[
                                                { value: "BTC", label: "BTC" },
                                                { value: "ETH", label: "ETH" },
                                                { value: "ETC", label: "ETC" },
                                                { value: "XRP", label: "XRP" }
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
                                            onChange={value => this.setState({
                                                candleSelect: value
                                            })}
                                            options={[
                                                { value: "5m", label: "5 minutos" },
                                                { value: "15m", label: "15 minutos" },
                                                { value: "30m", label: "30 minutos" },
                                                { value: "1h", label: "1 hora" }
                                            ]}
                                            placeholder="Escolha o período de candle"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">EMA</Label>
                                <Col sm="2">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            value={this.state.indicators[0].state}
                                            onChange={
                                                (elem, state) => this.handleSwitch(elem, state)
                                            }
                                            name="ema"
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    {
                                        this.state.indicators[0].state === true
                                            ? (<Label>teste</Label>)
                                            : null
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">MACD</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            defaultValue={false}
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">CCI</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            defaultValue={false}
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">BBANDS</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            defaultValue={false}
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">STOCH</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            defaultValue={false}
                                            offColor=""
                                            onColor=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Lucro</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Stop-Loss</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Datade início</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <Input type="date" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn-fill" color="primary" type="submit">
                            Testar
                    </Button>
                    </CardFooter>
                </Form>
            </Card>
        )
    }
}

export default ConfigBacktest
