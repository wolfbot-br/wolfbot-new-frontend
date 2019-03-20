import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const ResumoOperacoes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo de Operaçoes</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg='8' className='text-center' >
            <CardTitle>Total de Ordens Abertas</CardTitle>
            <hr />
            <Row>
              <Col>
                <CardSubtitle className="mb-2 mt-2 text-muted">Custo</CardSubtitle>
                <CardText>24,87653494</CardText>
              </Col>
              <Col>
                <CardSubtitle className="mb-2 mt-2 text-muted">Resultado</CardSubtitle>
                <CardText>35,46%</CardText>
              </Col>
              <Col>
                <CardSubtitle className="mb-2 mt-2 text-muted">Tempo</CardSubtitle>
                <CardText>24 dias</CardText>
              </Col>
              <Col>
                <CardSubtitle className="mb-2 mt-2 text-muted">Nº Ordens</CardSubtitle>
                <CardText>34</CardText>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ResumoOperacoes
