import React from 'react'
import { Row, Col } from 'reactstrap'
import FormConfiguracao from './screens/FormConfiguracao'

const Configuracao = () => {
  return (
    <div className='content'>
      <Row>
        <Col>
          <FormConfiguracao />
        </Col>
      </Row >
    </div >
  )
}

export default Configuracao;