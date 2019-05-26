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
import { atualizarDashboard, getDashboardData } from "./DashboardActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    const { atualizarDashboard } = this.props;
    const USER_BOT = functions.loadLocalStorage("user_bot");

    if (USER_BOT) {
      const socket = io(
        `${config.URL.ioHost}?user=${USER_BOT.authenticatedUser.uid}`
      );

      socket.on("updates", async receive => {
        atualizarDashboard(receive);
      });

      await this.props.getDashboardData(USER_BOT.authenticatedUser.accessToken);
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
      dayResult: Number(this.props.dayResult).toFixed(2),
      overallResult: Number(this.props.overallResult).toFixed(2),
      openOrders: this.props.totalizerResult.openOrders,
      closeOrders: this.props.totalizerResult.closeOrders
    };

    const operationsSummary = {
      totalInvested: this.props.operationsSummaryResult.totalInvested,
      investimentReturn: this.props.operationsSummaryResult.investimentReturn,
      profit: this.props.operationsSummaryResult.profit,
      profitPercentual: this.props.operationsSummaryResult.profitPercentual,
      totalAssets: Number(this.props.totalAssets).toFixed(2)
    };

    const arrayOpenOrders = this.props.openOrdersTableResult.map(item => ({
      ...item,
      amount: Number(item.amount).toFixed(2),
      cost: Number(item.cost).toFixed(2)
    }));

    return (
      <div className="content">
        <Row>
          <Col lg={12}>
            <Totalizadores totalizers={totalizers} />
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <ResumoOperacoes operationsSummary={operationsSummary} />
          </Col>
          <Col lg={3}>
            <BotaoRobo />
          </Col>
        </Row>
        <Row>
          <Col>
            <TablePosicoes arrayOpenOrders={arrayOpenOrders} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Logs logs={this.props.logs} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ atualizarDashboard, getDashboardData }, dispatch);
const mapStateToProps = state => ({
  dashboard_reload: state.dashboard.dashboard_reload,
  valueTeste: state.dashboard.valueTeste,
  dayResult: state.dashboard.dayResult,
  openOrdersTableResult: state.dashboard.openOrdersTableResult,
  operationsSummaryResult: state.dashboard.operationsSummaryResult,
  overallResult: state.dashboard.overallResult,
  totalizerResult: state.dashboard.totalizerResult,
  totalAssets: state.dashboard.totalAssets
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
