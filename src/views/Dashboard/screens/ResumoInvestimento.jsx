import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const ResumoInvestimento = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retorno de Investimento</CardTitle>
      </CardHeader>
      <CardBody>
        <Row className="mb-2 text-center">
          <Col lg={6}>
            <CardText>Valor Investido:</CardText>
          </Col>
          <Col lg={4}>
            <CardText>USDT 76,89</CardText>
          </Col>
        </Row>
        <Row className="mb-2 text-center">
          <Col lg={6}>
            <CardText>Retorno Total:</CardText>
          </Col>
          <Col lg={4}>
            <CardText style={{ color: '#4dbd74' }}>USDT 10,00 (5%)</CardText>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='text-center' >
            <CardText>USDT Total em ativos na exchange:</CardText>
            <CardText>USDT 106,87</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card >
  )
}

export default ResumoInvestimento
