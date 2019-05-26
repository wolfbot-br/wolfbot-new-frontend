import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";
import ReactTable from "react-table";

class TablePosicoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.arrayOpenOrders;

    const columns = [
      {
        Header: "Moeda",
        accessor: "currency",
        headerClassName: "text-center"
      },
      {
        Header: "Quantidade",
        accessor: "amount",
        headerClassName: "text-center"
      },
      {
        Header: "Custo",
        accessor: "cost",
        headerClassName: "text-center"
      },
      {
        Header: "Dias",
        accessor: "timeOpen",
        headerClassName: "text-center"
      }
    ];

    return (
      <Card className="text-center">
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
      </Card>
    );
  }
}

export default TablePosicoes;
