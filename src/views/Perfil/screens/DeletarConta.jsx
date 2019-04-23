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

class DeletarConta extends Component {
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
        <h5 className="title">Deletar a minha conta</h5>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(values => this.onSubmit(values))}
          className="form"
        >
          <Row>
            <Col className="pr-md-1" md="12">
              <FormGroup>
                <label>Informe a sua senha antes de deletar a sua conta</label>
                <Field
                  component={Input}
                  placeholder="Senha Atual"
                  type="password"
                  name="password"
                />
              </FormGroup>
            </Col>
          </Row>
        </form>
      </CardBody>
      <CardFooter>
        <Button className="btn-fill" color="primary" type="submit">
          Excluir a minha conta
        </Button>
      </CardFooter>
    </Card>
    );
  }
}

DeletarConta = reduxForm({ form: "dadosPessoaisForm" })(DeletarConta);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(DeletarConta);
