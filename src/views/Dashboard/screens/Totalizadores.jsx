import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardFooter } from 'reactstrap'

const Totalizadores = () => {
  return (
    <Row>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-warning">
                  <i className="tim-icons icon-chat-33" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <CardTitle tag="h3">150GB</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-refresh-01" /> Update Now
                  </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-primary">
                  <i className="tim-icons icon-shape-star" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Followers</p>
                  <CardTitle tag="h3">+45k</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-sound-wave" /> Last Research
                  </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-success">
                  <i className="tim-icons icon-single-02" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Users</p>
                  <CardTitle tag="h3">150,000</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-trophy" /> Customers feedback
                  </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-danger">
                  <i className="tim-icons icon-molecule-40" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Errors</p>
                  <CardTitle tag="h3">12</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-watch-time" /> In the last
              hours
                  </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}

export default Totalizadores
