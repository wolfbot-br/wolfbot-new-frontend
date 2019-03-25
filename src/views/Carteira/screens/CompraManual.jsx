import React, { Component } from 'react'
import { Col, Card } from 'reactstrap'

class CompraManual extends Component {

  render() {
    return (
      <Card>
        <Col className='text-center'>
          <p className='text-white'>Crie ordens de compra manuais.</p>
          {/* <select name='moedas' id='moedas'>
            <option value='valor1'>Valor 1</option>
            <option value='valor2' selected>Valor 2</option>
            <option value='valor3'>Valor 3</option>
          </select> */}
        </Col>
      </Card>
    )
  }
}

export default CompraManual
