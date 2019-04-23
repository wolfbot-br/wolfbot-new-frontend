import React, { Component } from "react";

// reactstrap components
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

import FormDadosPessoais from "./screens/DadosPessoais";
import FormAlterarSenha from "./screens/AlterarSenha";
import FormAtividades from "./screens/Atividades";
import FormExcluirConta from "./screens/DeletarConta";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "dados_pessoais"
    };
  }

  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Nav className="nav-pills-info" pills>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={
                      this.state.horizontalTabs === "dados_pessoais"
                        ? "active"
                        : ""
                    }
                    onClick={e =>
                      this.changeActiveTab(
                        e,
                        "horizontalTabs",
                        "dados_pessoais"
                      )
                    }
                  >
                    Dados Pessoais
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={
                      this.state.horizontalTabs === "alterar_senha"
                        ? "active"
                        : ""
                    }
                    onClick={e =>
                      this.changeActiveTab(e, "horizontalTabs", "alterar_senha")
                    }
                  >
                    Alterar Senha
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={
                      this.state.horizontalTabs === "atividades" ? "active" : ""
                    }
                    onClick={e =>
                      this.changeActiveTab(e, "horizontalTabs", "atividades")
                    }
                  >
                    Atividades
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#"
                    className={
                      this.state.horizontalTabs === "deletar_conta"
                        ? "active"
                        : ""
                    }
                    onClick={e =>
                      this.changeActiveTab(e, "horizontalTabs", "deletar_conta")
                    }
                  >
                    Deletar a conta
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                className="tab-space"
                activeTab={this.state.horizontalTabs}
              >
                <TabPane tabId="dados_pessoais">
                  <FormDadosPessoais />
                </TabPane>
                <TabPane tabId="alterar_senha">
                  <FormAlterarSenha />
                </TabPane>
                <TabPane tabId="atividades">
                  <FormAtividades />
                </TabPane>
                <TabPane tabId="deletar_conta">
                  <FormExcluirConta />
                </TabPane>
              </TabContent>
            </Col>
            {/* <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default User;
