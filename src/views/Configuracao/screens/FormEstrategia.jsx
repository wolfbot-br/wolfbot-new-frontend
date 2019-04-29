import React, { Component } from 'react'
import Select from "react-select";
import Switch from "react-bootstrap-switch";
import MaskedInput from 'react-text-mask';
import CurrencyFormat from 'react-currency-format';

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

class FormEstrategia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candleSelect: null,
            multipleSelectTargetCurrency: null,
            alterState: false,
            baseCurrency: 'USD',
            targetCurrency: [],
            purchaseQuantity: '',
            profit: '',
            stop: '',
            sellForIndicator: '',
            maxOrdersOpen: '',
            candleSize: '',
        };
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleState = () => {
        this.setState({ alterState: !this.state.alterState })
    }

    onSubmit = e => {
        e.preventDefault();
        const currencies = this.state.multipleSelectTargetCurrency;
        const arrayCurrencies = currencies.map(item => item.label);
        const values = {
            base_currency: this.state.baseCurrency,
            target_currency: arrayCurrencies,
            purchase_quantity: this.state.purchaseQuantity,
            profit: this.state.profit,
            stop: this.state.stop,
            sellForIndicator: this.state.sellForIndicator,
            maxOrdersOpen: this.state.maxOrdersOpen,
            candle_size: this.state.candleSize
        }
        console.log(values)
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
                <Form className="form-horizontal" onSubmit={this.onSubmit}>
                    <CardBody>
                        <Col xs="12">
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
                                            name="multipleSelectTargetCurrency"
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
                                                { value: "1", label: "BTC " },
                                                { value: "2", label: "ETC" },
                                                { value: "3", label: "ETH" },
                                                { value: "4", label: "LTC" },
                                                { value: "5", label: "ADA " },
                                                { value: "6", label: "XRP" },
                                            ]}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Valor por ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <CurrencyFormat
                                            prefix={'$'}
                                            placeholder="$0.00"
                                            decimalScale={2}
                                            thousandSeparator={true}
                                            type="text"
                                            name="purchaseQuantity"
                                            value={this.state.purchaseQuantity}
                                            onChange={this.handleChange}
                                            customInput={Input}
                                        />
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
                        </Col>
                    </CardBody>
                    <CardFooter>
                        <Button
                            className="btn-fill"
                            color="primary"
                            onClick={this.handleState}
                        >
                            Alterar
                        </Button>
                        <Button
                            className="btn-fill"
                            color="success"
                            disabled={this.state.alterState ? false : true}
                            type="submit"
                        >
                            Gravar
                        </Button>
                    </CardFooter>
                </Form>
            </Card>
        )
    }
}

export default FormEstrategia;
