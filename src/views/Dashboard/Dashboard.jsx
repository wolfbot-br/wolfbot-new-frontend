import React from 'react';
import { Row, Col } from 'reactstrap';
import ResumoOperacoes from './screens/ResumoOperacoes';
import Totalizadores from './screens/Totalizadores';
import TablePosicoes from './screens/TablePosicoes';
import BotaoRobo from './screens/BotaoRobo'

const Dashboard = () => {
  return (
    <div className="content">
      <Row>
        <Col lg={12}>
          <Totalizadores />
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <ResumoOperacoes />
        </Col>
        <Col lg={3}>
          <BotaoRobo />
        </Col>
      </Row>
      <Row>
        <Col>
          <TablePosicoes />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
