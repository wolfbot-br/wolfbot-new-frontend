import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import io from "socket.io-client";

import ResumoOperacoes from "./screens/ResumoOperacoes";
import Totalizadores from "./screens/Totalizadores";
import TablePosicoes from "./screens/TablePosicoes";
import BotaoRobo from "./screens/BotaoRobo";
import Logs from "./screens/Logs";

import functions from "../../utils/functions";
import config from "../../config";
import { atualizarDashboard } from "./DashboardActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { atualizarDashboard } = this.props;
    const USER_BOT = functions.loadLocalStorage("user_bot");

    if (USER_BOT) {
      const socket = io(
        `${config.URL.ioHost}?user=${USER_BOT.authenticatedUser.uid}`
      );

      socket.on("updates", async receive => {
        atualizarDashboard(receive);
      });
    }
  }

  componentDidMount() {
    const USER_BOT = functions.loadLocalStorage("user_bot");
    if (USER_BOT.dashboard_reload === 1) {
      localStorage.setItem(
        "user_bot",
        JSON.stringify({ ...USER_BOT, dashboard_reload: 2 })
      );
      window.location.reload();
    }
  }

  render() {
    const totalizers = {
      dayResult: this.props.dayResult,
      overallResult: this.props.overallResult,
      totalizerOpenOrders: this.props.totalizerOpenOrders,
      totalizerClosedOrders: this.props.totalizerClosedOrders
    };
    return (
      <div className="content">
        <Row>
          <Col lg={12}>
            <Totalizadores totalizers={totalizers} />
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <ResumoOperacoes operationsSummary={this.props.operationsSummary} />
          </Col>
          <Col lg={3}>
            <BotaoRobo />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <TablePosicoes />
          </Col>
          <Col lg={4}>
            <Logs />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Logs />
          </Col>
        </Row> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ atualizarDashboard }, dispatch);
const mapStateToProps = state => ({
  dashboard_reload: state.dashboard.dashboard_reload,
  valueTeste: state.dashboard.valueTeste,
  dayResult: state.dashboard.dayResult,
  overallResult: state.dashboard.overallResult,
  totalizerOpenOrders: state.dashboard.totalizerOpenOrders,
  totalizerClosedOrders: state.dashboard.totalizerClosedOrders,
  operationsSummary: state.dashboard.operationsSummary
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
