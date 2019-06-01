import React, { Component } from 'react';
import Select from 'react-select';
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
  Form,
  FormGroup,
  Label,
  Button,
  Input
} from 'reactstrap';
import { postBacktest } from '../BacktestAction';

class ConfigBacktest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeSelect: '',
      currencySelect: '',
      candleSelect: '',
      sellForIndicator: false,
      profit: '',
      stop: '',
      date: '',
      name: 'EMA',

      emaState: true,
      emaPeriod: 9,

      macdState: false,
      macdShortPeriod: 12,
      macdLongPeriod: 26,
      macdSignalPeriod: 9,

      stochState: false,
      stochKperiod: 10,
      stochKslowPeriod: 15,
      stochDperiod: 8,

      cciState: false,
      cciPeriod: 10,

      bbandsState: false,
      bbandsPeriod: 4,
      bbandsStddevPeriod: 5,

      alterState: false,
      onSubmited: false,
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }
  handleSwitch = e => {
    const name = e.props.name;
    const value = e.props.value;
    this.setState({ [name]: !value });
    if (name === 'emaState' && this.state.emaState === true) {
      this.setState({
        name: 'EMA',
        macdState: false,
        cciState: false,
        stochState: false,
        bbandsState: false,
      });
    }
    if (name === 'macdState' && this.state.macdState === true) {
      this.setState({
        name: 'MACD',
        emaState: false,
        cciState: false,
        stochState: false,
        bbandsState: false,
      });
    }
    if (name === 'cciState' && this.state.cciState === true) {
      this.setState({
        name: 'CCI',
        macdState: false,
        emaState: false,
        stochState: false,
        bbandsState: false,
      });
    }
    if (name === 'stochState' && this.state.stochState === true) {
      this.setState({
        name: 'STOCH',
        macdState: false,
        cciState: false,
        emaState: false,
        bbandsState: false,
      });
    }
    if (name === 'bbandsState' && this.state.bbandsState === true) {
      this.setState({
        name: 'BBANDS',
        macdState: false,
        cciState: false,
        stochState: false,
        emaState: false,
      });
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    const values = {
      exchange: this.state.exchangeSelect.value,
      candle_size: this.state.candleSelect.value,
      indicator: {
        name: this.state.name,
        macd_long_period: this.state.macdLongPeriod,
        macd_short_period: this.state.macdShortPeriod,
        macd_signal_period: this.state.macdSignalPeriod,
        ema_period: this.state.emaPeriod,
        stoch_k_period: this.state.stochKperiod,
        stoch_k_slow_period: this.state.stochKslowPeriod,
        stoch_d_period: this.state.stochDperiod,
        cci_period: this.state.cciPeriod,
        bbands_period: this.state.bbandsPeriod,
        bbands_stddev_period: this.state.bbandsStddevPeriod,
      },
      sellForIndicator: this.state.sellForIndicator,
      profit: this.state.profit,
      stop: this.state.stop,
      base_currency: 'USD',
      target_currency: this.state.currencySelect.value,
      date: this.state.date
    }
    const resultBacktest = await postBacktest(values);
    if (resultBacktest.status === 200) {
      console.log(resultBacktest.data)
      this.props = resultBacktest.data
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
                      name="exchangeSelect"
                      value={this.state.exchangeSelect}
                      onChange={value => this.setState({
                        exchangeSelect: value
                      })}
                      options={[
                        { value: "bittrex", label: "Bittrex" },
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
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.emaState}
                      onChange={this.handleSwitch}
                      name="emaState"
                    />
                  </FormGroup>
                </Col>
                {
                  this.state.emaState === true
                    ? (
                      <Row>
                        <Col sm="6">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="emaPeriod"
                              placeholder="period"
                              type="text"
                              guide={false}
                              value={this.state.emaPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                    : null
                }
              </Row>
              <Row>
                <Label sm="2">MACD</Label>
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.macdState}
                      onChange={this.handleSwitch}
                      name="macdState"
                    />
                  </FormGroup>
                </Col>
                {
                  this.state.macdState === true
                    ? (
                      <Row>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="macdShortPeriod"
                              placeholder="short period"
                              type="text"
                              guide={false}
                              value={this.state.macdShortPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="macdLongPeriod"
                              placeholder="long period"
                              type="text"
                              guide={false}
                              value={this.state.macdLongPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="macdSignalPeriod"
                              placeholder="signal period"
                              type="text"
                              guide={false}
                              value={this.state.macdSignalPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                    : null
                }
              </Row>
              <Row>
                <Label sm="2">CCI</Label>
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.cciState}
                      onChange={this.handleSwitch}
                      name="cciState"
                    />
                  </FormGroup>
                </Col>
                {
                  this.state.cciState === true
                    ? (
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="cciPeriod"
                              placeholder="period"
                              type="text"
                              guide={false}
                              value={this.state.cciPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                    : null
                }
              </Row>
              <Row>
                <Label sm="2">BBANDS</Label>
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.bbandsState}
                      onChange={this.handleSwitch}
                      name="bbandsState"
                    />
                  </FormGroup>
                </Col>
                {
                  this.state.bbandsState === true
                    ? (
                      <Row>
                        <Col sm="3">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="bbandsPeriod"
                              placeholder="period"
                              type="text"
                              guide={false}
                              value={this.state.bbandsPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="bbandsStddevPeriod"
                              placeholder="stddev period"
                              type="text"
                              guide={false}
                              value={this.state.bbandsStddevPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                    : null
                }
              </Row>
              <Row>
                <Label sm="2">STOCH</Label>
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.stochState}
                      onChange={this.handleSwitch}
                      name="stochState"
                    />
                  </FormGroup>
                </Col>
                {
                  this.state.stochState === true
                    ? (
                      <Row>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="stochKperiod"
                              placeholder="K period"
                              type="text"
                              guide={false}
                              value={this.state.stochKperiod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="stochKslowPeriod"
                              placeholder="K slow period"
                              type="text"
                              guide={false}
                              value={this.state.stochKslowPeriod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="2">
                          <FormGroup>
                            <MaskedInput
                              mask={[/[1-9]/, /\d/, /\d/]}
                              name="stochDperiod"
                              placeholder="D period"
                              type="text"
                              guide={false}
                              value={this.state.stochDperiod}
                              onChange={this.handleChange}
                              render={(ref, props) => (<Input innerRef={ref} {...props} />)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                    : null
                }
              </Row>
              <Row>
                <Label sm="2">Lucro</Label>
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
                <Label sm="2">Stop-Loss</Label>
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
                <Label sm="2">Vender Pelo Indicador</Label>
                <Col sm="1">
                  <FormGroup style={{ paddingTop: 6 }}>
                    <Switch
                      value={this.state.sellForIndicator}
                      onChange={this.handleSwitch}
                      name="sellForIndicator"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Label sm="2">Datade início</Label>
                <Col sm="10">
                  <FormGroup>
                    <Input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
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
