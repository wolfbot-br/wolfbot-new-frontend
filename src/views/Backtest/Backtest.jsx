import React, { Component } from 'react'
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

import ConfigBacktest from './screens/ConfigBacktest'
class Backtesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "estrategia"
    };
  }

  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs="12">
            <Nav className="nav-pills-info" pills>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#"
                  className={
                    this.state.horizontalTabs === "estrategia" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "estrategia")
                  }
                >
                  Estratégia
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#"
                  className={
                    this.state.horizontalTabs === "resultados" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "resultados")
                  }
                >
                  Resultados
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              className="tab-space"
              activeTab={this.state.horizontalTabs}
            >
              <TabPane tabId="estrategia">
                <ConfigBacktest />
              </TabPane>
              <TabPane tabId="resultados">
                teste 2
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Backtesting
