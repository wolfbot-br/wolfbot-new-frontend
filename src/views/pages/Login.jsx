import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NotificationAlert from "react-notification-alert";

import { login } from "./authActions";
import { loginRequest } from "./AuthRequests";
import bgImagem from "../../assets/img/bg-login.jpg";
import Input from "../../components/Input/Input";
import functions from "../../utils/functions";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // login
  async onSubmit(values) {
    const { login } = this.props;
    const loginResult = await loginRequest(values);
    if (!loginResult.data.success) {
      loginResult.data.errors.forEach(erro => {
        const options = {
          place: "tr",
          message: erro.message,
          type: "danger",
          icon: "tim-icons icon-bell-55",
          autoDismiss: 3
        };
        this.refs.notificationAlert.notificationAlert(options);
      });
    } else {
      login({ ...loginResult.data });
      this.props.history.replace("/admin/dashboard");
    }
  }

  criarUmaConta(values) {
    this.props.history.replace("/auth/register");
  }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <div
          className="content"
          style={{ backgroundImage: "url(" + bgImagem + ")" }}
        >
          <div className="rna-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Container>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <form
                onSubmit={handleSubmit(value => this.onSubmit(value))}
                className="form"
              >
                <Card className="card-login card-default">
                  <CardHeader>
                    <img
                      alt="..."
                      src={require("../../assets/img/card-info.png")}
                    />
                    <CardTitle
                      tag="h1"
                      style={{
                        fontSize: "41px",
                        textAlign: "center",
                        color: "#FFFFFF"
                      }}
                    >
                      WOLFBOT
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        component={Input}
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Senha"
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      color="info"
                      type="submit"
                      size="lg"
                    >
                      Entrar
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link text-info info footer-link"
                          href="#pablo"
                          onClick={handleSubmit(value =>
                            this.criarUmaConta(value)
                          )}
                        >
                          Criar uma conta
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link text-info footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Esqueci a senha!
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
Login = reduxForm({ form: "authForm" })(Login);
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Login);
