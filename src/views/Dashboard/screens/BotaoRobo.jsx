import React, { Component } from 'react'
import { Row, Col, CardHeader, CardTitle, CardBody, Card } from 'reactstrap'
import Switch from "react-bootstrap-switch";

class BotaoRobo extends Component {
  render() {
    return (
      <Card className="card-stats card">
        <CardHeader>
          <CardTitle>
            <i className='tim-icons icon-spaceship text-success' /> Status Robo
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="2" >
              <CardTitle tag="h5">
                <i className='tim-icons icon-button-power text-info' style={{ fontSize: 30 }} />
              </CardTitle>
            </Col>
            <Col xs="6">
              <CardTitle tag="h5" className="text-center" style={{ paddingTop: 6 }}>
                Acionar Robo
              </CardTitle>
            </Col>
            <Col xs='4' style={{ paddingTop: 4, paddingLeft: 0 }} >
              <Switch
                defaultValue={false}
                offColor=""
                onColor=""
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="2" style={{ marginTop: 10 }} >
              <CardTitle tag="h5">
                <i className='tim-icons icon-cart text-danger' style={{ fontSize: 30 }} />
              </CardTitle>
            </Col>
            <Col xs="6" style={{ marginTop: 10 }}>
              <CardTitle tag="h5" className="text-center" style={{ paddingTop: 6 }}>
                Acionar Compra
              </CardTitle>
            </Col>
            <Col xs='4' style={{ paddingTop: 4, paddingLeft: 0, marginTop: 10 }} >
              <Switch
                defaultValue={false}
                offColor=""
                onColor=""
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="2" style={{ marginTop: 10 }} >
              <CardTitle tag="h5">
                <i className='tim-icons icon-coins text-warning' style={{ fontSize: 30 }} />
              </CardTitle>
            </Col>
            <Col xs="6" style={{ marginTop: 10 }}>
              <CardTitle tag="h5" className="text-center" style={{ paddingTop: 6 }}>
                Acionar Venda
              </CardTitle>
            </Col>
            <Col xs='4' style={{ paddingTop: 4, paddingLeft: 0, marginTop: 10 }} >
              <Switch
                defaultValue={false}
                offColor=""
                onColor=""
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default BotaoRobo
