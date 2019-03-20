import React, { Component } from 'react'
import { Row, Col, CardHeader, CardBody, Card } from 'reactstrap'
import Switch from "react-bootstrap-switch";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { ligarRobo } from '../DashboardActions'

class BotaoRobo extends Component {
  constructor(props) {
    super(props)
  }

  handleChange() {

  }
  render() {
    return (
      <Card className='card-style card'>
        <CardHeader className='card-header-style'>
          <i className='fa fa-rocket' /> Acionar Robo
          </CardHeader>
        <CardBody>
          <Row>
            <Col lg='2' >
              <i className='fa fa-power-off fa-3x' />
            </Col>
            <Col lg='3' >
              <label htmlFor='small-radius-switch'>
                <Switch
                  defaultValue={false}
                  offColor=""
                  offText=""
                  onColor=""
                  onText=""
                />
              </label>
            </Col>
            <Col>
              <h5>Robo Ligado</h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg='2' >
              <i className='fa fa-arrow-down fa-3x' />
            </Col>
            <Col lg='3' >
              <label htmlFor='small-radius-switch'>
                <Switch
                  defaultValue={false}
                  offColor=""
                  offText=""
                  onColor=""
                  onText=""
                />
              </label>
            </Col>
            <Col>
              <h5>Compra Ligado</h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg='2' >
              <i className='fa fa-arrow-up fa-3x' />
            </Col>
            <Col lg='3' >
              <label htmlFor='small-radius-switch'>
                <Switch
                  defaultValue={false}
                  offColor=""
                  offText=""
                  onColor=""
                  onText=""
                />
              </label>
            </Col>
            <Col>
              <h5>Venda Ligado</h5>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
// const mapStateToProps = state => ({
//   roboLigado: state.dashboard.roboLigado
// })
// const mapDispatchToProps = dispatch => bindActionCreators({ ligarRobo }, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(BotaoRobo)

export default BotaoRobo
