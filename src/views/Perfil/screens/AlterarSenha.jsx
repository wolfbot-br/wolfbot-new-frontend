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
          <h5 className="title">Editar Perfil</h5>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(values => this.onSubmit(values))}
            className="form"
          >
            <Row>
              <Col className="pr-md-1" md="5">
                <FormGroup>
                  <label>Email</label>
                  <Field
                    component={Input}
                    placeholder="Email"
                    type="text"
                    name="email"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col className="px-md-1" md="3">
                <FormGroup>
                  <label>Username</label>
                  <Field
                    component={Input}
                    placeholder="Username"
                    type="text"
                    name="username"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-md-1" md="6">
                <FormGroup>
                  <label>Nome</label>
                  <Field
                    component={Input}
                    placeholder="Nome"
                    type="text"
                    name="name"
                  />
                </FormGroup>
              </Col>
              <Col className="pl-md-1" md="6">
                <FormGroup>
                  <label>Sobrenome</label>
                  <Field
                    component={Input}
                    placeholder="Sobrenome"
                    type="text"
                    name="sobrenome"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Endereço</label>
                  <Field
                    component={Input}
                    placeholder="Endereço"
                    type="text"
                    name="endereco"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-md-1" md="4">
                <FormGroup>
                  <label>Cidade</label>
                  <Field
                    component={Input}
                    placeholder="Cidade"
                    type="text"
                    name="cidade"
                  />
                </FormGroup>
              </Col>
              <Col className="px-md-1" md="4">
                <FormGroup>
                  <label>País</label>
                  <Field
                    component={Input}
                    placeholder="País"
                    type="text"
                    name="pais"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <FormGroup>
                  <label>Sobre</label>
                  <Field
                    component={Input}
                    placeholder="Sobre"
                    type="textarea"
                    name="sobre"
                    rows="4"
                  />
                </FormGroup>
              </Col>
            </Row>
          </form>
        </CardBody>
        <CardFooter>
          <Button className="btn-fill" color="primary" type="submit">
            Salvar
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
