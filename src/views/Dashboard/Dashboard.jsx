import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ResumoOperacoes from "./screens/ResumoOperacoes";
import Totalizadores from "./screens/Totalizadores";
import TablePosicoes from "./screens/TablePosicoes";
import BotaoRobo from "./screens/BotaoRobo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import functions from "../../utils/functions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => ({
  dashboard_reload: state.dashboard.dashboard_reload
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
