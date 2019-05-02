import React, { Component } from 'react'
import Select from "react-select";
import Switch from "react-bootstrap-switch";
import MaskedInput from 'react-text-mask';
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

import {
    getConfiguracao,
    postConfiguracao,
} from '../ConfiguracaoActions'

class FormEstrategia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candleSize: null,
            multipleSelectTargetCurrency: null,
            alterState: false,
            baseCurrency: 'USD',
            purchaseQuantity: '',
            profit: '',
            stop: '',
            sellForIndicator: false,
            maxOrdersOpen: '',
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

    handleSwitch = (e) => {
        const name = e.props.name;
        const value = e.props.value;
        this.setState({ [name]: !value });
    }

    async componentDidMount() {
        const configuracao = await getConfiguracao();
        if (configuracao === 404 || configuracao === 400) {
            this.setState({ alterState: true });
        } else {
            this.setState({
                candleSize: {
                    value: configuracao.candle_size || ''
                },
                multipleSelectTargetCurrency: configuracao.target_currency || '',
                purchaseQuantity: configuracao.purchase_quantity || '',
                profit: configuracao.profit || '',
                stop: configuracao.stop || '',
                sellForIndicator: configuracao.sellForIndicator || false,
                maxOrdersOpen: configuracao.maxOrdersOpen || '',
                alterState: false
            });
        }
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
            candle_size: this.state.candleSize.value
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
                                        <MaskedInput
                                            mask={[/[2-9]/, /\d/, /\d/]}
                                            name="purchaseQuantity"
                                            placeholder="valor mínimo para compra $20 valor máximo $999"
                                            type="text"
                                            guide={false}
                                            value={this.state.purchaseQuantity}
                                            onChange={this.handleChange}
                                            render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Ganho por Ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <MaskedInput
                                            mask={[/[0-1]/, '.', /[0-9]/, /[0-9]/]}
                                            name="profit"
                                            placeholder="exemplos de percentual - 0.01 = 1%, 0.10 = 10%, 1.00 = 100%"
                                            type="text"
                                            guide={false}
                                            value={this.state.profit}
                                            onChange={this.handleChange}
                                            render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Stop de Ordem</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <MaskedInput
                                            mask={[/[0-1]/, '.', /[0-9]/, /[0-9]/]}
                                            name="stop"
                                            placeholder="exemplos de percentual - 0.01 = 1%, 0.10 = 10%, 1.00 = 100%"
                                            type="text"
                                            guide={false}
                                            value={this.state.stop}
                                            onChange={this.handleChange}
                                            render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Vender pelo indicador</Label>
                                <Col sm="10">
                                    <FormGroup style={{ paddingTop: 6 }}>
                                        <Switch
                                            name="sellForIndicator"
                                            value={this.state.sellForIndicator}
                                            onChange={this.handleSwitch}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="2">Max ordens abertas</Label>
                                <Col sm="10">
                                    <FormGroup>
                                        <MaskedInput
                                            mask={[/[1-9]/, /\d/]}
                                            name="maxOrdersOpen"
                                            placeholder="Máximo de ordens abertas por moeda"
                                            type="text"
                                            guide={false}
                                            value={this.state.maxOrdersOpen}
                                            onChange={this.handleChange}
                                            render={(ref, props) => (<Input innerRef={ref} {...props} />)}
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
                                            value={this.state.candleSize}
                                            onChange={value =>
                                                this.setState({ candleSize: value })
                                            }
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
