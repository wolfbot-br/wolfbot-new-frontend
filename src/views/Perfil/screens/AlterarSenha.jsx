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

class AlterarSenha extends Component {
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
          <h5 className="title">Alterar Senha</h5>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(values => this.onSubmit(values))}
            className="form"
          >
            <Row>
              <Col className="pr-md-1" md="12">
                <FormGroup>
                  <label>Senha Atual</label>
                  <Field
                    component={Input}
                    placeholder="Senha Atual"
                    type="password"
                    name="password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-md-1" md="12">
                <FormGroup>
                  <label>Nova Senha</label>
                  <Field
                    component={Input}
                    placeholder="Nova Senha"
                    type="password"
                    name="new_password"
                  />
                </FormGroup>
              </Col>
            </Row>
          </form>
        </CardBody>
        <CardFooter>
          <Button className="btn-fill" color="primary" type="submit">
            Salvar Alteração
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

AlterarSenha = reduxForm({ form: "dadosPessoaisForm" })(AlterarSenha);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(AlterarSenha);
