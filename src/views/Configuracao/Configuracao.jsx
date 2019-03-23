import React, { Component } from 'react';

// reactstrap components
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

import FormExchange from './screens/FormExchange';
import FormEstrategia from './screens/FormEstrategia';
import FormIndicadores from './screens/FormIndicadores';

class Configuracao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "exchange"
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
                    this.state.horizontalTabs === "exchange" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "exchange")
                  }
                >
                  Exchange
              </NavLink>
              </NavItem>
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
                    this.state.horizontalTabs === "indicador" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "indicador")
                  }
                >
                  Indicadores
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              className="tab-space"
              activeTab={this.state.horizontalTabs}
            >
              <TabPane tabId="exchange">
                <FormExchange />
              </TabPane>
              <TabPane tabId="estrategia">
                <FormEstrategia />
              </TabPane>
              <TabPane tabId="indicador">
                <FormIndicadores />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Configuracao