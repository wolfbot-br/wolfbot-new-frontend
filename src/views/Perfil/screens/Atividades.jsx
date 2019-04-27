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
import ReactTable from "react-table";

class Atividades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit(values) {}

  render() {
    const data = [
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      },
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      },
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      },
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      },
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      },
      {
        ip: "179.159.58.72",
        location: "São Paulo - Brasil",
        so: "Windows 10",
        browser: "Google Chrome",
        date: "27/04/2019 13:09"
      }
    ];

    const columns = [
      {
        Header: "IP",
        accessor: "ip",
        headerClassName: "text-center"
      },
      {
        Header: "Localização",
        accessor: "location",
        headerClassName: "text-center"
      },
      {
        Header: "Sistema Operacional",
        accessor: "so",
        headerClassName: "text-center"
      },
      {
        Header: "Navegador",
        accessor: "browser",
        headerClassName: "text-center"
      },
      {
        Header: "Data",
        accessor: "date",
        headerClassName: "text-center"
      }
    ];

    const { handleSubmit } = this.props;
    return (
      <Card>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardHeader>
          <h5 className="title">Relatório de Acessos na Conta</h5>
        </CardHeader>
        <CardBody>
          <ReactTable
            data={data}
            filterable
            resizable={false}
            columns={columns}
            defaultPageSize={5}
            showPaginationTop
            showPaginationBottom={false}
            className="-striped -highlight"
            // Text
            previousText="Anterior"
            nextText="Próximo"
            loadingText="Carregando..."
            noDataText="Nenhuma linha"
            pageText="Página"
            ofText="do"
            rowsText="linhas"
            // Accessibility Labels
            pageJumpText="pular para a página"
            rowsSelectorText="linhas por página"
          />
        </CardBody>
        <CardFooter />
      </Card>
    );
  }
}

Atividades = reduxForm({ form: "dadosPessoaisForm" })(Atividades);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Atividades);
