import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ResumoOperacoes = () => {
  const data = [
    { name: 'BTC', value: 30 },
    { name: 'DASH', value: 10 },
    { name: 'XMR', value: 20 },
    { name: 'ETC', value: 40 }
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo de Operaçoes</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg='4' >
            <PieChart width={150} height={150}>
              <Pie
                dataKey='value'
                isAnimationActive
                data={data}
                outerRadius={60}
                cx={80}
                cy={70}
                labelLine={false}
                label={renderCustomizedLabel}
                fill='#8884d8'
              >
                {data.map((entry, index) => <Cell key={COLORS} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </Col>
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
