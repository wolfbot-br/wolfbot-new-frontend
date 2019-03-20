import React from 'react';
import { Row, Col } from 'reactstrap';
import ResumoOperacoes from './screens/ResumoOperacoes';
import ResumoInvestimento from './screens/ResumoInvestimento';
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
        <Col lg={4}>
          <ResumoOperacoes />
        </Col>
        <Col lg={4}>
          <ResumoInvestimento />
        </Col>
        <Col lg={4}>
          <BotaoRobo />
        </Col>
        <Col>
          <TablePosicoes />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
