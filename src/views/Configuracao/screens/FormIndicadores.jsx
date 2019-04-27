import React, { Component } from 'react'
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

class FormIndicadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Configuração Indicadores</CardTitle>
                    <p className="card-category">
                        Configuração dos indicadores que serão utilizados.
                    </p>
                </CardHeader>
                <CardBody>
                    <Form action="/" className="form-horizontal" method="get">
                        <Row>
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
                                            <Input type="number" placeholder="período curto" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">Long period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
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
                                            <Input type="number" placeholder="período curto" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">Long period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">Signal period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
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
                                            <Input type="number" placeholder="período curto" />
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
                                            <Input type="number" placeholder="período curto" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">Stddev period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
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
                                            <Input type="number" placeholder="período curto" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">K slow period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label sm="6">D period</Label>
                                    <Col sm="6">
                                        <FormGroup>
                                            <Input type="number" placeholder="período longo" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
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

export default FormIndicadores;
