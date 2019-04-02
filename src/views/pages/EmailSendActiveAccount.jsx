import React from "react";
import NotificationAlert from "react-notification-alert";
import bgImagem from "../../assets/img/bg-login.jpg";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardFooter,
  CardTitle,
  CardHeader,
  CardImg,
  Container,
  Col,
  Row
} from "reactstrap";

class EmailSendActiveAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList.toggle("email-send-active-account-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("email-send-active-account-page");
  }

  render() {
    return (
      <>
        <div
          className="content"
          style={{ backgroundImage: "url(" + bgImagem + ")" }}
        >
          <div className="rna-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Container className="ContainerAuth">
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="card-white card p-4">
                    <CardBody>
                      <img
                        src="https://i.ibb.co/s210zrF/email.png"
                        width="125px"
                        height="125px"
                        style={{ display: "block", margin: "10px auto" }}
                      />
                      <CardTitle style={{ textAlign: "center" }} tag="h2">
                        Confirme seu Email
                      </CardTitle>
                      <CardTitle style={{ textAlign: "center" }} tag="h4">
                        Verifique sua caixa de entrada, pois enviamos um email
                        para que você possa ativar sua conta.
                      </CardTitle>
                    </CardBody>
                    <CardFooter className="pageCardFooter p-4">
                      <Row className="justify-content-center">
                        <p className="pageCardText text-muted">
                          Entrar em sua conta?
                        </p>
                        <Link to="/login">
                          <Button color="link" className="px-0">
                            Login
                          </Button>
                        </Link>
                      </Row>
                    </CardFooter>
                    <CardFooter className="pageCardFooter p-4">
                      <Row className="justify-content-center">
                        <img
                          src="dist/img/template/logo-icon.svg"
                          width="30px"
                          height="30px"
                          style={{ display: "block", margin: "10px auto" }}
                        />
                      </Row>
                      <CardTitle style={{ textAlign: "center" }} tag="h3">
                        Wolfbot
                      </CardTitle>
                    </CardFooter>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default EmailSendActiveAccount;
