import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Atividades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit(values) {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardHeader>
          <h5 className="title">Relatório de Acessos na Conta</h5>
        </CardHeader>
        <CardBody>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    );
  }
}

Atividades = reduxForm({ form: "dadosPessoaisForm" })(Atividades);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Atividades);
