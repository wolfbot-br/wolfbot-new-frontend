import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../../assets/css/font-awesome.min.css";
import "../../assets/css/pe-icon-7-stroke.css";
import "../../assets/css/open-sans.css";

import "../../assets/css/landing-page.css";

import bg3 from "../../assets/img/bg-login.jpg";
import iphone3 from "../../assets/img/template/iphone3.png";
import bittrex from "../../assets/img/logos/bittrex.png";
import bitfinex from "../../assets/img/logos/bitfinex.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="landing-page landing-page1">
        <div className="wrapper">
          <div className="parallax filter-gradient" data-color="blue">
            <div className="parallax-background">
              <img className="parallax-background-image" src={bg3} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-5 hidden-xs">
                  <div className="parallax-image">
                    <img
                      className="phone"
                      src={iphone3}
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <div className="description">
                    <h2 sty>wolfbot</h2>
                    <br />
                    <h5>
                      plataforma capaz de realizar transações de forma
                      automática para seus usuários através da configuração de
                      estratégias predefinidas com o objetivo de se beneficiar
                      da volatilidade do mercado para obter lucros.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section section-gray section-clients"
            style={{ backgroundColor: "#fffff" }}
          >
            <div className="container text-center">
              <h4 className="header-text">Integração com várias exchanges</h4>
              <p style={{ color: "#000000" }}>
                as principais exchanges do mercado estão disponíveis para
                integração com a plataforma Wolfbot.
                <br />
              </p>
              <div className="logos">
                <ul className="list-unstyled">
                  <li>
                    <img src={bittrex} width="103px" height="43px" />
                  </li>
                  <li>
                    <img src={bitfinex} width="103px" height="53px" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="section section-features"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="container">
              <h4
                className="header-text text-center"
                style={{ backgroundColor: "#000000" }}
              >
                <p>Funcionalidades</p>
              </h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-white">
                    <div className="icon">
                      <i className="pe-7s-note2" />
                    </div>
                    <div className="text">
                      <h4 style={{ color: "#000000" }}>
                        Dashboard de Gerenciamento
                      </h4>
                      <p style={{ color: "#000000" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem omnis dignissimos neque reiciendis quos? Animi
                        nam velit eos nobis? Aspernatur, similique quidem maxime
                        nostrum esse quasi officia modi nesciunt veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-white">
                    <div className="icon">
                      <i className="pe-7s-bell" />
                    </div>
                    <h4 style={{ color: "#000000" }}>Bot de Monitoramento</h4>
                    <p style={{ color: "#000000" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem sed tenetur voluptatibus vero libero,
                      necessitatibus consequuntur pariatur similique iure,
                      consequatur excepturi eius voluptate saepe quaerat
                      perspiciatis minima sunt alias!
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-white">
                    <div className="icon">
                      <i className="pe-7s-graph1" />
                    </div>
                    <h4 style={{ color: "#000000" }}>Ambiente de Backtest</h4>
                    <p style={{ color: "#000000" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis possimus ad repudiandae, dicta odit earum
                      voluptates omnis ratione veniam tempora nobis. Unde
                      repudiandae consequuntur sed recusandae quisquam inventore
                      reprehenderit itaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-no-padding">
            <div className="parallax filter-gradient" data-color="blue">
              <div className="parallax-background">
                <img className="parallax-background-image" src={bg3} />
              </div>
              <div className="info">
                <h1 style={{ color: "#FFFFFF" }}>Cadastre-se Agora</h1>
                <p style={{ color: "#FFFFFF" }}>
                  E automatize seu processo de trade!
                </p>
                <a
                  href="/auth/register"
                  className="btn btn-neutral btn-lg btn-fill"
                >
                  CRIAR MINHA CONTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Home);
