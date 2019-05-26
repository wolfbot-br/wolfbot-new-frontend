import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
import Input from "../../../components/Input/Input";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ajuda1 from "../../../assets/img/ajuda1.png";

class Configurando extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Row>
        <Col xs="12" lg="12" sm="12">
          <Card>
            <CardHeader color="#FFFFFF">
              <h5 className="title">Passo 1: Se Conectando a Exchange</h5>
            </CardHeader>
            <CardBody>
              <p className="card-category">
                Nesta tela é onde você se conecta a sua exchange (Bittrex ou
                Bitfinex), aqui você deve inserir as suas credenciais de conexão
                para só então avançar para a segunda parte da configuração que é
                a definição da sua estratégia.
              </p>
              <img
                src={ajuda1}
                width="800px"
                height="400"
                style={{ display: "block", margin: "10px auto" }}
              />
              <CardHeader color="#FFFFFF">
                <h5 className="title">Passo 2: Definindo a estratégia</h5>
              </CardHeader>
              <p className="card-category">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                asperiores sed repellendus, accusamus odio voluptas, placeat
                ullam quae, illum numquam repellat rerum pariatur blanditiis
                ratione repudiandae iure vero error reiciendis.
              </p>
              <img
                src={ajuda1}
                width="800px"
                height="400"
                style={{ display: "block", margin: "10px auto" }}
              />
            </CardBody>
            <CardFooter />
          </Card>
        </Col>
      </Row>
    );
  }
}

Configurando = reduxForm({ form: "deleteAccountForm" })(Configurando);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Configurando);
