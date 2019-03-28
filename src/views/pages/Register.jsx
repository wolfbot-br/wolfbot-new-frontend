import React from "react";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NotificationAlert } from "react-notification-alert";

import { signup } from "./authActions";
import { signupRequest } from "./AuthRequests";
import Input from "../../components/Input/Input";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import bgImagem from "../../assets/img/bg-login.jpg";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.body.classList.toggle("register-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }

  async onSubmit(values) {
    const { signup } = this.props;
    const signupResult = await signupRequest(values);
    if (!signupResult.data.sucess) {
      signupResult.data.errors.forEach(erro => {
        const options = {
          place: "tr",
          message: erro.message,
          type: "danger",
          icon: "tim-icons icon bell-55",
          autoDismiss: 3
        };
        this.refs.NotificationAlert.NotificationAlert(options);
      });
    } else {
      alert("sucesso");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <div
          className="content"
          style={{ backgroundImage: "url(" + bgImagem + ")" }}
        >
          <Container>
            <Row>
              <Col className="ml-auto" md="5">
                <div className="info-area info-horizontal mt-5">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-wifi" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Estratégia</h3>
                    <p className="description">
                      Escolha a melhor estratégia para você e tenha resultados
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-triangle-right-17" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Backtest</h3>
                    <p className="description">
                      Teste sua estratégia e análise se sua estratégia teria
                      dado certo ou não
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-trophy" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Compra e Venda</h3>
                    <p className="description">
                      Realize operações manuais dentro da plataforma com
                      segurança
                    </p>
                  </div>
                </div>
              </Col>
              <form
                onSubmit={handleSubmit(values => this.onSubmit(values))}
                className="form"
              >
                <Col className="mr-auto" md="7">
                  <Card className="card-register card-white">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/card-primary.png")}
                      />
                      <CardTitle tag="h4">Cadastro</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          component={Input}
                          placeholder="Nome"
                          type="text"
                          name="name"
                        />
                      </InputGroup>
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
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          component={Input}
                          type="password"
                          name="passwordConfirm"
                          placeholder="Senha de Confirmação"
                        />
                      </InputGroup>
                      {/* <FormGroup check className="text-left">
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />I agree to the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            terms and conditions
                          </a>
                          .
                        </Label>
                      </FormGroup> */}
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        Criar Conta
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </form>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

Register = reduxForm({ form: "registerForm" })(Register);
const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Register);
