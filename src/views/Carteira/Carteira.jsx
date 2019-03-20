import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import Ativos from './screens/Ativos'
import CompraManual from './screens/CompraManual'

class Carteira extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='content'>
        <Row>
          <Col>
            <Ativos />
          </Col>
        </Row>
        <Row>
        </Row>
      </div>
    )
  }
}

export default Carteira
