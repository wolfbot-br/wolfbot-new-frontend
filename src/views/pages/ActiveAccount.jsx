import React from "react";
import NotificationAlert from "react-notification-alert";
import bgImagem from "../../assets/img/bg-login.jpg";
import { Link } from "react-router-dom";
import * as qs from "query-string";
import Loading from "../../components/Loading/Loading";
import Page404 from "./Page404.jsx";

import { verifyActiveAccount } from "./authActions";

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardFooter,
  CardTitle,
  Container,
  Col,
  Row
} from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ActiveAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.code = qs.parse(this.props.location.search).oobCode;
  }

  componentDidMount() {
    document.body.classList.toggle("account-active-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("account-active-page");
  }
  componentWillMount() {
    this.props.verifyActiveAccount(this.code);
  }

  render() {
    if (
      this.props.accountActive &&
      (!this.props.codeActiveAccountInvalid || !this.props.accountActive)
    )
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
                          src="https://raw.githubusercontent.com/wolfbot-br/wolfbot-frontend/master/public/dist/img/account/done.png"
                          width="125px"
                          height="125px"
                          style={{ display: "block", margin: "10px auto" }}
                        />
                        <CardTitle style={{ textAlign: "center" }} tag="h2">
                          Sua conta foi ativada!
                        </CardTitle>
                        <CardTitle style={{ textAlign: "center" }} tag="h4">
                          Acesse sua conta com seu email e senha.
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
    else if (this.props.codeActiveAccountInvalid || this.props.emailIsActive) {
      return <Page404 />;
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => ({
  accountActive: state.auth.accountActive,
  emailIsActive: state.auth.emailIsActive,
  codeActiveAccountInvalid: state.auth.codeActiveAccountInvalid
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ verifyActiveAccount }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveAccount);
