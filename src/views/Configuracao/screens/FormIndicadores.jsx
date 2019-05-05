import React, { Component } from 'react'
import Switch from "react-bootstrap-switch";
import NotificationAlert from "react-notification-alert";
import {
    Row,
    Col,
    Label,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'

class FormIndicadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="rna-container">
                    <NotificationAlert ref="notificationAlert" />
                </div>
                <h5 className="info-text">
                    Estratégia
                </h5>
                <Form className="form-horizontal" onSubmit={this.onSubmit}>
                    <Row className="justify-content-center mt-5">
                        <Col xs="4">
                            <Row>
                                <Label sm="6">Indicador</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            EMA
                                        </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Status</Label>
                                <Col sm="6">
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
                                <Label sm="6">Short period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período curto" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Long period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4">
                            <Row>
                                <Label sm="6">Indicador</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            MACD
                                            </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Status</Label>
                                <Col sm="6">
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
                                <Label sm="6">Short period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período curto" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Long period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Signal period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4">
                            <Row>
                                <Label sm="6">Indicador</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            CCI
                                            </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Status</Label>
                                <Col sm="6">
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
                                <Label sm="6">Period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período curto" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <hr />
                    <Row>
                        <Col xs="4">
                            <Row>
                                <Label sm="6">Indicador</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            BBANDS
                                            </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Status</Label>
                                <Col sm="6">
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
                                <Label sm="6">Period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período curto" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Stddev period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4">
                            <Row>
                                <Label sm="6">Indicador</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <p className="form-control-static">
                                            STOCH
                                            </p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">Status</Label>
                                <Col sm="6">
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
                                <Label sm="6">K period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período curto" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">K slow period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label sm="6">D period</Label>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input type="text" placeholder="período longo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <Button
                                className="btn-fill"
                                color="primary"
                                onClick={this.handleState}
                                disabled={this.state.alterState ? true : false}
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
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}

export default FormIndicadores;
